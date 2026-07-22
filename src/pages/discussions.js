// Discussions View Module

export function renderDiscussions(container, state, actions) {
  // Read query parameter if opening a direct post
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.substring(hash.indexOf('?')));
  const targetDiscId = urlParams.get('id');
  const initialSearch = urlParams.get('search') || '';
  const initialCategory = urlParams.get('category') || 'All';

  // Page local state
  let searchQuery = initialSearch;
  let activeCategory = initialCategory;

  const categories = ['All', 'General', 'Social Impact', 'Innovation', 'Technology', 'Empowerment'];

  // 1. Render Static Page Shell (Created once, inputs never destroyed)
  container.innerHTML = `
    <!-- Page Header Area -->
    <div style="margin-bottom: 25px;">
      <p style="color: var(--text-muted); font-size: 14.5px;">Welcome to the collaborative workspace. Share ideas, discuss local social entrepreneurship, seek advice, and discover innovative solutions to township health and wellness challenges.</p>
    </div>

    <!-- Actions Header -->
    <div class="actions-header">
      <div class="search-filter-box">
        <div class="search-input-wrapper">
          <i class="lucide-search"></i>
          <input type="text" id="disc-search" placeholder="Search discussions..." autocomplete="off">
        </div>
        <select class="filter-select" id="disc-cat-select">
          ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
      </div>
      <button class="primary-btn" id="btn-new-discussion">
        <i class="lucide-plus"></i> New Discussion
      </button>
    </div>

    <!-- Quick Category Buttons -->
    <div class="category-badges" id="disc-category-badges"></div>

    <!-- Discussions List Container (Dynamic) -->
    <div class="discussions-list" id="discussions-list-container"></div>
  `;

  // Get DOM handles
  const searchInput = container.querySelector('#disc-search');
  const catSelect = container.querySelector('#disc-cat-select');
  const badgesContainer = container.querySelector('#disc-category-badges');
  const listContainer = container.querySelector('#discussions-list-container');

  // Set initial search and filter values
  searchInput.value = searchQuery;
  catSelect.value = activeCategory;

  // Format activity feed relative time
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' });
  };

  // 2. Render functions for dynamic parts
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
    // Filter discussions
    const filteredDiscussions = state.discussions.filter(disc => {
      const matchSearch = disc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          disc.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = activeCategory === 'All' || disc.category === activeCategory;
      return matchSearch && matchCategory;
    });

    listContainer.innerHTML = filteredDiscussions.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-message-square"></i></div>
        <div class="empty-state-title">No Discussions Found</div>
        <div class="empty-state-desc">We couldn't find any threads matching your filters. Why not start a new conversation and invite others?</div>
      </div>
    ` : filteredDiscussions.map(disc => {
      const isExpanded = targetDiscId === disc.id;
      return `
        <div class="discussion-card" id="card-${disc.id}" style="${isExpanded ? 'border-color: var(--color-primary); box-shadow: var(--shadow-glow);' : ''}">
          <div class="discussion-header">
            <div class="discussion-author-area">
              <img src="${disc.author.avatar}" alt="${disc.author.name}" class="author-avatar">
              <div class="author-details">
                <div class="author-name">${disc.author.name}</div>
                <div class="author-title">${disc.author.role}</div>
              </div>
            </div>
            <span class="disc-card-category cat-${disc.category.toLowerCase().replace(/\s+/g, '-')}">${disc.category}</span>
          </div>

          <h2>${disc.title}</h2>
          <p class="discussion-body-excerpt">${disc.content}</p>

          <div class="discussion-footer">
            <span class="disc-timestamp">${new Date(disc.timestamp).toLocaleString('en-ZA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
            <div class="disc-actions">
              <button class="disc-action-btn like-btn ${disc.hasLiked ? 'liked' : ''}" data-id="${disc.id}">
                <i class="lucide-heart" style="${disc.hasLiked ? 'fill: currentColor;' : ''}"></i> 
                <span>${disc.likes}</span>
              </button>
              <button class="disc-action-btn comment-toggle-btn" data-id="${disc.id}">
                <i class="lucide-message-square"></i> 
                <span>Comments (${disc.replies.length})</span>
              </button>
            </div>
          </div>

          <!-- Replies / Thread Comments Expansion Section -->
          <div class="replies-section ${isExpanded ? 'active' : ''}" id="replies-${disc.id}">
            <!-- Input Box -->
            <div class="reply-input-box">
              <input type="text" placeholder="Write a reply..." id="reply-input-${disc.id}" autocomplete="off">
              <button class="primary-btn submit-reply-btn" data-id="${disc.id}" style="padding: 10px 18px; font-size: 13px;">
                Send
              </button>
            </div>

            <!-- Replies list -->
            <div class="replies-list" id="replies-list-${disc.id}">
              ${renderRepliesList(disc)}
            </div>
          </div>
        </div>
      `;
    }).join('');

    bindListEvents();

    // Scroll target discussion card into view if deep-linked
    if (targetDiscId) {
      setTimeout(() => {
        const card = document.getElementById(`card-${targetDiscId}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    }
  }

  function renderRepliesList(disc) {
    return disc.replies.length === 0 ? `
      <div style="font-size: 12px; color: var(--text-dark); text-align: center; padding: 15px;" class="no-replies-placeholder">
        No replies yet. Be the first to share your thoughts!
      </div>
    ` : disc.replies.map(reply => `
      <div class="reply-item">
        <div class="reply-header">
          <div class="reply-author-info">
            <img src="${reply.author.avatar}" alt="${reply.author.name}" class="reply-avatar">
            <div>
              <span class="reply-author-name">${reply.author.name}</span>
              <span class="reply-author-role">${reply.author.role}</span>
            </div>
          </div>
          <span class="reply-time">${formatTime(reply.timestamp)}</span>
        </div>
        <div class="reply-content">${reply.content}</div>
      </div>
    `).join('');
  }

  function bindListEvents() {
    // Likes toggling
    listContainer.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const discId = btn.getAttribute('data-id');
        actions.toggleLike(discId);
        
        // Directly toggle class and update likes count locally without re-rendering everything
        const disc = state.discussions.find(d => d.id === discId);
        if (disc) {
          btn.classList.toggle('liked', disc.hasLiked);
          const icon = btn.querySelector('i');
          if (icon) icon.style.fill = disc.hasLiked ? 'currentColor' : '';
          btn.querySelector('span').textContent = disc.likes;
        }
      });
    });

    // Replies comments toggle
    listContainer.querySelectorAll('.comment-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const discId = btn.getAttribute('data-id');
        const repliesSec = listContainer.querySelector(`#replies-${discId}`);
        repliesSec.classList.toggle('active');
      });
    });

    // Submitting a reply
    listContainer.querySelectorAll('.submit-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const discId = btn.getAttribute('data-id');
        const replyInput = listContainer.querySelector(`#reply-input-${discId}`);
        const content = replyInput.value.trim();
        if (!content) return;

        actions.addReply(discId, content);
        replyInput.value = '';

        // Render replies list again only for this card
        const disc = state.discussions.find(d => d.id === discId);
        if (disc) {
          const repliesList = listContainer.querySelector(`#replies-list-${discId}`);
          repliesList.innerHTML = renderRepliesList(disc);
          
          // Update comment count on trigger button
          const toggleBtn = btn.closest('.discussion-card').querySelector('.comment-toggle-btn span');
          toggleBtn.textContent = `Comments (${disc.replies.length})`;
        }

        actions.showToast('Reply posted successfully!');
      });
    });
  }

  // 3. Bind static listeners (only once)
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  catSelect.addEventListener('change', (e) => {
    activeCategory = e.target.value;
    renderBadges();
    renderList();
  });

  container.querySelector('#btn-new-discussion').addEventListener('click', openCreateDiscussionModal);

  // Open modal functions
  function openCreateDiscussionModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div class="modal-header">
        <h3>Create New Discussion Thread</h3>
      </div>
      <form id="new-disc-form" novalidate>
        <div class="form-group">
          <label for="disc-title-input">Discussion Title</label>
          <input type="text" id="disc-title-input" placeholder="e.g. Best practices for UI mobile navigation grids" required>
          <span class="error-text" id="err-title">Please enter a valid title (minimum 5 characters).</span>
        </div>
        <div class="form-group">
          <label for="disc-category-select">Category</label>
          <select id="disc-category-select" required>
            <option value="" disabled selected>Select category</option>
            <option value="General">General</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
          </select>
          <span class="error-text" id="err-cat">Please select a category.</span>
        </div>
        <div class="form-group">
          <label for="disc-content-textarea">Describe your topic / questions</label>
          <textarea id="disc-content-textarea" rows="5" placeholder="Share background details, questions, or ideas with the community..." required></textarea>
          <span class="error-text" id="err-content">Please enter some description (minimum 20 characters).</span>
        </div>
        <div class="form-actions-modal">
          <button type="button" class="secondary-btn" id="modal-cancel">Cancel</button>
          <button type="submit" class="primary-btn">Post Thread</button>
        </div>
      </form>
    `;

    modalOverlay.classList.add('active');

    const closeModal = () => modalOverlay.classList.remove('active');
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-cancel').addEventListener('click', closeModal);

    const form = document.getElementById('new-disc-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const titleInp = document.getElementById('disc-title-input');
      const catSelect = document.getElementById('disc-category-select');
      const contentText = document.getElementById('disc-content-textarea');

      const errTitle = document.getElementById('err-title');
      const errCat = document.getElementById('err-cat');
      const errContent = document.getElementById('err-content');

      let isValid = true;

      if (titleInp.value.trim().length < 5) {
        titleInp.classList.add('invalid');
        errTitle.style.display = 'block';
        isValid = false;
      } else {
        titleInp.classList.remove('invalid');
        errTitle.style.display = 'none';
      }

      if (!catSelect.value) {
        catSelect.classList.add('invalid');
        errCat.style.display = 'block';
        isValid = false;
      } else {
        catSelect.classList.remove('invalid');
        errCat.style.display = 'none';
      }

      if (contentText.value.trim().length < 20) {
        contentText.classList.add('invalid');
        errContent.style.display = 'block';
        isValid = false;
      } else {
        contentText.classList.remove('invalid');
        errContent.style.display = 'none';
      }

      if (isValid) {
        actions.addDiscussion(titleInp.value.trim(), contentText.value.trim(), catSelect.value);
        closeModal();
        actions.showToast('Discussion thread created successfully!');
        
        // Re-draw list to reflect the new thread
        renderList();
      }
    });
  }

  // Initial draw of badges and list
  renderBadges();
  renderList();
}
