// Member Profile View Module

export function renderProfile(container, state, actions) {
  // Parse URL query parameter: ?id=xxx
  const rawHash = window.location.hash || '';
  const urlParams = new URLSearchParams(rawHash.includes('?') ? rawHash.split('?')[1] : '');
  const profileId = urlParams.get('id') || 'currentUser';

  let profileUser = null;

  if (profileId === 'currentUser' || profileId === 'u-0' || profileId === state.currentUser.id) {
    profileUser = {
      id: 'currentUser',
      name: state.currentUser.name,
      avatar: state.currentUser.avatar,
      role: state.currentUser.role,
      type: 'Community Member',
      bio: state.currentUser.bio || 'Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.',
      location: state.currentUser.location || 'Bulawayo, Zimbabwe',
      tags: ['Social Impact', 'Innovation', 'Technology', 'Empowerment'],
      email: state.currentUser.email
    };
  } else {
    // Check network members
    profileUser = state.network.find(m => m.id === profileId);
    if (!profileUser) {
      // Check mentors
      const mentor = state.mentors.find(m => m.id === profileId);
      if (mentor) {
        profileUser = {
          id: mentor.id,
          name: mentor.name,
          avatar: mentor.avatar,
          role: mentor.title,
          type: 'Mentor',
          bio: mentor.bio,
          location: mentor.location,
          tags: mentor.tags,
          email: `${mentor.name.toLowerCase().replace(/\s+/g, '')}@impiloconsultancy.org`
        };
      }
    }
  }

  if (!profileUser) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-user-x"></i></div>
        <div class="empty-state-title">Profile Not Found</div>
        <div class="empty-state-desc">We couldn't retrieve details for the specified member.</div>
        <button class="primary-btn" onclick="window.location.hash='#/dashboard'" style="margin-top: 15px;">Go back to Dashboard</button>
      </div>
    `;
    return;
  }

  // Filter activities for this user
  const userActivities = state.activities.filter(act => act.user === profileUser.name);

  // Connection state
  const isSelf = profileUser.id === 'currentUser';
  const isConnected = state.currentUser.connections.includes(profileUser.id);

  container.innerHTML = `
    <div style="margin-bottom: 25px;">
      <a href="javascript:history.back()" style="display: flex; align-items: center; gap: 6px; color: var(--color-primary); font-size: 13px; text-decoration: none; font-weight: 600; width: fit-content; margin-bottom: 20px;">
        <i class="lucide-arrow-left"></i> Back to previous page
      </a>
    </div>

    <div class="profile-layout">
      <!-- Profile Header / Sidebar Card -->
      <div class="section-panel profile-sidebar-card">
        <img src="${profileUser.avatar}" alt="${profileUser.name}" class="profile-layout-avatar">
        
        <h2 class="profile-layout-name">${profileUser.name}</h2>
        <div class="profile-layout-badge">${profileUser.type}</div>
        <div class="profile-layout-role">${profileUser.role}</div>

        <div class="profile-meta-list">
          <div class="profile-meta-item">
            <i class="lucide-map-pin"></i>
            <span>${profileUser.location}</span>
          </div>
          ${profileUser.email ? `
            <div class="profile-meta-item">
              <i class="lucide-mail"></i>
              <span>${profileUser.email}</span>
            </div>
          ` : ''}
        </div>

        <div style="width: 100%; margin-top: 10px;">
          ${isSelf ? '' : `
            <button class="primary-btn toggle-profile-connect opp-btn" data-id="${profileUser.id}" style="justify-content: center;">
              ${isConnected ? '<i class="lucide-user-check"></i> Connected' : '<i class="lucide-user-plus"></i> Connect'}
            </button>
          `}
        </div>
      </div>

      <!-- Profile Details & Recent Activity -->
      <div class="profile-details-column">
        <!-- About Section -->
        <div class="section-panel">
          <h3 class="profile-section-title">Biography</h3>
          <p class="profile-bio-text">${profileUser.bio}</p>
          
          <h4 class="profile-subsection-title">Expertise & Interests</h4>
          <div class="mentor-tags">
            ${profileUser.tags.map(tag => `
              <button class="mentor-tag interest-click-btn" data-interest="${tag}" style="cursor: pointer; border: 1px solid var(--border-light); font-weight: 600; text-transform: capitalize; outline: none;">
                ${tag}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Activity History Section -->
        <div class="section-panel">
          <h3 class="profile-section-title">Recent Activity</h3>
          
          <div class="activity-feed">
            ${userActivities.length === 0 ? `
              <div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">
                No recent community activities logged for this member.
              </div>
            ` : userActivities.map(act => `
              <div class="activity-item">
                <div class="activity-circle" style="border-color: rgba(255, 191, 0, 0.3); color: var(--color-primary); background-color: rgba(255, 191, 0, 0.06);">
                  <i class="${
                    act.action.includes('discussion') ? 'lucide-message-square' :
                    act.action.includes('replied') ? 'lucide-message-circle' :
                    act.action.includes('event') ? 'lucide-calendar' : 'lucide-user-plus'
                  }"></i>
                </div>
                <div class="activity-desc">
                  <strong>${act.user}</strong> ${act.action}
                  <a href="${act.link}">${act.target}</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind Connect button listener
  const connectBtn = container.querySelector('.toggle-profile-connect');
  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      const currentConnected = state.currentUser.connections.includes(profileUser.id);
      if (currentConnected) {
        actions.toggleConnection(profileUser.id, false);
        actions.showToast('Removed connection.');
        connectBtn.innerHTML = '<i class="lucide-user-plus"></i> Connect';
      } else {
        connectBtn.innerHTML = `<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`;
        connectBtn.disabled = true;
        setTimeout(() => {
          actions.toggleConnection(profileUser.id, true);
          actions.showToast('Connection request accepted!');
          connectBtn.disabled = false;
          connectBtn.innerHTML = '<i class="lucide-user-check"></i> Connected';
        }, 600);
      }
    });
  }

  // Bind Interest buttons click navigation
  container.querySelectorAll('.interest-click-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const interest = btn.getAttribute('data-interest').trim();
      // Map interests directly to semantic discussion categories
      if (interest === 'Social Impact') {
        window.location.hash = '#/discussions?category=Social Impact';
      } else if (interest === 'Innovation') {
        window.location.hash = '#/discussions?category=Innovation';
      } else if (interest === 'Technology') {
        window.location.hash = '#/discussions?category=Technology';
      } else if (interest === 'Empowerment') {
        window.location.hash = '#/discussions?category=Empowerment';
      } else {
        window.location.hash = `#/discussions?search=${encodeURIComponent(interest)}`;
      }
    });
  });
}
