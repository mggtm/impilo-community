// Authentication & Multi-User State Service
import { supabase, isSupabaseConfigured } from '../lib/supabase';

// Key for local storage fallback persistence
const LOCAL_USER_KEY = 'impilo_community_user_session';
const MOCK_USERS_KEY = 'impilo_community_registered_users';

// Get stored local fallback users array
function getLocalUsers() {
  try {
    const raw = localStorage.getItem(MOCK_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalUser(user) {
  const users = getLocalUsers();
  const existingIdx = users.findIndex(u => u.id === user.id || u.email === user.email);
  if (existingIdx >= 0) {
    users[existingIdx] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

// Generate default user profile
export function createProfileObject(id, email, fullName, role = 'Community Member', location = 'Bulawayo, Zimbabwe') {
  // Generate random default professional avatar for new members
  const avatarId = Math.abs(id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 100 + 1;
  const avatar = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80`;

  return {
    id,
    name: fullName || email.split('@')[0],
    role: role || 'Community Member',
    avatar,
    location: location || 'Bulawayo, Zimbabwe',
    email,
    bio: 'Passionate community member collaborating on sustainable local projects and social entrepreneurship.',
    connections: [],
    registeredEvents: [],
    requestedMentorships: []
  };
}

export const authService = {
  // Initialize Session on App Boot
  async initSession(state, onUserChangedCallback) {
    // 1. Try Supabase Auth if configured
    if (isSupabaseConfigured && supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
          const profile = await this.fetchSupabaseProfile(session.user);
          if (profile) {
            state.currentUser = profile;
            this.syncNetworkMember(state, profile);
            if (onUserChangedCallback) onUserChangedCallback(profile);
            return profile;
          }
        }
      } catch (err) {
        console.warn('Supabase session fetch warning:', err);
      }
    }

    // 2. Fallback to LocalStorage Persistent Session
    try {
      const stored = localStorage.getItem(LOCAL_USER_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.name) {
          state.currentUser = parsed;
          this.syncNetworkMember(state, parsed);
          if (onUserChangedCallback) onUserChangedCallback(parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage session read error:', e);
    }

    return state.currentUser;
  },

  // Fetch or Upsert Profile from Supabase `profiles` table
  async fetchSupabaseProfile(sbUser) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sbUser.id)
        .single();

      if (data && !error) {
        // Query relationship tables
        const [connRes, eventRes, mentorRes] = await Promise.all([
          supabase.from('network_connections').select('connected_id').eq('user_id', sbUser.id),
          supabase.from('event_registrations').select('event_id').eq('user_id', sbUser.id),
          supabase.from('mentorship_requests').select('mentor_id').eq('requestor_id', sbUser.id)
        ]);

        const connections = connRes.data ? connRes.data.map(r => r.connected_id) : [];
        const registeredEvents = eventRes.data ? eventRes.data.map(r => r.event_id) : [];
        const requestedMentorships = mentorRes.data ? mentorRes.data.map(r => r.mentor_id) : [];

        return {
          id: data.id,
          name: data.full_name || sbUser.email.split('@')[0],
          role: data.role || 'Community Member',
          avatar: data.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
          location: data.location || 'Bulawayo, Zimbabwe',
          email: sbUser.email,
          bio: data.bio || 'Passionate community member.',
          connections,
          registeredEvents,
          requestedMentorships,
          interests: data.interests || [],
          skills: data.skills || []
        };
      } else {
        // Create initial profile record in Supabase
        const newProfile = createProfileObject(sbUser.id, sbUser.email, sbUser.user_metadata?.full_name || '');
        await supabase.from('profiles').upsert({
          id: sbUser.id,
          full_name: newProfile.name,
          role: newProfile.role,
          avatar_url: newProfile.avatar,
          location: newProfile.location,
          bio: newProfile.bio,
          email: sbUser.email
        });
        return newProfile;
      }
    } catch (e) {
      return createProfileObject(sbUser.id, sbUser.email, sbUser.user_metadata?.full_name || '');
    }
  },

  // Register New User
  async signUp({ email, password, fullName, role, location }, state) {
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, role, location }
        }
      });
      if (error) throw new Error(error.message);

      if (data.user) {
        const newProfile = createProfileObject(data.user.id, email, fullName, role, location);
        await supabase.from('profiles').upsert({
          id: data.user.id,
          full_name: newProfile.name,
          role: newProfile.role,
          avatar_url: newProfile.avatar,
          location: newProfile.location,
          bio: newProfile.bio
        });
        state.currentUser = newProfile;
        this.syncNetworkMember(state, newProfile);
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(newProfile));
        return newProfile;
      }
    }

    // LocalStorage Fallback Authentication
    const existingUsers = getLocalUsers();
    if (existingUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with this email already exists.');
    }

    const userId = `u-${Date.now()}`;
    const newProfile = createProfileObject(userId, email, fullName, role, location);
    newProfile._password = password; // Local dummy check

    saveLocalUser(newProfile);
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(newProfile));
    state.currentUser = newProfile;
    this.syncNetworkMember(state, newProfile);
    return newProfile;
  },

  // Sign In Existing User
  async signIn({ email, password }, state) {
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw new Error(error.message);

      if (data.user) {
        const profile = await this.fetchSupabaseProfile(data.user);
        state.currentUser = profile;
        this.syncNetworkMember(state, profile);
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
        return profile;
      }
    }

    // LocalStorage Fallback Sign In
    const existingUsers = getLocalUsers();
    const user = existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      throw new Error('Invalid email or password. Please check your credentials or register a new account.');
    }

    if (user._password && user._password !== password) {
      throw new Error('Invalid password. Please try again.');
    }

    state.currentUser = user;
    this.syncNetworkMember(state, user);
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
    return user;
  },

  // Sign Out Current User
  async signOut(state) {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }

    localStorage.removeItem(LOCAL_USER_KEY);

    // Revert to guest / default Mako Gufe demo account
    state.currentUser = {
      id: 'u-0',
      name: 'Mako Gufe',
      role: 'Community Member',
      avatar: './mako_avatar.jpg',
      location: 'Bulawayo, Zimbabwe',
      email: 'mako.gufe@example.com',
      bio: 'Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.',
      connections: ['u-1', 'u-5'],
      registeredEvents: ['ev-2'],
      requestedMentorships: []
    };
  },

  // Add registered user into the community network list so other members can see them
  syncNetworkMember(state, profile) {
    if (profile.id === 'u-0') return;
    const exists = state.network.some(m => m.id === profile.id || m.email === profile.email);
    if (!exists) {
      state.network.unshift({
        id: profile.id,
        name: profile.name,
        avatar: profile.avatar,
        title: profile.role || 'Community Member',
        bio: profile.bio || 'Active Impilo Community Member.',
        location: profile.location || 'Bulawayo, Zimbabwe',
        tags: ['Social Impact', 'Community', 'Innovation']
      });
    }
  }
};
