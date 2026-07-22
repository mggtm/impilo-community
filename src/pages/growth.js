// Growth & Impact Hub View Module

export function renderGrowth(container, state, actions) {
  container.innerHTML = `
    <!-- Supporting Header Description -->
    <div style="margin-bottom: 30px;">
      <p style="color: var(--text-muted); font-size: 14.5px;">Welcome to your Growth & Impact Hub. Accelerate your entrepreneurship journey, learn sustainable development best practices, find advisors, and collaborate on local township solutions.</p>
    </div>

    <!-- Impact Pillars Grid -->
    <div class="growth-pillars-grid">
      <!-- Card 1: Personal Growth (Resources - Gold) -->
      <div class="growth-card pillar-resources">
        <div class="pillar-header">
          <i class="lucide-book-open pillar-icon"></i>
          <h3>Personal Growth</h3>
        </div>
        <p class="pillar-desc">Develop critical skills with courses in Social Entrepreneurship, Web Programming, Pitching templates, and UI/UX design.</p>
        <button class="primary-btn pillar-btn" id="pillar-btn-resources">Explore Courses</button>
      </div>

      <!-- Card 2: Mentorship (Mentors - Green) -->
      <div class="growth-card pillar-mentorship">
        <div class="pillar-header">
          <i class="lucide-graduation-cap pillar-icon"></i>
          <h3>Mentorship Guidance</h3>
        </div>
        <p class="pillar-desc">Connect with seasoned business advisors, public health consultants, and technology engineers to guide your enterprise.</p>
        <button class="secondary-btn pillar-btn btn-success" id="pillar-btn-mentorship">Find a Mentor</button>
      </div>

      <!-- Card 3: Entrepreneurship Forums (Discussions - Gold) -->
      <div class="growth-card pillar-forums">
        <div class="pillar-header">
          <i class="lucide-message-square pillar-icon"></i>
          <h3>Action Forums</h3>
        </div>
        <p class="pillar-desc">Join active discussion threads regarding seed funding, startup proposals, beginner study circles, and mental health advocacy.</p>
        <button class="secondary-btn pillar-btn btn-gold" id="pillar-btn-forums">Join discussions</button>
      </div>

      <!-- Card 4: Community Initiatives (Events - Orange) -->
      <div class="growth-card pillar-events">
        <div class="pillar-header">
          <i class="lucide-calendar pillar-icon"></i>
          <h3>Community Initiatives</h3>
        </div>
        <p class="pillar-desc">Participate in upcoming webinars, interactive Social Business Canvas masterclasses, and township youth hackathons.</p>
        <button class="secondary-btn pillar-btn btn-orange" id="pillar-btn-events">View Initiatives</button>
      </div>

      <!-- Card 5: Collaborator Network (Network - Cyan) -->
      <div class="growth-card pillar-network">
        <div class="pillar-header">
          <i class="lucide-users pillar-icon"></i>
          <h3>Innovators Network</h3>
        </div>
        <p class="pillar-desc">Build connections with educational non-profits, circular-economy farmers, and tech developers driving positive social impact.</p>
        <button class="secondary-btn pillar-btn btn-cyan" id="pillar-btn-network">Connect with Network</button>
      </div>
    </div>
  `;

  // Bind Event Listeners connecting back to main views
  document.getElementById('pillar-btn-resources').addEventListener('click', () => {
    window.location.hash = '#/resources';
  });
  document.getElementById('pillar-btn-mentorship').addEventListener('click', () => {
    window.location.hash = '#/mentorship';
  });
  document.getElementById('pillar-btn-forums').addEventListener('click', () => {
    window.location.hash = '#/discussions';
  });
  document.getElementById('pillar-btn-events').addEventListener('click', () => {
    window.location.hash = '#/events';
  });
  document.getElementById('pillar-btn-network').addEventListener('click', () => {
    window.location.hash = '#/network';
  });
}
