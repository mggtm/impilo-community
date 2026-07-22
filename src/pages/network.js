// Network View Module

export function renderNetwork(container, state, actions) {
  let searchQuery = '';
  let activeTab = 'All'; // 'All', 'Innovator', 'Entrepreneur', 'Mentor', 'Organisation'

  const tabs = [
    { label: 'All Discovery', value: 'All' },
    { label: 'Innovators', value: 'Innovator' },
    { label: 'Entrepreneurs', value: 'Entrepreneur' },
    { label: 'Mentors', value: 'Mentor' },
    { label: 'Organisations', value: 'Organisation' }
  ];

  // 1. Render Static Shell
  container.innerHTML = `
    <!-- Action Header -->
    <div class="actions-header">
      <div class="search-filter-box">
        <div class="search-input-wrapper" style="max-width: 400px;">
          <i class="lucide-search"></i>
          <input type="text" id="network-search" placeholder="Search profiles by name, skills, bio..." autocomplete="off">
        </div>
      </div>
    </div>

    <!-- Network Filter Tabs -->
    <div class="network-tabs" id="network-tabs-container"></div>

    <!-- Network Cards Grid (Dynamic) -->
    <div class="network-grid" id="network-grid-container"></div>
  `;

  // DOM handles
  const searchInput = container.querySelector('#network-search');
  const tabsContainer = container.querySelector('#network-tabs-container');
  const gridContainer = container.querySelector('#network-grid-container');

  // 2. Render functions
  function renderTabs() {
    tabsContainer.innerHTML = tabs.map(tab => `
      <button class="network-tab-btn ${activeTab === tab.value ? 'active' : ''}" data-tab="${tab.value}">
        ${tab.label}
      </button>
    `).join('');

    // Bind tab click listeners
    tabsContainer.querySelectorAll('.network-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        renderTabs();
        renderList();
      });
    });
  }

  function renderList() {
    // Filter profiles
    const filteredNetwork = state.network.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            member.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTab = activeTab === 'All' || member.type === activeTab;
      return matchesSearch && matchesTab;
    });

    gridContainer.innerHTML = filteredNetwork.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-users"></i></div>
        <div class="empty-state-title">No Profiles Found</div>
        <div class="empty-state-desc">Try resetting your filters or search keywords.</div>
      </div>
    ` : filteredNetwork.map(member => {
      const isConnected = state.currentUser.connections.includes(member.id);
      const cardClass = member.type.toLowerCase();

      return `
        <div class="network-card ${cardClass}" id="net-card-${member.id}">
          <img src="${member.avatar}" alt="${member.name}" class="network-avatar">
          <span class="network-type-badge">${member.type}</span>
          <h3 class="network-name">${member.name}</h3>
          <div class="network-role">${member.role}</div>
          
          <div class="network-loc">
            <i class="lucide-map-pin" style="font-size: 12px; color: var(--color-accent);"></i>
            <span>${member.location}</span>
          </div>

          <p class="network-bio">${member.bio}</p>

          <div class="mentor-tags" style="margin-bottom: 20px;">
            ${member.tags.map(tag => `<span class="mentor-tag">${tag}</span>`).join('')}
          </div>

          <div style="width: 100%; display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
            <div class="connect-action-wrapper" style="width: 100%;">
              ${renderConnectButton(member.id, isConnected)}
            </div>
            <button class="secondary-btn view-member-profile-btn" data-id="${member.id}" style="width: 100%; justify-content: center; font-size: 12px; font-weight: 600;">
              View Community Member
            </button>
          </div>
        </div>
      `;
    }).join('');

    bindListEvents();
  }

  function renderConnectButton(memberId, isConnected) {
    return isConnected ? `
      <button class="secondary-btn toggle-connect-btn" data-id="${memberId}" style="width: 100%; border-color: var(--color-success); color: var(--color-success); display: flex; justify-content: center; gap: 8px;">
        <i class="lucide-user-check"></i> Connected
      </button>
    ` : `
      <button class="primary-btn toggle-connect-btn" data-id="${memberId}" style="width: 100%; justify-content: center; display: flex; gap: 8px;">
        <i class="lucide-user-plus"></i> Connect
      </button>
    `;
  }

  function bindListEvents() {
    gridContainer.querySelectorAll('.view-member-profile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const memberId = btn.getAttribute('data-id');
        window.location.hash = `#/profile?id=${memberId}`;
      });
    });

    gridContainer.querySelectorAll('.toggle-connect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const memberId = btn.getAttribute('data-id');
        const isConnected = state.currentUser.connections.includes(memberId);

        if (isConnected) {
          actions.toggleConnection(memberId, false);
          actions.showToast('Removed connection.');
          
          // Re-render button locally for this card
          const wrapper = btn.closest('.connect-action-wrapper');
          wrapper.innerHTML = renderConnectButton(memberId, false);
          bindCardEvents(memberId);
        } else {
          // Toggle on with loading state simulation
          btn.innerHTML = `<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`;
          btn.disabled = true;

          setTimeout(() => {
            actions.toggleConnection(memberId, true);
            actions.showToast('Connection request accepted!');
            
            const wrapper = btn.closest('.connect-action-wrapper');
            wrapper.innerHTML = renderConnectButton(memberId, true);
            bindCardEvents(memberId);
          }, 600);
        }
      });
    });
  }

  // Bind events specifically for a card when its connection status updates
  function bindCardEvents(memberId) {
    const card = gridContainer.querySelector(`#net-card-${memberId}`);
    if (!card) return;
    
    const btn = card.querySelector('.toggle-connect-btn');
    btn.addEventListener('click', () => {
      const isConnected = state.currentUser.connections.includes(memberId);
      if (isConnected) {
        actions.toggleConnection(memberId, false);
        actions.showToast('Removed connection.');
        const wrapper = btn.closest('.connect-action-wrapper');
        wrapper.innerHTML = renderConnectButton(memberId, false);
        bindCardEvents(memberId);
      } else {
        btn.innerHTML = `<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`;
        btn.disabled = true;
        setTimeout(() => {
          actions.toggleConnection(memberId, true);
          actions.showToast('Connection request accepted!');
          const wrapper = btn.closest('.connect-action-wrapper');
          wrapper.innerHTML = renderConnectButton(memberId, true);
          bindCardEvents(memberId);
        }, 600);
      }
    });
  }

  // 3. Bind Static Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  // Draw initial
  renderTabs();
  renderList();
}
