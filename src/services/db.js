import { supabase, isSupabaseConfigured } from '../lib/supabase';

export const dbService = {
  // Fetch all discussions with replies and likes
  async fetchDiscussions(currentUserId) {
    if (!isSupabaseConfigured || !supabase) return null;

    try {
      // 1. Fetch discussions with author profiles
      const { data: discussions, error: discError } = await supabase
        .from('discussions')
        .select(`
          id,
          title,
          category,
          content,
          created_at,
          author_id,
          profiles!discussions_author_id_fkey (
            full_name,
            avatar_url,
            role
          )
        `)
        .order('created_at', { ascending: false });

      if (discError) throw discError;

      // 2. Fetch replies with author profiles
      const { data: replies, error: repError } = await supabase
        .from('discussion_replies')
        .select(`
          id,
          discussion_id,
          content,
          created_at,
          author_id,
          profiles!discussion_replies_author_id_fkey (
            full_name,
            avatar_url,
            role
          )
        `)
        .order('created_at', { ascending: true });

      if (repError) throw repError;

      // 3. Fetch all likes
      const { data: likes, error: likesError } = await supabase
        .from('discussion_likes')
        .select('discussion_id, user_id');

      if (likesError) throw likesError;

      // Map DB structure to frontend expectations
      return discussions.map(d => {
        const dLikes = likes.filter(l => l.discussion_id === d.id);
        const dReplies = replies.filter(r => r.discussion_id === d.id);

        return {
          id: d.id,
          title: d.title,
          category: d.category,
          content: d.content,
          timestamp: d.created_at,
          author: {
            name: d.profiles?.full_name || 'Community Member',
            avatar: d.profiles?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
            role: d.profiles?.role || 'Community Member'
          },
          likes: dLikes.length,
          hasLiked: dLikes.some(l => l.user_id === currentUserId),
          replies: dReplies.map(r => ({
            id: r.id,
            content: r.content,
            timestamp: r.created_at,
            author: {
              name: r.profiles?.full_name || 'Community Member',
              avatar: r.profiles?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
              role: r.profiles?.role || 'Community Member'
            }
          }))
        };
      });
    } catch (err) {
      console.error('Error fetching discussions from Supabase:', err);
      return null;
    }
  },

  // Add a new discussion thread
  async addDiscussion(title, content, category, authorId) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('discussions')
        .insert({
          title,
          content,
          category,
          author_id: authorId
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error creating discussion in Supabase:', err);
      throw err;
    }
  },

  // Add a reply to a discussion
  async addReply(discId, content, authorId) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('discussion_replies')
        .insert({
          discussion_id: discId,
          content,
          author_id: authorId
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error replying in Supabase:', err);
      throw err;
    }
  },

  // Toggle like
  async toggleLike(discId, userId, alreadyLiked) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      if (alreadyLiked) {
        const { error } = await supabase
          .from('discussion_likes')
          .delete()
          .match({ discussion_id: discId, user_id: userId });
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('discussion_likes')
          .insert({ discussion_id: discId, user_id: userId });
        if (error) throw error;
      }
      return true;
    } catch (err) {
      console.error('Error toggling like in Supabase:', err);
      throw err;
    }
  },

  // Request mentorship
  async requestMentorship(mentorId, requestorId) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('mentorship_requests')
        .insert({
          mentor_id: mentorId,
          requestor_id: requestorId
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error requesting mentorship in Supabase:', err);
      throw err;
    }
  },

  // Register for an event
  async registerEvent(eventId, userId) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .insert({
          event_id: eventId,
          user_id: userId
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error registering event in Supabase:', err);
      throw err;
    }
  },

  // Toggle network connection
  async toggleConnection(memberId, userId, connectFlag) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      if (connectFlag) {
        const { error } = await supabase
          .from('network_connections')
          .insert({
            connected_id: memberId,
            user_id: userId
          });
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('network_connections')
          .delete()
          .match({
            connected_id: memberId,
            user_id: userId
          });
        if (error) throw error;
      }
      return true;
    } catch (err) {
      console.error('Error toggling connection in Supabase:', err);
      throw err;
    }
  },

  // Fetch activities
  async fetchActivities() {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('user_activities')
        .select(`
          id,
          action,
          target,
          link,
          created_at,
          profiles!user_activities_user_id_fkey (
            full_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data.map(act => ({
        id: act.id,
        user: act.profiles?.full_name || 'Community Member',
        action: act.action,
        target: act.target,
        link: act.link,
        timestamp: act.created_at
      }));
    } catch (err) {
      console.error('Error fetching activities in Supabase:', err);
      return null;
    }
  },

  // Log user activity
  async logActivity(action, target, link, userId) {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('user_activities')
        .insert({
          action,
          target,
          link,
          user_id: userId
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error logging activity in Supabase:', err);
      return null;
    }
  },

  // Fetch all registered member profiles
  async fetchNetworkProfiles() {
    if (!isSupabaseConfigured || !supabase) return null;
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data.map(p => ({
        id: p.id,
        name: p.full_name,
        avatar: p.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
        title: p.role || 'Community Member',
        bio: p.bio || 'Active Impilo Community Member.',
        location: p.location || 'Bulawayo, Zimbabwe',
        tags: p.interests && p.interests.length > 0 ? p.interests : ['Social Impact', 'Community', 'Innovation']
      }));
    } catch (err) {
      console.error('Error fetching profiles in Supabase:', err);
      return null;
    }
  }
};
