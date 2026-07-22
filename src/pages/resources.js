// Resources View Module

export function renderResources(container, state, actions) {
  let searchQuery = '';
  let activeCategory = 'All';

  const categories = ['All', 'Entrepreneurship', 'Technology', 'Design'];

  // 1. Render Static Shell
  container.innerHTML = `
    <!-- Page Header Area -->
    <div style="margin-bottom: 25px;">
      <p style="color: var(--text-muted); font-size: 14.5px;">Equip yourself with practical skills for positive social impact. Access our curated library of courses, guides, pitching templates, and UI/UX design blueprints.</p>
    </div>

    <!-- Action Header -->
    <div class="actions-header">
      <div class="search-filter-box">
        <div class="search-input-wrapper">
          <i class="lucide-search"></i>
          <input type="text" id="resource-search" placeholder="Search training resources..." autocomplete="off">
        </div>
        <select class="filter-select" id="resource-cat-select">
          ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
      </div>
    </div>

    <!-- Quick Category Buttons -->
    <div class="category-badges" id="resource-category-badges"></div>

    <!-- Resources Grid (Dynamic) -->
    <div class="resources-grid" id="resources-grid-container"></div>
  `;

  // DOM handles
  const searchInput = container.querySelector('#resource-search');
  const catSelect = container.querySelector('#resource-cat-select');
  const badgesContainer = container.querySelector('#resource-category-badges');
  const gridContainer = container.querySelector('#resources-grid-container');

  // 2. Render functions
  function renderBadges() {
    badgesContainer.innerHTML = categories.map(cat => `
      <button class="category-badge-btn ${activeCategory === cat ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    // Bind badge click listeners
    badgesContainer.querySelectorAll('.category-badge-btn').forEach(badge => {
      badge.addEventListener('click', () => {
        activeCategory = badge.getAttribute('data-category');
        catSelect.value = activeCategory;
        renderBadges();
        renderList();
      });
    });
  }

  function renderList() {
    // Filter resources
    const filteredResources = state.resources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            res.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    gridContainer.innerHTML = filteredResources.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-book-open"></i></div>
        <div class="empty-state-title">No Resources Found</div>
        <div class="empty-state-desc">We couldn't find any learning materials matching your criteria. Try resetting the filters.</div>
      </div>
    ` : filteredResources.map(res => `
      <div class="resource-card">
        <div class="resource-img-area">
          <span class="resource-card-category">${res.category}</span>
          <img src="${res.image}" alt="${res.title}">
        </div>
        
        <div class="resource-card-body">
          <div class="resource-type-row">
            <span>${res.type}</span>
            <span class="difficulty">${res.difficulty}</span>
          </div>
          <h3 class="resource-card-title">${res.title}</h3>
          <p class="resource-card-desc">${res.description}</p>
          
          <div class="resource-card-footer">
            <div class="resource-duration">
              <i class="lucide-clock" style="font-size: 13px;"></i>
              <span>${res.duration}</span>
            </div>
            <div class="resource-rating">
              <i class="lucide-star" style="fill: currentColor; font-size: 13px;"></i>
              <span>${res.rating}</span>
            </div>
          </div>
          
          <button class="primary-btn view-resource-btn" data-id="${res.id}" style="margin-top: 15px; width: 100%; justify-content: center;">
            View Course Details
          </button>
        </div>
      </div>
    `).join('');

    bindListEvents();
  }

  function bindListEvents() {
    gridContainer.querySelectorAll('.view-resource-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const resId = btn.getAttribute('data-id');
        actions.logResourceInteraction(resId);
        openDetailModal(resId);
      });
    });
  }

  // 3. Bind Static Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  catSelect.addEventListener('change', (e) => {
    activeCategory = e.target.value;
    renderBadges();
    renderList();
  });

  function openDetailModal(resId) {
    const res = state.resources.find(r => r.id === resId);
    if (!res) return;

    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;">
        <img src="${res.image}" alt="${res.title}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--border-radius-md);">
      </div>
      <div class="modal-header" style="margin-bottom: 12px;">
        <span style="font-size: 11px; font-weight: 700; color: var(--color-accent); text-transform: uppercase;">${res.category} • ${res.type}</span>
        <h3 style="margin-top: 5px; line-height: 1.3;">${res.title}</h3>
      </div>
      <div style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
        ${res.description}
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px; background-color: var(--bg-input); border-radius: var(--border-radius-md); font-size: 13px; margin-bottom: 20px;">
        <div><strong>Duration:</strong> ${res.duration}</div>
        <div><strong>Difficulty:</strong> ${res.difficulty}</div>
        <div><strong>Rating:</strong> ⭐ ${res.rating}</div>
      </div>
      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 10px;">Syllabus Outline / Contents:</h4>
        <ul class="modal-syllabus-list">
          ${res.syllabus.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="form-actions-modal" style="margin-top: 30px;">
        <button type="button" class="secondary-btn" id="modal-close-2">Close</button>
        <button type="button" class="primary-btn" id="enroll-course-btn">
          Access Resources
        </button>
      </div>
    `;

    modalOverlay.classList.add('active');

    const closeModal = () => modalOverlay.classList.remove('active');
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-close-2').addEventListener('click', closeModal);

    document.getElementById('enroll-course-btn').addEventListener('click', () => {
      closeModal();
      actions.showToast(`Enrolled in "${res.title}"! Resources unlocked.`);
    });
  }

  // Draw initial
  renderBadges();
  renderList();
}
