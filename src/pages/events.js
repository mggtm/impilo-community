// Events View Module

export function renderEvents(container, state, actions) {
  function updateView() {
    container.innerHTML = `
      <!-- Page header descriptions -->
      <div style="margin-bottom: 30px;">
        <p style="color: var(--text-muted); font-size: 14.5px;">Discover upcoming webinars, interactive workshops, and hackathons hosted by the Impilo Community. Secure your seats early.</p>
      </div>

      <!-- Events List -->
      <div class="events-grid">
        ${state.events.map(event => {
          const isRegistered = state.currentUser.registeredEvents.includes(event.id);
          
          // Parse date
          const dateObj = new Date(event.date);
          const day = dateObj.getDate();
          const monthStr = dateObj.toLocaleDateString('en-US', { month: 'short' });

          return `
            <div class="event-card">
              <div class="event-date-block">
                <span class="event-date-month">${monthStr}</span>
                <span class="event-date-day">${day}</span>
              </div>

              <div class="event-card-content">
                <span class="event-card-cat cat-${event.category.toLowerCase()}">${event.category}</span>
                <h2 class="event-card-title">${event.title}</h2>
                <p class="event-card-desc">${event.description}</p>
                
                <div class="event-card-meta">
                  <div class="event-meta-item">
                    <i class="lucide-user"></i>
                    <span>Speaker: <strong>${event.speaker}</strong></span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-clock"></i>
                    <span>${event.time}</span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-map-pin"></i>
                    <span>${event.location}</span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-users"></i>
                    <span>${event.attendees} Attending</span>
                  </div>
                </div>
              </div>

              <div class="event-card-action">
                ${isRegistered ? `
                  <button class="secondary-btn" style="border-color: var(--color-success); color: var(--color-success); cursor: not-allowed;" disabled>
                    <i class="lucide-check-circle"></i> Registered
                  </button>
                ` : `
                  <button class="primary-btn register-event-btn" data-id="${event.id}">
                    Register Seat
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    container.querySelectorAll('.register-event-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const eventId = btn.getAttribute('data-id');
        openRegisterModal(eventId);
      });
    });
  }

  function openRegisterModal(eventId) {
    const event = state.events.find(e => e.id === eventId);
    if (!event) return;

    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div class="modal-header">
        <h3>Register for Event</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 5px;">${event.title}</p>
      </div>
      <form id="event-reg-form" novalidate>
        <div class="form-group">
          <label for="reg-name">Your Full Name</label>
          <input type="text" id="reg-name" value="${state.currentUser.name}" placeholder="e.g. Mako Gufe" required>
          <span class="error-text" id="err-name">Please enter your name (minimum 3 characters).</span>
        </div>
        <div class="form-group">
          <label for="reg-email">Your Email Address</label>
          <input type="email" id="reg-email" value="${state.currentUser.email}" placeholder="your.name@example.com" required>
          <span class="error-text" id="err-email">Please enter a valid email address.</span>
        </div>
        <div class="form-group">
          <label for="reg-ticket">Ticket Type</label>
          <select id="reg-ticket" required>
            <option value="Standard" selected>Standard Ticket</option>
            <option value="Innovator">Innovator / Pitcher Ticket</option>
            <option value="Mentor">Mentor / Organisation Representative</option>
          </select>
        </div>
        <div class="form-actions-modal">
          <button type="button" class="secondary-btn" id="modal-cancel">Cancel</button>
          <button type="submit" class="primary-btn">Confirm Registration</button>
        </div>
      </form>
    `;

    modalOverlay.classList.add('active');

    const closeModal = () => modalOverlay.classList.remove('active');
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-cancel').addEventListener('click', closeModal);

    const form = document.getElementById('event-reg-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('reg-name');
      const emailVal = document.getElementById('reg-email');

      const errName = document.getElementById('err-name');
      const errEmail = document.getElementById('err-email');

      let isValid = true;

      if (nameVal.value.trim().length < 3) {
        nameVal.classList.add('invalid');
        errName.style.display = 'block';
        isValid = false;
      } else {
        nameVal.classList.remove('invalid');
        errName.style.display = 'none';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal.value.trim())) {
        emailVal.classList.add('invalid');
        errEmail.style.display = 'block';
        isValid = false;
      } else {
        emailVal.classList.remove('invalid');
        errEmail.style.display = 'none';
      }

      if (isValid) {
        actions.registerEvent(eventId);
        closeModal();
        actions.showToast(`Ticket confirmed for ${event.title}!`);
        updateView();
      }
    });
  }

  // Draw view
  updateView();
}
