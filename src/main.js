// Main Entry Controller
import './style.css';

// Import Mock Data
import { 
  currentUser, 
  initialDiscussions, 
  initialMentors, 
  initialResources, 
  initialEvents, 
  initialNetwork,
  initialActivities
} from './data/mockData';

// Import View Modules
import { renderDashboard } from './pages/dashboard';
import { renderDiscussions } from './pages/discussions';
import { renderMentorship } from './pages/mentorship';
import { renderResources } from './pages/resources';
import { renderEvents } from './pages/events';
import { renderNetwork } from './pages/network';
import { renderProfile } from './pages/profile';
import { renderGrowth } from './pages/growth';

// Import Auth Service
import { authService } from './services/auth';

// ----------------------------------------------------
// Global Application State (in-memory)
// ----------------------------------------------------
const state = {
  currentUser: { ...currentUser },
  discussions: [...initialDiscussions],
  mentors: [...initialMentors],
  resources: [...initialResources],
  events: [...initialEvents],
  network: [...initialNetwork],
  activities: [...initialActivities]
};

// ----------------------------------------------------
// Toast Notification Engine
// ----------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  
  toastText.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// ----------------------------------------------------
// Auth Modal Renderer
// ----------------------------------------------------
function openAuthModal(initialTab = 'login') {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  let activeTab = initialTab;

  function renderModalContent() {
    modalContent.innerHTML = `
      <button class="modal-close-btn" id="modal-auth-close"><i class="lucide-x"></i></button>
      
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255, 191, 0, 0.1); border-radius: 50%; color: var(--color-primary); margin-bottom: 10px;">
          <i class="lucide-shield-check" style="font-size: 22px;"></i>
        </div>
        <h3 style="font-family: var(--font-title); font-size: 20px; color: #fff; margin: 0;">Impilo Community Account</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Join young entrepreneurs, innovators, and mentors making an impact.</p>
      </div>

      <!-- Tab Buttons -->
      <div style="display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid var(--border-light); padding-bottom: 10px;">
        <button id="tab-login" class="secondary-btn" style="flex: 1; justify-content: center; ${activeTab === 'login' ? 'background: rgba(255, 191, 0, 0.12); color: var(--color-primary); border-color: var(--color-primary); font-weight: 700;' : ''}">
          Log In
        </button>
        <button id="tab-register" class="secondary-btn" style="flex: 1; justify-content: center; ${activeTab === 'register' ? 'background: rgba(255, 191, 0, 0.12); color: var(--color-primary); border-color: var(--color-primary); font-weight: 700;' : ''}">
          Create Account
        </button>
      </div>

      <!-- Auth Error Notification -->
      <div id="auth-error" style="display: none; padding: 10px 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; border-radius: var(--border-radius-sm); font-size: 13px; margin-bottom: 15px;"></div>

      ${activeTab === 'login' ? `
        <!-- Sign In Form -->
        <form id="form-auth-login" style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Email Address</label>
            <input type="email" id="auth-email" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 12px; border-radius: var(--border-radius-sm);" placeholder="name@example.com" required>
          </div>
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Password</label>
            <input type="password" id="auth-password" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 12px; border-radius: var(--border-radius-sm);" placeholder="••••••••" required>
          </div>
          <button type="submit" id="btn-auth-submit" class="primary-btn" style="width: 100%; justify-content: center; margin-top: 6px; font-weight: 700; height: 42px;">
            Log In
          </button>
        </form>
      ` : `
        <!-- Register Form -->
        <form id="form-auth-register" style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Full Name</label>
            <input type="text" id="reg-name" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 12px; border-radius: var(--border-radius-sm);" placeholder="e.g. Sipho Ndlovu" required>
          </div>
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Email Address</label>
            <input type="email" id="reg-email" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 12px; border-radius: var(--border-radius-sm);" placeholder="name@example.com" required>
          </div>
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Password</label>
            <input type="password" id="reg-password" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 12px; border-radius: var(--border-radius-sm);" placeholder="Minimum 6 characters" minlength="6" required>
          </div>
          <div style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Role / Title</label>
              <select id="reg-role" style="width: 100%; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 8px; border-radius: var(--border-radius-sm); outline: none;">
                <option value="Community Member">Community Member</option>
                <option value="Social Entrepreneur">Social Entrepreneur</option>
                <option value="Youth Innovator">Youth Innovator</option>
                <option value="Student Developer">Student Developer</option>
              </select>
            </div>
            <div style="flex: 1;">
              <label style="font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 4px;">Location</label>
              <input type="text" id="reg-location" class="search-input" style="width: 100%; box-sizing: border-box; background: var(--bg-input); border: 1px solid var(--border-light); color: #fff; padding: 10px 8px; border-radius: var(--border-radius-sm);" value="Bulawayo, Zimbabwe" required>
            </div>
          </div>
          <button type="submit" id="btn-auth-submit" class="primary-btn" style="width: 100%; justify-content: center; margin-top: 6px; font-weight: 700; height: 42px;">
            Register Account
          </button>
        </form>
      `}
    `;

    // Bind Close
    document.getElementById('modal-auth-close').addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    // Bind Tab switching
    document.getElementById('tab-login').addEventListener('click', () => {
      activeTab = 'login';
      renderModalContent();
    });
    document.getElementById('tab-register').addEventListener('click', () => {
      activeTab = 'register';
      renderModalContent();
    });

    // Bind Submit Form
    const errorBox = document.getElementById('auth-error');

    if (activeTab === 'login') {
      document.getElementById('form-auth-login').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-auth-submit');
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;

        errorBox.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner" style="width: 16px; height: 16px; border-width: 2px;"></span> Logging in...`;

        try {
          const user = await authService.signIn({ email, password }, state);
          modalOverlay.classList.remove('active');
          showToast(`Welcome back, ${user.name}! 👋`);
          renderShell();
          router();
        } catch (err) {
          errorBox.textContent = err.message || 'Failed to log in.';
          errorBox.style.display = 'block';
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Log In';
        }
      });
    } else {
      document.getElementById('form-auth-register').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-auth-submit');
        const fullName = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const role = document.getElementById('reg-role').value;
        const location = document.getElementById('reg-location').value.trim();

        errorBox.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner" style="width: 16px; height: 16px; border-width: 2px;"></span> Registering...`;

        try {
          const user = await authService.signUp({ email, password, fullName, role, location }, state);
          modalOverlay.classList.remove('active');
          showToast(`Account created! Welcome, ${user.name}! 🎉`);
          renderShell();
          router();
        } catch (err) {
          errorBox.textContent = err.message || 'Failed to register account.';
          errorBox.style.display = 'block';
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Register Account';
        }
      });
    }
  }

  renderModalContent();
  modalOverlay.classList.add('active');
}

