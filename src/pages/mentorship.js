// Mentorship View Module

export function renderMentorship(container, state, actions) {
  // Read query parameters
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.substring(hash.indexOf('?')));
  const autoRequestId = urlParams.get('request');

  // Page local state
  let searchQuery = '';
  let activeExpertise = 'All';

  const expertiseOptions = [
    'All', 
    'Business Strategy', 
    'Software Development', 
    'Product Design', 
    'Health & Wellness'
  ];

  // 1. Render Static Shell
  container.innerHTML = `
    <!-- Action Header -->
    <div class="actions-header">
      <div class="search-filter-box">
        <div class="search-input-wrapper">
          <i class="lucide-search"></i>
          <input type="text" id="mentor-search" placeholder="Search mentors by name, tags or title..." autocomplete="off">
        </div>
        <select class="filter-select" id="mentor-exp-select">
          ${expertiseOptions.map(exp => `<option value="${exp}">${exp}</option>`).join('')}
        </select>
      </div>
    </div>

    <!-- Quick Category Buttons -->
    <div class="category-badges" id="mentor-expertise-badges"></div>

    <!-- Mentors Grid (Dynamic) -->
    <div class="mentor-grid" id="mentor-grid-container"></div>
  `;

  // DOM handles
  const searchInput = container.querySelector('#mentor-search');
  const expSelect = container.querySelector('#mentor-exp-select');
  const badgesContainer = container.querySelector('#mentor-expertise-badges');
  const gridContainer = container.querySelector('#mentor-grid-container');

  // 2. Render functions
  function renderBadges() {
    badgesContainer.innerHTML = expertiseOptions.map(exp => `
      <button class="category-badge-btn ${activeExpertise === exp ? 'active' : ''}" data-expertise="${exp}">
        ${exp}
      </button>
    `).join('');

    // Bind badge click listeners
    badgesContainer.querySelectorAll('.category-badge-btn').forEach(badge => {
      badge.addEventListener('click', () => {
        activeExpertise = badge.getAttribute('data-expertise');
        expSelect.value = activeExpertise;
        renderBadges();
        renderList();
      });
    });
  }

  function renderList() {
    // Filter mentors
    const filteredMentors = state.mentors.filter(mentor => {
      const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mentor.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            mentor.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesExpertise = activeExpertise === 'All' || mentor.expertise === activeExpertise;
      return matchesSearch && matchesExpertise;
    });

    gridContainer.innerHTML = filteredMentors.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-users"></i></div>
        <div class="empty-state-title">No Mentors Found</div>
        <div class="empty-state-desc">No mentors match your search query or criteria. Try modifying your filters or tags search.</div>
      </div>
    ` : filteredMentors.map(mentor => {
      const isPending = state.currentUser.requestedMentorships.includes(mentor.id);
      return `
        <div class="mentor-card">
          <span class="mentor-status-dot ${mentor.available ? '' : 'unavailable'}"></span>
          <img src="${mentor.avatar}" alt="${mentor.name}" class="mentor-card-avatar">
          <h3 class="mentor-card-name">${mentor.name}</h3>
          <div class="mentor-card-title">${mentor.title}</div>
          
          <div class="mentor-experience" style="font-size: 12.5px; color: var(--color-success); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i class="lucide-award" style="font-size: 13px;"></i>
            <span>${mentor.name === 'Albert Mensah' ? '12+ Years Experience' : mentor.name === 'Dr. Sarah Jenkins' ? '8+ Years Experience' : mentor.name === 'Michael Chen' ? '10+ Years Experience' : '5+ Years Experience'}</span>
          </div>
          
          <div class="mentor-rating">
            <i class="lucide-star" style="fill: currentColor;"></i>
            <strong>${mentor.rating}</strong>
            <span>(${mentor.reviewsCount} reviews)</span>
          </div>

          <p class="mentor-bio">${mentor.bio}</p>

          <div class="mentor-tags">
            ${mentor.tags.map(tag => `<span class="mentor-tag">${tag}</span>`).join('')}
          </div>

          <div class="mentor-card-action">
            ${isPending ? `
              <button class="secondary-btn" style="width: 100%; border-color: var(--color-success); color: var(--color-success); cursor: not-allowed;" disabled>
                <i class="lucide-check"></i> Request Pending
              </button>
            ` : mentor.available ? `
              <button class="primary-btn req-mentorship-btn" data-id="${mentor.id}" style="width: 100%; justify-content: center;">
                Request Mentorship
              </button>
            ` : `
              <button class="secondary-btn" style="width: 100%; justify-content: center; opacity: 0.5; cursor: not-allowed;" disabled>
                Fully Booked
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');

    bindListEvents();
  }

  function bindListEvents() {
    gridContainer.querySelectorAll('.req-mentorship-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mentorId = btn.getAttribute('data-id');
        openRequestModal(mentorId);
      });
    });
  }

  // 3. Bind Static Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  expSelect.addEventListener('change', (e) => {
    activeExpertise = e.target.value;
    renderBadges();
    renderList();
  });

  function openRequestModal(mentorId) {
    const mentor = state.mentors.find(m => m.id === mentorId);
    if (!mentor) return;

    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div class="modal-header">
        <h3>Request Mentorship</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 5px;">Connecting with <strong>${mentor.name}</strong></p>
      </div>
      <form id="req-mentor-form" novalidate>
        <div class="form-group">
          <label for="req-reason">Why do you want mentorship from ${mentor.name}?</label>
          <textarea id="req-reason" rows="4" placeholder="Briefly describe your startup idea, research, or programming roadblocks..." required></textarea>
          <span class="error-text" id="err-reason">Please share a valid description (minimum 15 characters).</span>
        </div>
        <div class="form-group">
          <label for="req-goals">What are your goals for this partnership?</label>
          <input type="text" id="req-goals" placeholder="e.g. Learn React state structures, pitch to early angels" required>
          <span class="error-text" id="err-goals">Please list at least one goal.</span>
        </div>
        <div class="form-group">
          <label for="req-frequency">Preferred Frequency</label>
          <select id="req-frequency" required>
            <option value="weekly">Weekly Check-in</option>
            <option value="bi-weekly" selected>Bi-weekly Check-in</option>
            <option value="monthly">Monthly Check-in</option>
          </select>
        </div>
        <div class="form-group">
          <label for="req-contact">Your Contact Information</label>
          <input type="email" id="req-contact" value="${state.currentUser.email}" placeholder="Your email address" required>
          <span class="error-text" id="err-contact">Please provide a valid contact email.</span>
        </div>
        <div class="form-actions-modal">
          <button type="button" class="secondary-btn" id="modal-cancel">Cancel</button>
          <button type="submit" class="primary-btn">Submit Request</button>
        </div>
      </form>
    `;

    modalOverlay.classList.add('active');

    const closeModal = () => modalOverlay.classList.remove('active');
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-cancel').addEventListener('click', closeModal);

    const form = document.getElementById('req-mentor-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const reasonVal = document.getElementById('req-reason');
      const goalsVal = document.getElementById('req-goals');
      const contactVal = document.getElementById('req-contact');

      const errReason = document.getElementById('err-reason');
      const errGoals = document.getElementById('err-goals');
      const errContact = document.getElementById('err-contact');

      let isValid = true;

      if (reasonVal.value.trim().length < 15) {
        reasonVal.classList.add('invalid');
        errReason.style.display = 'block';
        isValid = false;
      } else {
        reasonVal.classList.remove('invalid');
        errReason.style.display = 'none';
      }

      if (goalsVal.value.trim().length < 5) {
        goalsVal.classList.add('invalid');
        errGoals.style.display = 'block';
        isValid = false;
      } else {
        goalsVal.classList.remove('invalid');
        errGoals.style.display = 'none';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactVal.value.trim())) {
        contactVal.classList.add('invalid');
        errContact.style.display = 'block';
        isValid = false;
      } else {
        contactVal.classList.remove('invalid');
        errContact.style.display = 'none';
      }

      if (isValid) {
        actions.requestMentorship(mentorId);
        closeModal();
        actions.showToast(`Request sent to ${mentor.name}!`);
        renderList();
      }
    });
  }

  // Draw initial
  renderBadges();
  renderList();

  // Handle direct request triggering
  if (autoRequestId) {
    const cleanHash = hash.split('?')[0];
    window.history.replaceState(null, '', cleanHash);
    
    setTimeout(() => {
      openRequestModal(autoRequestId);
    }, 100);
  }
}
