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
// State Mutation Actions (Callbacks passed to views)
// ----------------------------------------------------
const actions = {
  showToast,

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
  profileContainer.innerHTML = `
    <img src="${state.currentUser.avatar}" alt="${state.currentUser.name}" class="profile-avatar" style="cursor: pointer;" id="sidebar-avatar-click">
    <div class="profile-info">
      <div class="profile-name" style="cursor: pointer;" id="sidebar-name-click">${state.currentUser.name}</div>
      <div class="profile-role">${state.currentUser.role}</div>
      <button class="primary-btn" id="sidebar-btn-view-profile" style="font-size: 10px; padding: 6px 8px; margin-top: 6px; font-weight: 700; width: 100%; justify-content: center; background-color: var(--color-primary); color: #050811; border: none; border-radius: var(--border-radius-sm); cursor: pointer;">
        View Community Member
      </button>
    </div>
  `;

  const navigateToProfile = () => {
    window.location.hash = '#/profile?id=currentUser';
  };

  document.getElementById('sidebar-btn-view-profile').addEventListener('click', navigateToProfile);
  document.getElementById('sidebar-avatar-click').addEventListener('click', navigateToProfile);
  document.getElementById('sidebar-name-click').addEventListener('click', navigateToProfile);
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
function bootstrap() {
  renderShell();
  setupEventListeners();
  router(); // Boot router instantly
}

// Fire application launch
bootstrap();