// ----------------------------------------------------
// State Mutation Actions (Callbacks passed to views)
// ----------------------------------------------------
const actions = {
  showToast,
  openAuthModal,

  signOut: async () => {
    await authService.signOut(state);
    showToast('Logged out successfully.');
    renderShell();
    router();
  },

  // Discussion actions
  addDiscussion: (title, content, category) => {
    const newDisc = {
      id: `disc-${state.discussions.length + 1}`,
      title,
      author: {
        name: state.currentUser.name,
        avatar: state.currentUser.avatar,
        role: state.currentUser.role
      },
      category,
      content,
      timestamp: new Date().toISOString(),
      likes: 0,
      hasLiked: false,
      replies: []
    };
    state.discussions.unshift(newDisc);

    // Add activity post
    state.activities.unshift({
      id: `act-${state.activities.length + 1}`,
      user: state.currentUser.name,
      action: 'started a discussion thread',
      target: title,
      timestamp: new Date().toISOString(),
      link: `#/discussions?id=${newDisc.id}`
    });
  },

  addReply: (discId, content) => {
    const disc = state.discussions.find(d => d.id === discId);
    if (!disc) return;

    disc.replies.push({
      id: `rep-${discId}-${disc.replies.length + 1}`,
      author: {
        name: state.currentUser.name,
        avatar: state.currentUser.avatar,
        role: state.currentUser.role
      },
      content,
      timestamp: new Date().toISOString()
    });

    // Add activity
    state.activities.unshift({
      id: `act-${state.activities.length + 1}`,
      user: state.currentUser.name,
      action: 'replied to discussion',
      target: disc.title,
      timestamp: new Date().toISOString(),
      link: `#/discussions?id=${discId}`
    });
  },

  toggleLike: (discId) => {
    const disc = state.discussions.find(d => d.id === discId);
    if (!disc) return;

    if (disc.hasLiked) {
      disc.likes = Math.max(0, disc.likes - 1);
      disc.hasLiked = false;
    } else {
      disc.likes += 1;
      disc.hasLiked = true;

      // Log activity when liking a discussion
      state.activities.unshift({
        id: `act-${state.activities.length + 1}`,
        user: state.currentUser.name,
        action: 'liked the discussion thread',
        target: disc.title,
        timestamp: new Date().toISOString(),
        link: `#/discussions?id=${discId}`
      });
    }
  },

  logResourceInteraction: (resId) => {
    const res = state.resources.find(r => r.id === resId);
    if (!res) return;

    // Avoid logging duplicates sequentially
    const alreadyLogged = state.activities[0] &&
                          state.activities[0].user === state.currentUser.name &&
                          state.activities[0].action === 'explored training resource' &&
                          state.activities[0].target === res.title;

    if (!alreadyLogged) {
      state.activities.unshift({
        id: `act-${state.activities.length + 1}`,
        user: state.currentUser.name,
        action: 'explored training resource',
        target: res.title,
        timestamp: new Date().toISOString(),
        link: '#/resources'
      });
    }
  },

  logGrowthExploration: () => {
    const alreadyLogged = state.activities[0] &&
                          state.activities[0].user === state.currentUser.name &&
                          state.activities[0].action === 'explored the Growth & Impact opportunities';

    if (!alreadyLogged) {
      state.activities.unshift({
        id: `act-${state.activities.length + 1}`,
        user: state.currentUser.name,
        action: 'explored the Growth & Impact opportunities',
        target: 'Growth & Impact Hub',
        timestamp: new Date().toISOString(),
        link: '#/growth'
      });
    }
  },

  // Mentorship Actions
  requestMentorship: (mentorId) => {
    if (!state.currentUser.requestedMentorships.includes(mentorId)) {
      state.currentUser.requestedMentorships.push(mentorId);
      
      const mentor = state.mentors.find(m => m.id === mentorId);
      // Log activity
      state.activities.unshift({
        id: `act-${state.activities.length + 1}`,
        user: state.currentUser.name,
        action: 'requested mentorship match with',
        target: mentor ? mentor.name : 'a mentor',
        timestamp: new Date().toISOString(),
        link: '#/mentorship'
      });
    }
  },

  // Events Actions
  registerEvent: (eventId) => {
    if (!state.currentUser.registeredEvents.includes(eventId)) {
      state.currentUser.registeredEvents.push(eventId);
      
      const event = state.events.find(e => e.id === eventId);
      if (event) {
        event.attendees += 1;
        
        // Log activity
        state.activities.unshift({
          id: `act-${state.activities.length + 1}`,
          user: state.currentUser.name,
          action: 'registered to attend',
          target: event.title,
          timestamp: new Date().toISOString(),
          link: '#/events'
        });
      }
    }
  },

  // Connection Actions
  toggleConnection: (memberId, connectFlag) => {
    if (connectFlag) {
      if (!state.currentUser.connections.includes(memberId)) {
        state.currentUser.connections.push(memberId);
        
        const member = state.network.find(m => m.id === memberId);
        // Log activity
        state.activities.unshift({
          id: `act-${state.activities.length + 1}`,
          user: state.currentUser.name,
          action: 'connected with network member',
          target: member ? member.name : 'a member',
          timestamp: new Date().toISOString(),
          link: '#/network'
        });
      }
    } else {
      state.currentUser.connections = state.currentUser.connections.filter(id => id !== memberId);
    }
  }
};

