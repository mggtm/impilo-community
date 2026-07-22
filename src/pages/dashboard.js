// Dashboard View Module
import { stats } from '../data/mockData';

export function renderDashboard(container, state, actions) {
  // Sort and select top items for dashboard widgets
  const trendingDiscussions = [...state.discussions]
    .sort((a, b) => (b.likes + b.replies.length) - (a.likes + a.replies.length))
    .slice(0, 3);

  const upcomingEvents = [...state.events]
    .slice(0, 2);

  const recommendedMentors = state.mentors
    .filter(m => m.available && !state.currentUser.requestedMentorships.includes(m.id))
    .slice(0, 2);

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

  container.innerHTML = `
    <!-- Welcome Impact Hero Section -->
    <div class="dashboard-hero">
      <div class="hero-left-content">
        <div class="hero-tag-pill">
          <span class="pill-dot"></span>
          <span>Social Impact Movement</span>
        </div>
        <h2>Welcome, ${state.currentUser.name}! 👋</h2>
        <p>Glad to have you back. Let's continue making an impact, expanding networks, and driving sustainable growth.</p>
        
        <!-- Community Impact Goal Progress -->
        <div class="hero-goal-progress">
          <div class="goal-info">
            <span>Community Goal: Township Enterprise Launches</span>
            <span>62% Achieved</span>
          </div>
          <div class="goal-progress-bar">
            <div class="goal-progress-fill" style="width: 62%;"></div>
          </div>
        </div>

        <div class="hero-metrics" style="margin-top: 24px;">
          <div class="hero-metric-item">
            <i class="lucide-zap"></i>
            <span>Action Oriented</span>
          </div>
          <div class="hero-metric-item">
            <i class="lucide-globe"></i>
            <span>Sustainability Focused</span>
          </div>
        </div>

        <div style="margin-top: 24px;">
          <button class="primary-btn" id="hero-btn-view-profile" style="background-color: var(--color-primary); color: #050811; border: none; font-weight: 700;">
            View Community Member
          </button>
        </div>
      </div>
      <div class="hero-right-accent">
        <button class="progress-momentum-badge" id="hero-btn-grow-impact" style="cursor: pointer; border: none; outline: none;">
          <i class="lucide-trending-up"></i>
          <span>Grow & Impact</span>
        </button>
      </div>
    </div>

    <!-- Community Statistics Row -->
    <div class="stats-grid">
      <!-- Active Members (Emerald Green) -->
      <div class="stat-card card-members">
        <div class="stat-icon"><i class="lucide-users"></i></div>
        <div class="stat-info">
          <div class="stat-val">${stats.totalMembers}</div>
          <div class="stat-lbl">Active Members</div>
          <div class="stat-trend trend-up"><i class="lucide-trending-up"></i> +8.4% this week</div>
        </div>
      </div>
      <!-- Discussions (Gold/Yellow) -->
      <div class="stat-card card-discussions">
        <div class="stat-icon"><i class="lucide-message-square"></i></div>
        <div class="stat-info">
          <div class="stat-val">${state.discussions.length}</div>
          <div class="stat-lbl">Discussions</div>
          <div class="stat-trend trend-gold"><i class="lucide-message-circle"></i> +3 new today</div>
        </div>
      </div>
      <!-- Mentors (Cyan/Teal) -->
      <div class="stat-card card-mentors">
        <div class="stat-icon"><i class="lucide-graduation-cap"></i></div>
        <div class="stat-info">
          <div class="stat-val">${state.mentors.filter(m => m.available).length}</div>
          <div class="stat-lbl">Mentors</div>
          <div class="stat-trend trend-cyan"><i class="lucide-check"></i> Available online</div>
        </div>
      </div>
      <!-- Upcoming Events (Orange) -->
      <div class="stat-card card-events">
        <div class="stat-icon"><i class="lucide-calendar"></i></div>
        <div class="stat-info">
          <div class="stat-val">${state.events.length}</div>
          <div class="stat-lbl">Upcoming Events</div>
          <div class="stat-trend trend-orange"><i class="lucide-star"></i> Hackathon open</div>
        </div>
      </div>
    </div>

    <!-- Dashboard Layout Grid -->
    <div class="dashboard-layout">
      <!-- Main Content Column -->
      <div class="dash-main">
        <!-- Opportunities & Recommended Actions -->
        <div class="section-panel opportunities-panel">
          <div class="panel-header">
            <h3><i class="lucide-compass"></i> Opportunities & Next Actions</h3>
          </div>
          <div class="opportunities-grid">
            <!-- Card 1: Join Discussion (Gold) -->
            <div class="opportunity-card action-primary">
              <div class="opp-header">
                <h4>Join the Conversation</h4>
                <i class="lucide-message-square opp-card-icon" style="color: var(--color-primary);"></i>
              </div>
              <p class="opp-card-desc">Discuss social business funding with Naledi and Albert.</p>
              <button class="primary-btn opp-btn" id="opp-btn-disc">Join Discussion</button>
            </div>
            
            <!-- Card 2: Find Mentor (Green) -->
            <div class="opportunity-card action-success">
              <div class="opp-header">
                <h4>Find a Mentor</h4>
                <i class="lucide-graduation-cap opp-card-icon" style="color: var(--color-success);"></i>
              </div>
              <p class="opp-card-desc">Browse available consultants for business guidance.</p>
              <button class="secondary-btn opp-btn btn-success" id="opp-btn-mentor">Find Mentor</button>
            </div>

            <!-- Card 3: Register Event (Orange) -->
            <div class="opportunity-card action-orange">
              <div class="opp-header">
                <h4>Register for Events</h4>
                <i class="lucide-calendar opp-card-icon" style="color: var(--color-warning);"></i>
              </div>
              <p class="opp-card-desc">Claim your ticket for the Impilo Youth Hackathon 2026.</p>
              <button class="secondary-btn opp-btn btn-orange" id="opp-btn-event">Register Ticket</button>
            </div>

            <!-- Card 4: Explore Resources (Cyan) -->
            <div class="opportunity-card action-cyan">
              <div class="opp-header">
                <h4>Explore Resources</h4>
                <i class="lucide-book-open opp-card-icon" style="color: var(--color-accent);"></i>
              </div>
              <p class="opp-card-desc">Access our step-by-step Social Business Model Course.</p>
              <button class="secondary-btn opp-btn btn-cyan" id="opp-btn-resource">Explore Library</button>
            </div>
            
            <!-- Card 5: Connect Innovators (Cyan) -->
            <div class="opportunity-card action-cyan">
              <div class="opp-header">
                <h4>Connect with Innovators</h4>
                <i class="lucide-users opp-card-icon" style="color: var(--color-accent);"></i>
              </div>
              <p class="opp-card-desc">Expand your network with entrepreneurs in Nelspruit.</p>
              <button class="secondary-btn opp-btn btn-cyan" id="opp-btn-network">Connect Now</button>
            </div>
          </div>
        </div>

        <!-- Trending Discussions -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-trending-up"></i> Trending Discussions</h3>
            <button class="panel-action-btn" id="dash-btn-discussions">View All Forums</button>
          </div>
          <div class="trending-list">
            ${trendingDiscussions.map(disc => `
              <div class="trend-item" data-id="${disc.id}">
                <div class="trend-content">
                  <div class="trend-category">${disc.category}</div>
                  <div class="trend-title">${disc.title}</div>
                  <div class="trend-meta">
                    <span>By ${disc.author.name}</span>
                    <span>•</span>
                    <span>${formatTime(disc.timestamp)}</span>
                  </div>
                </div>
                <div class="trend-stats">
                  <span><i class="lucide-heart"></i> ${disc.likes}</span>
                  <span><i class="lucide-message-square"></i> ${disc.replies.length}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Recent Activity Feed (Color Coded) -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-activity"></i> Recent Activity</h3>
          </div>
          <div class="activity-feed">
            ${state.activities.map(act => {
              // Determine category color coding
              let typeClass = 'gold'; // default
              if (act.action.includes('mentor') || act.action.includes('connect')) {
                typeClass = 'green';
              } else if (act.action.includes('event') || act.action.includes('hackathon')) {
                typeClass = 'orange';
              } else if (act.target.toLowerCase().includes('python') || act.target.toLowerCase().includes('technology')) {
                typeClass = 'cyan';
              }

              return `
                <div class="activity-item type-${typeClass}">
                  <div class="activity-circle">
                    <i class="${
                      act.action.includes('discussion') ? 'lucide-message-square' :
                      act.action.includes('replied') ? 'lucide-message-circle' :
                      act.action.includes('event') ? 'lucide-calendar' : 'lucide-user-plus'
                    }"></i>
                  </div>
                  <div class="activity-desc">
                    <strong>${act.user}</strong> ${act.action}
                    <a href="${act.link}">${act.target}</a>
                    <span class="activity-time">${formatTime(act.timestamp)}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Side Column -->
      <div class="dash-side">
        <!-- Upcoming Events widget -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-calendar"></i> Events Calendar</h3>
            <button class="panel-action-btn" id="dash-btn-events">View Calendar</button>
          </div>
          <div class="upcoming-events-list">
            ${upcomingEvents.map(event => {
              const eventDate = new Date(event.date);
              const formattedDate = eventDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' });
              return `
                <div class="upcoming-event-item">
                  <span class="event-mini-date">${formattedDate}</span>
                  <div class="event-mini-title">${event.title}</div>
                  <div class="event-mini-meta">
                    <i class="lucide-map-pin" style="font-size: 11px;"></i>
                    <span>${event.location.includes('Zoom') ? 'Online' : 'Physical'}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Recommended Mentors widget -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-award"></i> Featured Mentors</h3>
            <button class="panel-action-btn" id="dash-btn-mentorship">View Mentors</button>
          </div>
          <div class="mentor-recs">
            ${recommendedMentors.length === 0 ? `
              <div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 10px;">
                No recommendation matches at the moment.
              </div>
            ` : recommendedMentors.map(mentor => `
              <div class="mentor-rec-card">
                <img src="${mentor.avatar}" alt="${mentor.name}" class="mentor-rec-avatar">
                <div class="mentor-rec-info">
                  <div class="mentor-rec-name">${mentor.name}</div>
                  <div class="mentor-rec-exp">${mentor.expertise}</div>
                </div>
                <button class="mentor-rec-btn" data-id="${mentor.id}">Connect</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind Event Listeners
  // Hero view profile button
  document.getElementById('hero-btn-view-profile').addEventListener('click', () => {
    window.location.hash = '#/profile?id=currentUser';
  });

  // Hero Grow & Impact button
  document.getElementById('hero-btn-grow-impact').addEventListener('click', () => {
    actions.logGrowthExploration();
    window.location.hash = '#/growth';
  });

  // Navigation button redirects
  document.getElementById('dash-btn-discussions').addEventListener('click', () => {
    window.location.hash = '#/discussions';
  });
  document.getElementById('dash-btn-events').addEventListener('click', () => {
    window.location.hash = '#/events';
  });
  document.getElementById('dash-btn-mentorship').addEventListener('click', () => {
    window.location.hash = '#/mentorship';
  });

  // Action Panel redirects
  document.getElementById('opp-btn-disc').addEventListener('click', () => {
    window.location.hash = '#/discussions?id=disc-1';
  });
  document.getElementById('opp-btn-mentor').addEventListener('click', () => {
    window.location.hash = '#/mentorship';
  });
  document.getElementById('opp-btn-event').addEventListener('click', () => {
    window.location.hash = '#/events';
  });
  document.getElementById('opp-btn-resource').addEventListener('click', () => {
    window.location.hash = '#/resources';
  });
  document.getElementById('opp-btn-network').addEventListener('click', () => {
    window.location.hash = '#/network';
  });

  // Clicking a trend item opens the discussion thread
  container.querySelectorAll('.trend-item').forEach(item => {
    item.addEventListener('click', () => {
      const discId = item.getAttribute('data-id');
      window.location.hash = `#/discussions?id=${discId}`;
    });
  });

  // Clicking "Connect" on mentor recommendation card
  container.querySelectorAll('.mentor-rec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mentorId = btn.getAttribute('data-id');
      window.location.hash = `#/mentorship?request=${mentorId}`;
    });
  });
}