// ----------------------------------------------------
// UI Shell Render (Sidebar profile)
// ----------------------------------------------------
function renderShell() {
  const profileContainer = document.getElementById('sidebar-profile');
  const isGuest = state.currentUser.id === 'u-0';

  profileContainer.innerHTML = `
    <img src="${state.currentUser.avatar}" alt="${state.currentUser.name}" class="profile-avatar" style="cursor: pointer;" id="sidebar-avatar-click">
    <div class="profile-info">
      <div class="profile-name" style="cursor: pointer;" id="sidebar-name-click">${state.currentUser.name}</div>
      <div class="profile-role">${state.currentUser.role}</div>
      <div style="display: flex; gap: 4px; margin-top: 6px; flex-direction: column;">
        <button class="primary-btn" id="sidebar-btn-view-profile" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; background-color: var(--color-primary); color: #050811; border: none; border-radius: var(--border-radius-sm); cursor: pointer;">
          View Profile
        </button>
        ${isGuest ? `
          <button class="secondary-btn" id="sidebar-btn-login" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; border-color: rgba(255, 191, 0, 0.4); color: var(--color-primary); border-radius: var(--border-radius-sm); cursor: pointer;">
            <i class="lucide-log-in"></i> Log In / Register
          </button>
        ` : `
          <button class="secondary-btn" id="sidebar-btn-logout" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; border-color: rgba(239, 68, 68, 0.4); color: #f87171; border-radius: var(--border-radius-sm); cursor: pointer;">
            <i class="lucide-log-out"></i> Log Out
          </button>
        `}
      </div>
    </div>
  `;

  // Update header account text
  const headerAuthText = document.getElementById('header-auth-text');
  if (headerAuthText) {
    headerAuthText.textContent = isGuest ? 'Account' : state.currentUser.name.split(' ')[0];
  }

  const navigateToProfile = () => {
    window.location.hash = '#/profile?id=currentUser';
  };

  document.getElementById('sidebar-btn-view-profile').addEventListener('click', navigateToProfile);
  document.getElementById('sidebar-avatar-click').addEventListener('click', navigateToProfile);
  document.getElementById('sidebar-name-click').addEventListener('click', navigateToProfile);

  if (isGuest) {
    const loginBtn = document.getElementById('sidebar-btn-login');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => openAuthModal('login'));
    }
  } else {
    const logoutBtn = document.getElementById('sidebar-btn-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        await authService.signOut(state);
        showToast('Logged out successfully.');
        renderShell();
        router();
      });
    }
  }
}

// ----------------------------------------------------
// Hash-based Router
// ----------------------------------------------------
const routes = {
  '#/dashboard': { render: renderDashboard, title: 'Dashboard' },
  '#/discussions': { render: renderDiscussions, title: 'Discussions Hub' },
  '#/mentorship': { render: renderMentorship, title: 'Mentorship Board' },
  '#/resources': { render: renderResources, title: 'Learning Resources' },
  '#/events': { render: renderEvents, title: 'Upcoming Events' },
  '#/network': { render: renderNetwork, title: 'Community Network' },
  '#/profile': { render: renderProfile, title: 'Member Profile' },
  '#/growth': { render: renderGrowth, title: 'Growth & Impact Hub' }
};

function router() {
  const rawHash = window.location.hash || '#/dashboard';
  // Strip query parameters to match base route keys
  const baseRoute = rawHash.split('?')[0];
  const routeConfig = routes[baseRoute] || routes['#/dashboard'];

  // Update Sidebar active styling
  const sidebarItems = document.querySelectorAll('.sidebar-menu .menu-item');
  sidebarItems.forEach(item => {
    const itemHash = item.querySelector('a').getAttribute('href').split('?')[0];
    if (itemHash === baseRoute) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update Header Title
  document.getElementById('page-title').textContent = routeConfig.title;

  // Mount View Page
  const contentView = document.getElementById('content-view');
  
  // Simulated visual load transition
  contentView.style.opacity = '0';
  setTimeout(() => {
    routeConfig.render(contentView, state, actions);
    contentView.style.opacity = '1';
  }, 100);

  // Auto-close sidebar on mobile after choosing a navigation route
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('mobile-open');
}

// ----------------------------------------------------
// Shell Interaction Setup & Listeners
// ----------------------------------------------------
function setupEventListeners() {
  // Mobile sidebar menu toggle button
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('mobile-open');
  });

  // Header auth button listener
  const headerAuthBtn = document.getElementById('header-auth-btn');
  if (headerAuthBtn) {
    headerAuthBtn.addEventListener('click', () => {
      if (state.currentUser.id === 'u-0') {
        openAuthModal('login');
      } else {
        window.location.hash = '#/profile?id=currentUser';
      }
    });
  }

  // Clicking main panel collapses mobile sidebar if it was open
  document.querySelector('.main-panel').addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
  });

  // Header notifications bell demo click
  document.getElementById('notification-bell').addEventListener('click', () => {
    showToast("You are up to date! No new notifications.");
  });

  // Global search input redirects user to discussions board when hitting Enter
  const globalSearch = document.getElementById('global-search-input');
  globalSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const q = globalSearch.value.trim();
      if (q) {
        window.location.hash = `#/discussions?search=${encodeURIComponent(q)}`;
        globalSearch.value = '';
      }
    }
  });

  // Route updates
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
}

// ----------------------------------------------------
// Application Bootstrapping
// ----------------------------------------------------
async function bootstrap() {
  await authService.initSession(state, (profile) => {
    renderShell();
    router();
  });
  renderShell();
  setupEventListeners();
  router(); // Boot router instantly
}

// Fire application launch
bootstrap();
