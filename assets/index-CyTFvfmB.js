(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={id:`u-0`,name:`Mako Gufe`,role:`Community Member`,avatar:`./mako_avatar.jpg`,location:`Bulawayo, Zimbabwe`,email:`mako.gufe@example.com`,bio:`Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.`,connections:[`u-1`,`u-5`],registeredEvents:[`ev-2`],requestedMentorships:[]},t={totalMembers:1248,activeDiscussions:84,mentorsOnline:18,upcomingEventsCount:5},n=[{id:`disc-1`,title:`How to secure seed funding for a social enterprise in SA?`,author:{name:`Naledi Dlamini`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80`,role:`Entrepreneur`},category:`Empowerment`,content:`Hi everyone! I am working on a mobile clinic solution for rural communities but finding it difficult to secure initial seed funding. Most venture capitals seem to target purely commercial tech startups. Are there specific grants or impact investment funds that support early-stage social impact innovations? Any leads or tips would be greatly appreciated!`,timestamp:`2026-07-21T14:30:00Z`,likes:24,hasLiked:!1,replies:[{id:`rep-1-1`,author:{name:`Albert Mensah`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80`,role:`Business Mentor`},content:`Hi Naledi, you should look into SAB Foundation Social Innovation Awards and the Technology Innovation Agency (TIA) grassroots innovation programs. They are highly geared towards impact business models. Good luck!`,timestamp:`2026-07-21T16:15:00Z`},{id:`rep-1-2`,author:{name:`Zanele Khumalo`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80`,role:`Innovator`},content:`I went through the TIA program last year. I can share some tips on writing the application proposal if you would like to connect!`,timestamp:`2026-07-22T09:00:00Z`}]},{id:`disc-2`,title:`Introducing Python programming for beginners: Group study session?`,author:{name:`Michael Chen`,avatar:`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80`,role:`Software Developer`},category:`Technology`,content:`Hey community! I am thinking of setting up a weekly virtual study session where we go through basic Python syntax, data structures, and build some fun automation scripts together. No prior coding experience required. Would anyone be interested? We can host it on Zoom every Saturday afternoon.`,timestamp:`2026-07-22T10:15:00Z`,likes:42,hasLiked:!1,replies:[{id:`rep-2-1`,author:{name:`Mako Gufe`,avatar:`./mako_avatar.jpg`,role:`Community Member`},content:`Count me in! I really need to learn Python for a data analysis project I am starting next semester.`,timestamp:`2026-07-22T11:30:00Z`}]},{id:`disc-3`,title:`Mental Health in Startup Teams: Breaking the Stigma`,author:{name:`Lerato Phiri`,avatar:`https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80`,role:`Wellness Advocate`},category:`Social Impact`,content:`Running a startup or initiating community projects can be extremely stressful and isolating. Let's use this thread to talk about coping mechanisms, work-life balance, and how we can support our team members. What do you do to prevent burnout?`,timestamp:`2026-07-20T08:00:00Z`,likes:18,hasLiked:!1,replies:[]},{id:`disc-4`,title:`Announcing Township Agri-Tech pilot projects for 2026`,author:{name:`Zanele Khumalo`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80`,role:`Innovator`},category:`Innovation`,content:`We are officially launching the Agri-Tech pilot program in Nelspruit next month! Looking for 3 local youth-led co-ops to test our automated solar greenhouses. Fully sponsored by Enactus partnership. Apply before the end of this week!`,timestamp:`2026-07-22T14:00:00Z`,likes:31,hasLiked:!1,replies:[]}],r=[{id:`men-1`,name:`Albert Mensah`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80`,title:`Business Advisor & Incubator Lead`,expertise:`Business Strategy`,tags:[`Startups`,`Pitching`,`Financial Modeling`,`Social Impact`],bio:`Over 12 years of experience helping early-stage social entrepreneurs design sustainable business models and pitch to international investors.`,location:`Johannesburg, GP`,available:!0,rating:4.9,reviewsCount:38},{id:`men-2`,name:`Dr. Sarah Jenkins`,avatar:`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80`,title:`Public Health Consultant`,expertise:`Health & Wellness`,tags:[`Community Health`,`Epidemiology`,`Healthcare Policy`],bio:`Epidemiologist and health tech advocate. Advises grassroots health organizations on diagnostic tech deployment and field operations.`,location:`Cape Town, WC`,available:!0,rating:4.8,reviewsCount:22},{id:`men-3`,name:`Michael Chen`,avatar:`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80`,title:`Senior Solutions Architect`,expertise:`Software Development`,tags:[`Web Apps`,`Cloud Architecture`,`Python`,`React`,`APIs`],bio:`Software engineer who loves teaching. Can help you structure your database, choose your tech stack, and learn programming best practices.`,location:`Durban, KZN`,available:!1,rating:5,reviewsCount:15},{id:`men-4`,name:`Thabo Mokoena`,avatar:`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80`,title:`Product Design Lead`,expertise:`Product Design`,tags:[`UI/UX`,`Wireframing`,`User Research`,`Figma`],bio:`Helping startups create intuitive digital products. Expert in conducting usability tests and building high-fidelity design systems.`,location:`Pretoria, GP`,available:!0,rating:4.7,reviewsCount:29}],i=[{id:`res-1`,title:`Introduction to Social Entrepreneurship`,category:`Entrepreneurship`,type:`Course`,duration:`4 Weeks (2 hrs/week)`,rating:4.8,difficulty:`Beginner`,image:`https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80`,description:`Learn the fundamentals of creating a mission-driven business. This course covers social impact metrics, theories of change, and dual-purpose revenue generation structures.`,syllabus:[`Module 1: Defining Social Entrepreneurship & Mindset`,`Module 2: Building your Theory of Change`,`Module 3: Funding Options: Grants vs. Venture Philanthropy`,`Module 4: Practical SA Case Studies & Regulations`]},{id:`res-2`,title:`Fundamentals of Web Development (HTML, CSS & JS)`,category:`Technology`,type:`Course`,duration:`6 Weeks (5 hrs/week)`,rating:4.9,difficulty:`Beginner`,image:`https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=400&q=80`,description:`A comprehensive, practical guide to web programming. Build responsive websites from scratch and deploy them using modern version control practices.`,syllabus:[`Module 1: Semantic HTML & Document Object Model (DOM)`,`Module 2: Advanced CSS Layouts (Flexbox, Grid & Responsive)`,`Module 3: JavaScript Variables, Loops, and Functions`,`Module 4: DOM Manipulation & Event Handling`,`Module 5: Fetching Data from REST APIs`,`Module 6: Final Capstone Project & Deployment`]},{id:`res-3`,title:`Effective Pitching & Slide Deck Template`,category:`Entrepreneurship`,type:`Template`,duration:`15 min read`,rating:4.7,difficulty:`Intermediate`,image:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80`,description:`A standard 10-slide pitch presentation framework used by successful startups to secure funding. Includes actionable tips for each slide section.`,syllabus:[`Problem & Solution definition`,`Market Size & Opportunity metrics`,`Product / Service demonstration guidelines`,`Financial Projection formatting`]},{id:`res-4`,title:`UI/UX Mobile Design Best Practices`,category:`Design`,type:`Article`,duration:`20 min read`,rating:4.6,difficulty:`Intermediate`,image:`https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80`,description:`Explore standard mobile layout grids, accessibility standards (WCAG), interactive button sizing rules, and gesture-friendly user interface patterns.`,syllabus:[`Mobile layouts, scaling, and tap-target sizes`,`Color contrasts and typographic scale guidelines`,`Standard interactive feedback and micro-interactions`]}],a=[{id:`ev-1`,title:`Impilo Youth Hackathon 2026: Health & Tech Info Session`,date:`2026-08-05`,time:`14:00 - 15:30 (CAT)`,location:`Virtual via Zoom`,category:`Hackathon`,attendees:124,description:`Curious about the upcoming Hackathon? Join the coordinators as we break down the tracks (Mental Health, Civic Education, Wellness Access), eligibility criteria, judging guidelines, and how to pitch your ideas. Team formation sessions will run at the end.`,speaker:`Impilo Organising Committee`},{id:`ev-2`,title:`Workshop: Social Business Model Canvas Masterclass`,date:`2026-07-28`,time:`10:00 - 12:30 (CAT)`,location:`Impilo Hub, Braamfontein & Streamed Online`,category:`Workshop`,attendees:48,description:`A hands-on, intensive session designed to map out your startup ideas. We will run through the nine blocks of the canvas, specifically focusing on beneficiaries vs. customers, and measuring positive community outcomes.`,speaker:`Albert Mensah`},{id:`ev-3`,title:`Fireside Chat: Innovation in Healthcare Solutions`,date:`2026-08-12`,time:`17:30 - 19:00 (CAT)`,location:`Virtual via Zoom`,category:`Networking`,attendees:89,description:`An informal panel conversation with leading African medical-tech innovators sharing their hurdles, breakthroughs, and forecasts for community-driven health infrastructure over the next decade.`,speaker:`Dr. Sarah Jenkins + Guests`}],o=[{id:`net-1`,name:`Zanele Khumalo`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80`,type:`Innovator`,role:`Founder of EduSpark SA`,tags:[`EdTech`,`Gamified Learning`,`Youth Empowerment`],bio:`Building off-grid educational gaming boxes for rural school kids.`,location:`Polokwane, LP`},{id:`net-2`,name:`Kgotso Sekhute`,avatar:`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80`,type:`Entrepreneur`,role:`Co-Founder of BioGreens`,tags:[`AgriTech`,`Circular Economy`,`Sustainability`],bio:`Converting food scraps into affordable organic fertilizer for smallholder farms.`,location:`Nelspruit, MP`},{id:`net-3`,name:`Vuka Africa NGO`,avatar:`https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=150&h=150&q=80`,type:`Organisation`,role:`Community Development NPO`,tags:[`Youth Development`,`Skills Training`,`Funding Programs`],bio:`Empowering townships through accessible digital literacy hubs and vocational support.`,location:`Soweto, GP`},{id:`net-4`,name:`Albert Mensah`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80`,type:`Mentor`,role:`Incubator Lead & Coach`,tags:[`Pitching`,`Business Plan`,`Social Impact`],bio:`Helps young creators outline, validate, and launch their social ventures.`,location:`Johannesburg, GP`},{id:`net-5`,name:`Impilo Innovation Hub`,avatar:`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=150&h=150&q=80`,type:`Organisation`,role:`Technology Incubator & Maker Space`,tags:[`Hardware Lab`,`Mentorship`,`Co-Working`],bio:`Providing tools, internet access, and collaborative spaces for early stage innovators.`,location:`Braamfontein, GP`}],s=[{id:`act-1`,user:`Naledi Dlamini`,action:`created a discussion thread`,target:`How to secure seed funding for a social enterprise in SA?`,timestamp:`2026-07-21T14:30:00Z`,link:`#/discussions`},{id:`act-2`,user:`Albert Mensah`,action:`replied to Naledi's post`,target:`Suggesting SAB Foundation and TIA`,timestamp:`2026-07-21T16:15:00Z`,link:`#/discussions`},{id:`act-3`,user:`Michael Chen`,action:`posted a new event/study session`,target:`Python Programming Study Session`,timestamp:`2026-07-22T10:15:00Z`,link:`#/discussions`},{id:`act-4`,user:`Zanele Khumalo`,action:`joined the Impilo Community Network`,target:`as an Innovator`,timestamp:`2026-07-22T08:00:00Z`,link:`#/network`}];function c(e,n,r){let i=[...n.discussions].sort((e,t)=>t.likes+t.replies.length-(e.likes+e.replies.length)).slice(0,3),a=[...n.events].slice(0,2),o=n.mentors.filter(e=>e.available&&!n.currentUser.requestedMentorships.includes(e.id)).slice(0,2),s=e=>{let t=new Date(e),n=new Date-t,r=Math.floor(n/6e4);if(r<60)return`${r}m ago`;let i=Math.floor(r/60);return i<24?`${i}h ago`:t.toLocaleDateString(`en-ZA`,{day:`numeric`,month:`short`})};e.innerHTML=`
    <!-- Welcome Impact Hero Section -->
    <div class="dashboard-hero">
      <div class="hero-left-content">
        <div class="hero-tag-pill">
          <span class="pill-dot"></span>
          <span>Social Impact Movement</span>
        </div>
        <h2>Welcome, ${n.currentUser.name}! 👋</h2>
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
          <div class="stat-val">${t.totalMembers}</div>
          <div class="stat-lbl">Active Members</div>
          <div class="stat-trend trend-up"><i class="lucide-trending-up"></i> +8.4% this week</div>
        </div>
      </div>
      <!-- Discussions (Gold/Yellow) -->
      <div class="stat-card card-discussions">
        <div class="stat-icon"><i class="lucide-message-square"></i></div>
        <div class="stat-info">
          <div class="stat-val">${n.discussions.length}</div>
          <div class="stat-lbl">Discussions</div>
          <div class="stat-trend trend-gold"><i class="lucide-message-circle"></i> +3 new today</div>
        </div>
      </div>
      <!-- Mentors (Cyan/Teal) -->
      <div class="stat-card card-mentors">
        <div class="stat-icon"><i class="lucide-graduation-cap"></i></div>
        <div class="stat-info">
          <div class="stat-val">${n.mentors.filter(e=>e.available).length}</div>
          <div class="stat-lbl">Mentors</div>
          <div class="stat-trend trend-cyan"><i class="lucide-check"></i> Available online</div>
        </div>
      </div>
      <!-- Upcoming Events (Orange) -->
      <div class="stat-card card-events">
        <div class="stat-icon"><i class="lucide-calendar"></i></div>
        <div class="stat-info">
          <div class="stat-val">${n.events.length}</div>
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
            ${i.map(e=>`
              <div class="trend-item" data-id="${e.id}">
                <div class="trend-content">
                  <div class="trend-category">${e.category}</div>
                  <div class="trend-title">${e.title}</div>
                  <div class="trend-meta">
                    <span>By ${e.author.name}</span>
                    <span>•</span>
                    <span>${s(e.timestamp)}</span>
                  </div>
                </div>
                <div class="trend-stats">
                  <span><i class="lucide-heart"></i> ${e.likes}</span>
                  <span><i class="lucide-message-square"></i> ${e.replies.length}</span>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Recent Activity Feed (Color Coded) -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-activity"></i> Recent Activity</h3>
          </div>
          <div class="activity-feed">
            ${n.activities.map(e=>{let t=`gold`;return e.action.includes(`mentor`)||e.action.includes(`connect`)?t=`green`:e.action.includes(`event`)||e.action.includes(`hackathon`)?t=`orange`:(e.target.toLowerCase().includes(`python`)||e.target.toLowerCase().includes(`technology`))&&(t=`cyan`),`
                <div class="activity-item type-${t}">
                  <div class="activity-circle">
                    <i class="${e.action.includes(`discussion`)?`lucide-message-square`:e.action.includes(`replied`)?`lucide-message-circle`:e.action.includes(`event`)?`lucide-calendar`:`lucide-user-plus`}"></i>
                  </div>
                  <div class="activity-desc">
                    <strong>${e.user}</strong> ${e.action}
                    <a href="${e.link}">${e.target}</a>
                    <span class="activity-time">${s(e.timestamp)}</span>
                  </div>
                </div>
              `}).join(``)}
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
            ${a.map(e=>`
                <div class="upcoming-event-item">
                  <span class="event-mini-date">${new Date(e.date).toLocaleDateString(`en-ZA`,{day:`numeric`,month:`short`})}</span>
                  <div class="event-mini-title">${e.title}</div>
                  <div class="event-mini-meta">
                    <i class="lucide-map-pin" style="font-size: 11px;"></i>
                    <span>${e.location.includes(`Zoom`)?`Online`:`Physical`}</span>
                  </div>
                </div>
              `).join(``)}
          </div>
        </div>

        <!-- Recommended Mentors widget -->
        <div class="section-panel">
          <div class="panel-header">
            <h3><i class="lucide-award"></i> Featured Mentors</h3>
            <button class="panel-action-btn" id="dash-btn-mentorship">View Mentors</button>
          </div>
          <div class="mentor-recs">
            ${o.length===0?`
              <div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 10px;">
                No recommendation matches at the moment.
              </div>
            `:o.map(e=>`
              <div class="mentor-rec-card">
                <img src="${e.avatar}" alt="${e.name}" class="mentor-rec-avatar">
                <div class="mentor-rec-info">
                  <div class="mentor-rec-name">${e.name}</div>
                  <div class="mentor-rec-exp">${e.expertise}</div>
                </div>
                <button class="mentor-rec-btn" data-id="${e.id}">Connect</button>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById(`hero-btn-view-profile`).addEventListener(`click`,()=>{window.location.hash=`#/profile?id=currentUser`}),document.getElementById(`hero-btn-grow-impact`).addEventListener(`click`,()=>{r.logGrowthExploration(),window.location.hash=`#/growth`}),document.getElementById(`dash-btn-discussions`).addEventListener(`click`,()=>{window.location.hash=`#/discussions`}),document.getElementById(`dash-btn-events`).addEventListener(`click`,()=>{window.location.hash=`#/events`}),document.getElementById(`dash-btn-mentorship`).addEventListener(`click`,()=>{window.location.hash=`#/mentorship`}),document.getElementById(`opp-btn-disc`).addEventListener(`click`,()=>{window.location.hash=`#/discussions?id=disc-1`}),document.getElementById(`opp-btn-mentor`).addEventListener(`click`,()=>{window.location.hash=`#/mentorship`}),document.getElementById(`opp-btn-event`).addEventListener(`click`,()=>{window.location.hash=`#/events`}),document.getElementById(`opp-btn-resource`).addEventListener(`click`,()=>{window.location.hash=`#/resources`}),document.getElementById(`opp-btn-network`).addEventListener(`click`,()=>{window.location.hash=`#/network`}),e.querySelectorAll(`.trend-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);window.location.hash=`#/discussions?id=${t}`})}),e.querySelectorAll(`.mentor-rec-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-id`);window.location.hash=`#/mentorship?request=${n}`})})}function l(e,t,n){let r=window.location.hash,i=new URLSearchParams(r.substring(r.indexOf(`?`))),a=i.get(`id`),o=i.get(`search`)||``,s=i.get(`category`)||`All`,c=o,l=s,u=[`All`,`General`,`Social Impact`,`Innovation`,`Technology`,`Empowerment`];e.innerHTML=`
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
          ${u.map(e=>`<option value="${e}">${e}</option>`).join(``)}
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
  `;let d=e.querySelector(`#disc-search`),f=e.querySelector(`#disc-cat-select`),p=e.querySelector(`#disc-category-badges`),m=e.querySelector(`#discussions-list-container`);d.value=c,f.value=l;let h=e=>{let t=new Date(e),n=new Date-t,r=Math.floor(n/6e4);if(r<60)return`${r}m ago`;let i=Math.floor(r/60);return i<24?`${i}h ago`:t.toLocaleDateString(`en-ZA`,{day:`numeric`,month:`short`})};function g(){p.innerHTML=u.map(e=>`
      <button class="category-badge-btn ${l===e?`active`:``}" data-category="${e}">
        ${e}
      </button>
    `).join(``),p.querySelectorAll(`.category-badge-btn`).forEach(e=>{e.addEventListener(`click`,()=>{l=e.getAttribute(`data-category`),f.value=l,g(),_()})})}function _(){let e=t.discussions.filter(e=>{let t=e.title.toLowerCase().includes(c.toLowerCase())||e.content.toLowerCase().includes(c.toLowerCase()),n=l===`All`||e.category===l;return t&&n});m.innerHTML=e.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-message-square"></i></div>
        <div class="empty-state-title">No Discussions Found</div>
        <div class="empty-state-desc">We couldn't find any threads matching your filters. Why not start a new conversation and invite others?</div>
      </div>
    `:e.map(e=>{let t=a===e.id;return`
        <div class="discussion-card" id="card-${e.id}" style="${t?`border-color: var(--color-primary); box-shadow: var(--shadow-glow);`:``}">
          <div class="discussion-header">
            <div class="discussion-author-area">
              <img src="${e.author.avatar}" alt="${e.author.name}" class="author-avatar">
              <div class="author-details">
                <div class="author-name">${e.author.name}</div>
                <div class="author-title">${e.author.role}</div>
              </div>
            </div>
            <span class="disc-card-category cat-${e.category.toLowerCase().replace(/\s+/g,`-`)}">${e.category}</span>
          </div>

          <h2>${e.title}</h2>
          <p class="discussion-body-excerpt">${e.content}</p>

          <div class="discussion-footer">
            <span class="disc-timestamp">${new Date(e.timestamp).toLocaleString(`en-ZA`,{day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`})}</span>
            <div class="disc-actions">
              <button class="disc-action-btn like-btn ${e.hasLiked?`liked`:``}" data-id="${e.id}">
                <i class="lucide-heart" style="${e.hasLiked?`fill: currentColor;`:``}"></i> 
                <span>${e.likes}</span>
              </button>
              <button class="disc-action-btn comment-toggle-btn" data-id="${e.id}">
                <i class="lucide-message-square"></i> 
                <span>Comments (${e.replies.length})</span>
              </button>
            </div>
          </div>

          <!-- Replies / Thread Comments Expansion Section -->
          <div class="replies-section ${t?`active`:``}" id="replies-${e.id}">
            <!-- Input Box -->
            <div class="reply-input-box">
              <input type="text" placeholder="Write a reply..." id="reply-input-${e.id}" autocomplete="off">
              <button class="primary-btn submit-reply-btn" data-id="${e.id}" style="padding: 10px 18px; font-size: 13px;">
                Send
              </button>
            </div>

            <!-- Replies list -->
            <div class="replies-list" id="replies-list-${e.id}">
              ${ee(e)}
            </div>
          </div>
        </div>
      `}).join(``),v(),a&&setTimeout(()=>{let e=document.getElementById(`card-${a}`);e&&e.scrollIntoView({behavior:`smooth`,block:`center`})},200)}function ee(e){return e.replies.length===0?`
      <div style="font-size: 12px; color: var(--text-dark); text-align: center; padding: 15px;" class="no-replies-placeholder">
        No replies yet. Be the first to share your thoughts!
      </div>
    `:e.replies.map(e=>`
      <div class="reply-item">
        <div class="reply-header">
          <div class="reply-author-info">
            <img src="${e.author.avatar}" alt="${e.author.name}" class="reply-avatar">
            <div>
              <span class="reply-author-name">${e.author.name}</span>
              <span class="reply-author-role">${e.author.role}</span>
            </div>
          </div>
          <span class="reply-time">${h(e.timestamp)}</span>
        </div>
        <div class="reply-content">${e.content}</div>
      </div>
    `).join(``)}function v(){m.querySelectorAll(`.like-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-id`);n.toggleLike(r);let i=t.discussions.find(e=>e.id===r);if(i){e.classList.toggle(`liked`,i.hasLiked);let t=e.querySelector(`i`);t&&(t.style.fill=i.hasLiked?`currentColor`:``),e.querySelector(`span`).textContent=i.likes}})}),m.querySelectorAll(`.comment-toggle-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);m.querySelector(`#replies-${t}`).classList.toggle(`active`)})}),m.querySelectorAll(`.submit-reply-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-id`),i=m.querySelector(`#reply-input-${r}`),a=i.value.trim();if(!a)return;n.addReply(r,a),i.value=``;let o=t.discussions.find(e=>e.id===r);if(o){let t=m.querySelector(`#replies-list-${r}`);t.innerHTML=ee(o);let n=e.closest(`.discussion-card`).querySelector(`.comment-toggle-btn span`);n.textContent=`Comments (${o.replies.length})`}n.showToast(`Reply posted successfully!`)})})}d.addEventListener(`input`,e=>{c=e.target.value,_()}),f.addEventListener(`change`,e=>{l=e.target.value,g(),_()}),e.querySelector(`#btn-new-discussion`).addEventListener(`click`,te);function te(){let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-content`);t.innerHTML=`
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
    `,e.classList.add(`active`);let r=()=>e.classList.remove(`active`);document.getElementById(`modal-close`).addEventListener(`click`,r),document.getElementById(`modal-cancel`).addEventListener(`click`,r),document.getElementById(`new-disc-form`).addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`disc-title-input`),i=document.getElementById(`disc-category-select`),a=document.getElementById(`disc-content-textarea`),o=document.getElementById(`err-title`),s=document.getElementById(`err-cat`),c=document.getElementById(`err-content`),l=!0;t.value.trim().length<5?(t.classList.add(`invalid`),o.style.display=`block`,l=!1):(t.classList.remove(`invalid`),o.style.display=`none`),i.value?(i.classList.remove(`invalid`),s.style.display=`none`):(i.classList.add(`invalid`),s.style.display=`block`,l=!1),a.value.trim().length<20?(a.classList.add(`invalid`),c.style.display=`block`,l=!1):(a.classList.remove(`invalid`),c.style.display=`none`),l&&(n.addDiscussion(t.value.trim(),a.value.trim(),i.value),r(),n.showToast(`Discussion thread created successfully!`),_())})}g(),_()}function u(e,t,n){let r=window.location.hash,i=new URLSearchParams(r.substring(r.indexOf(`?`))).get(`request`),a=``,o=`All`,s=[`All`,`Business Strategy`,`Software Development`,`Product Design`,`Health & Wellness`];e.innerHTML=`
    <!-- Action Header -->
    <div class="actions-header">
      <div class="search-filter-box">
        <div class="search-input-wrapper">
          <i class="lucide-search"></i>
          <input type="text" id="mentor-search" placeholder="Search mentors by name, tags or title..." autocomplete="off">
        </div>
        <select class="filter-select" id="mentor-exp-select">
          ${s.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
      </div>
    </div>

    <!-- Quick Category Buttons -->
    <div class="category-badges" id="mentor-expertise-badges"></div>

    <!-- Mentors Grid (Dynamic) -->
    <div class="mentor-grid" id="mentor-grid-container"></div>
  `;let c=e.querySelector(`#mentor-search`),l=e.querySelector(`#mentor-exp-select`),u=e.querySelector(`#mentor-expertise-badges`),d=e.querySelector(`#mentor-grid-container`);function f(){u.innerHTML=s.map(e=>`
      <button class="category-badge-btn ${o===e?`active`:``}" data-expertise="${e}">
        ${e}
      </button>
    `).join(``),u.querySelectorAll(`.category-badge-btn`).forEach(e=>{e.addEventListener(`click`,()=>{o=e.getAttribute(`data-expertise`),l.value=o,f(),p()})})}function p(){let e=t.mentors.filter(e=>{let t=e.name.toLowerCase().includes(a.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(a.toLowerCase()))||e.title.toLowerCase().includes(a.toLowerCase()),n=o===`All`||e.expertise===o;return t&&n});d.innerHTML=e.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-users"></i></div>
        <div class="empty-state-title">No Mentors Found</div>
        <div class="empty-state-desc">No mentors match your search query or criteria. Try modifying your filters or tags search.</div>
      </div>
    `:e.map(e=>{let n=t.currentUser.requestedMentorships.includes(e.id);return`
        <div class="mentor-card">
          <span class="mentor-status-dot ${e.available?``:`unavailable`}"></span>
          <img src="${e.avatar}" alt="${e.name}" class="mentor-card-avatar">
          <h3 class="mentor-card-name">${e.name}</h3>
          <div class="mentor-card-title">${e.title}</div>
          
          <div class="mentor-experience" style="font-size: 12.5px; color: var(--color-success); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i class="lucide-award" style="font-size: 13px;"></i>
            <span>${e.name===`Albert Mensah`?`12+ Years Experience`:e.name===`Dr. Sarah Jenkins`?`8+ Years Experience`:e.name===`Michael Chen`?`10+ Years Experience`:`5+ Years Experience`}</span>
          </div>
          
          <div class="mentor-rating">
            <i class="lucide-star" style="fill: currentColor;"></i>
            <strong>${e.rating}</strong>
            <span>(${e.reviewsCount} reviews)</span>
          </div>

          <p class="mentor-bio">${e.bio}</p>

          <div class="mentor-tags">
            ${e.tags.map(e=>`<span class="mentor-tag">${e}</span>`).join(``)}
          </div>

          <div class="mentor-card-action">
            ${n?`
              <button class="secondary-btn" style="width: 100%; border-color: var(--color-success); color: var(--color-success); cursor: not-allowed;" disabled>
                <i class="lucide-check"></i> Request Pending
              </button>
            `:e.available?`
              <button class="primary-btn req-mentorship-btn" data-id="${e.id}" style="width: 100%; justify-content: center;">
                Request Mentorship
              </button>
            `:`
              <button class="secondary-btn" style="width: 100%; justify-content: center; opacity: 0.5; cursor: not-allowed;" disabled>
                Fully Booked
              </button>
            `}
          </div>
        </div>
      `}).join(``),m()}function m(){d.querySelectorAll(`.req-mentorship-btn`).forEach(e=>{e.addEventListener(`click`,()=>{h(e.getAttribute(`data-id`))})})}c.addEventListener(`input`,e=>{a=e.target.value,p()}),l.addEventListener(`change`,e=>{o=e.target.value,f(),p()});function h(e){let r=t.mentors.find(t=>t.id===e);if(!r)return;let i=document.getElementById(`modal-overlay`),a=document.getElementById(`modal-content`);a.innerHTML=`
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div class="modal-header">
        <h3>Request Mentorship</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 5px;">Connecting with <strong>${r.name}</strong></p>
      </div>
      <form id="req-mentor-form" novalidate>
        <div class="form-group">
          <label for="req-reason">Why do you want mentorship from ${r.name}?</label>
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
          <input type="email" id="req-contact" value="${t.currentUser.email}" placeholder="Your email address" required>
          <span class="error-text" id="err-contact">Please provide a valid contact email.</span>
        </div>
        <div class="form-actions-modal">
          <button type="button" class="secondary-btn" id="modal-cancel">Cancel</button>
          <button type="submit" class="primary-btn">Submit Request</button>
        </div>
      </form>
    `,i.classList.add(`active`);let o=()=>i.classList.remove(`active`);document.getElementById(`modal-close`).addEventListener(`click`,o),document.getElementById(`modal-cancel`).addEventListener(`click`,o),document.getElementById(`req-mentor-form`).addEventListener(`submit`,t=>{t.preventDefault();let i=document.getElementById(`req-reason`),a=document.getElementById(`req-goals`),s=document.getElementById(`req-contact`),c=document.getElementById(`err-reason`),l=document.getElementById(`err-goals`),u=document.getElementById(`err-contact`),d=!0;i.value.trim().length<15?(i.classList.add(`invalid`),c.style.display=`block`,d=!1):(i.classList.remove(`invalid`),c.style.display=`none`),a.value.trim().length<5?(a.classList.add(`invalid`),l.style.display=`block`,d=!1):(a.classList.remove(`invalid`),l.style.display=`none`),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value.trim())?(s.classList.remove(`invalid`),u.style.display=`none`):(s.classList.add(`invalid`),u.style.display=`block`,d=!1),d&&(n.requestMentorship(e),o(),n.showToast(`Request sent to ${r.name}!`),p())})}if(f(),p(),i){let e=r.split(`?`)[0];window.history.replaceState(null,``,e),setTimeout(()=>{h(i)},100)}}function d(e,t,n){let r=``,i=`All`,a=[`All`,`Entrepreneurship`,`Technology`,`Design`];e.innerHTML=`
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
          ${a.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
      </div>
    </div>

    <!-- Quick Category Buttons -->
    <div class="category-badges" id="resource-category-badges"></div>

    <!-- Resources Grid (Dynamic) -->
    <div class="resources-grid" id="resources-grid-container"></div>
  `;let o=e.querySelector(`#resource-search`),s=e.querySelector(`#resource-cat-select`),c=e.querySelector(`#resource-category-badges`),l=e.querySelector(`#resources-grid-container`);function u(){c.innerHTML=a.map(e=>`
      <button class="category-badge-btn ${i===e?`active`:``}" data-category="${e}">
        ${e}
      </button>
    `).join(``),c.querySelectorAll(`.category-badge-btn`).forEach(e=>{e.addEventListener(`click`,()=>{i=e.getAttribute(`data-category`),s.value=i,u(),d()})})}function d(){let e=t.resources.filter(e=>{let t=e.title.toLowerCase().includes(r.toLowerCase())||e.description.toLowerCase().includes(r.toLowerCase()),n=i===`All`||e.category===i;return t&&n});l.innerHTML=e.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-book-open"></i></div>
        <div class="empty-state-title">No Resources Found</div>
        <div class="empty-state-desc">We couldn't find any learning materials matching your criteria. Try resetting the filters.</div>
      </div>
    `:e.map(e=>`
      <div class="resource-card">
        <div class="resource-img-area">
          <span class="resource-card-category">${e.category}</span>
          <img src="${e.image}" alt="${e.title}">
        </div>
        
        <div class="resource-card-body">
          <div class="resource-type-row">
            <span>${e.type}</span>
            <span class="difficulty">${e.difficulty}</span>
          </div>
          <h3 class="resource-card-title">${e.title}</h3>
          <p class="resource-card-desc">${e.description}</p>
          
          <div class="resource-card-footer">
            <div class="resource-duration">
              <i class="lucide-clock" style="font-size: 13px;"></i>
              <span>${e.duration}</span>
            </div>
            <div class="resource-rating">
              <i class="lucide-star" style="fill: currentColor; font-size: 13px;"></i>
              <span>${e.rating}</span>
            </div>
          </div>
          
          <button class="primary-btn view-resource-btn" data-id="${e.id}" style="margin-top: 15px; width: 100%; justify-content: center;">
            View Course Details
          </button>
        </div>
      </div>
    `).join(``),f()}function f(){l.querySelectorAll(`.view-resource-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);n.logResourceInteraction(t),p(t)})})}o.addEventListener(`input`,e=>{r=e.target.value,d()}),s.addEventListener(`change`,e=>{i=e.target.value,u(),d()});function p(e){let r=t.resources.find(t=>t.id===e);if(!r)return;let i=document.getElementById(`modal-overlay`),a=document.getElementById(`modal-content`);a.innerHTML=`
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;">
        <img src="${r.image}" alt="${r.title}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--border-radius-md);">
      </div>
      <div class="modal-header" style="margin-bottom: 12px;">
        <span style="font-size: 11px; font-weight: 700; color: var(--color-accent); text-transform: uppercase;">${r.category} • ${r.type}</span>
        <h3 style="margin-top: 5px; line-height: 1.3;">${r.title}</h3>
      </div>
      <div style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
        ${r.description}
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px; background-color: var(--bg-input); border-radius: var(--border-radius-md); font-size: 13px; margin-bottom: 20px;">
        <div><strong>Duration:</strong> ${r.duration}</div>
        <div><strong>Difficulty:</strong> ${r.difficulty}</div>
        <div><strong>Rating:</strong> ⭐ ${r.rating}</div>
      </div>
      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 10px;">Syllabus Outline / Contents:</h4>
        <ul class="modal-syllabus-list">
          ${r.syllabus.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </div>
      <div class="form-actions-modal" style="margin-top: 30px;">
        <button type="button" class="secondary-btn" id="modal-close-2">Close</button>
        <button type="button" class="primary-btn" id="enroll-course-btn">
          Access Resources
        </button>
      </div>
    `,i.classList.add(`active`);let o=()=>i.classList.remove(`active`);document.getElementById(`modal-close`).addEventListener(`click`,o),document.getElementById(`modal-close-2`).addEventListener(`click`,o),document.getElementById(`enroll-course-btn`).addEventListener(`click`,()=>{o(),n.showToast(`Enrolled in "${r.title}"! Resources unlocked.`)})}u(),d()}function f(e,t,n){function r(){e.innerHTML=`
      <!-- Page header descriptions -->
      <div style="margin-bottom: 30px;">
        <p style="color: var(--text-muted); font-size: 14.5px;">Discover upcoming webinars, interactive workshops, and hackathons hosted by the Impilo Community. Secure your seats early.</p>
      </div>

      <!-- Events List -->
      <div class="events-grid">
        ${t.events.map(e=>{let n=t.currentUser.registeredEvents.includes(e.id),r=new Date(e.date),i=r.getDate();return`
            <div class="event-card">
              <div class="event-date-block">
                <span class="event-date-month">${r.toLocaleDateString(`en-US`,{month:`short`})}</span>
                <span class="event-date-day">${i}</span>
              </div>

              <div class="event-card-content">
                <span class="event-card-cat cat-${e.category.toLowerCase()}">${e.category}</span>
                <h2 class="event-card-title">${e.title}</h2>
                <p class="event-card-desc">${e.description}</p>
                
                <div class="event-card-meta">
                  <div class="event-meta-item">
                    <i class="lucide-user"></i>
                    <span>Speaker: <strong>${e.speaker}</strong></span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-clock"></i>
                    <span>${e.time}</span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-map-pin"></i>
                    <span>${e.location}</span>
                  </div>
                  <div class="event-meta-item">
                    <i class="lucide-users"></i>
                    <span>${e.attendees} Attending</span>
                  </div>
                </div>
              </div>

              <div class="event-card-action">
                ${n?`
                  <button class="secondary-btn" style="border-color: var(--color-success); color: var(--color-success); cursor: not-allowed;" disabled>
                    <i class="lucide-check-circle"></i> Registered
                  </button>
                `:`
                  <button class="primary-btn register-event-btn" data-id="${e.id}">
                    Register Seat
                  </button>
                `}
              </div>
            </div>
          `}).join(``)}
      </div>
    `,i()}function i(){e.querySelectorAll(`.register-event-btn`).forEach(e=>{e.addEventListener(`click`,()=>{a(e.getAttribute(`data-id`))})})}function a(e){let i=t.events.find(t=>t.id===e);if(!i)return;let a=document.getElementById(`modal-overlay`),o=document.getElementById(`modal-content`);o.innerHTML=`
      <button class="modal-close-btn" id="modal-close"><i class="lucide-x"></i></button>
      <div class="modal-header">
        <h3>Register for Event</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 5px;">${i.title}</p>
      </div>
      <form id="event-reg-form" novalidate>
        <div class="form-group">
          <label for="reg-name">Your Full Name</label>
          <input type="text" id="reg-name" value="${t.currentUser.name}" placeholder="e.g. Mako Gufe" required>
          <span class="error-text" id="err-name">Please enter your name (minimum 3 characters).</span>
        </div>
        <div class="form-group">
          <label for="reg-email">Your Email Address</label>
          <input type="email" id="reg-email" value="${t.currentUser.email}" placeholder="your.name@example.com" required>
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
    `,a.classList.add(`active`);let s=()=>a.classList.remove(`active`);document.getElementById(`modal-close`).addEventListener(`click`,s),document.getElementById(`modal-cancel`).addEventListener(`click`,s),document.getElementById(`event-reg-form`).addEventListener(`submit`,t=>{t.preventDefault();let a=document.getElementById(`reg-name`),o=document.getElementById(`reg-email`),c=document.getElementById(`err-name`),l=document.getElementById(`err-email`),u=!0;a.value.trim().length<3?(a.classList.add(`invalid`),c.style.display=`block`,u=!1):(a.classList.remove(`invalid`),c.style.display=`none`),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.trim())?(o.classList.remove(`invalid`),l.style.display=`none`):(o.classList.add(`invalid`),l.style.display=`block`,u=!1),u&&(n.registerEvent(e),s(),n.showToast(`Ticket confirmed for ${i.title}!`),r())})}r()}function p(e,t,n){let r=``,i=`All`,a=[{label:`All Discovery`,value:`All`},{label:`Innovators`,value:`Innovator`},{label:`Entrepreneurs`,value:`Entrepreneur`},{label:`Mentors`,value:`Mentor`},{label:`Organisations`,value:`Organisation`}];e.innerHTML=`
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
  `;let o=e.querySelector(`#network-search`),s=e.querySelector(`#network-tabs-container`),c=e.querySelector(`#network-grid-container`);function l(){s.innerHTML=a.map(e=>`
      <button class="network-tab-btn ${i===e.value?`active`:``}" data-tab="${e.value}">
        ${e.label}
      </button>
    `).join(``),s.querySelectorAll(`.network-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{i=e.getAttribute(`data-tab`),l(),u()})})}function u(){let e=t.network.filter(e=>{let t=e.name.toLowerCase().includes(r.toLowerCase())||e.role.toLowerCase().includes(r.toLowerCase())||e.bio.toLowerCase().includes(r.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(r.toLowerCase())),n=i===`All`||e.type===i;return t&&n});c.innerHTML=e.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-users"></i></div>
        <div class="empty-state-title">No Profiles Found</div>
        <div class="empty-state-desc">Try resetting your filters or search keywords.</div>
      </div>
    `:e.map(e=>{let n=t.currentUser.connections.includes(e.id);return`
        <div class="network-card ${e.type.toLowerCase()}" id="net-card-${e.id}">
          <img src="${e.avatar}" alt="${e.name}" class="network-avatar">
          <span class="network-type-badge">${e.type}</span>
          <h3 class="network-name">${e.name}</h3>
          <div class="network-role">${e.role}</div>
          
          <div class="network-loc">
            <i class="lucide-map-pin" style="font-size: 12px; color: var(--color-accent);"></i>
            <span>${e.location}</span>
          </div>

          <p class="network-bio">${e.bio}</p>

          <div class="mentor-tags" style="margin-bottom: 20px;">
            ${e.tags.map(e=>`<span class="mentor-tag">${e}</span>`).join(``)}
          </div>

          <div style="width: 100%; display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
            <div class="connect-action-wrapper" style="width: 100%;">
              ${d(e.id,n)}
            </div>
            <button class="secondary-btn view-member-profile-btn" data-id="${e.id}" style="width: 100%; justify-content: center; font-size: 12px; font-weight: 600;">
              View Community Member
            </button>
          </div>
        </div>
      `}).join(``),f()}function d(e,t){return t?`
      <button class="secondary-btn toggle-connect-btn" data-id="${e}" style="width: 100%; border-color: var(--color-success); color: var(--color-success); display: flex; justify-content: center; gap: 8px;">
        <i class="lucide-user-check"></i> Connected
      </button>
    `:`
      <button class="primary-btn toggle-connect-btn" data-id="${e}" style="width: 100%; justify-content: center; display: flex; gap: 8px;">
        <i class="lucide-user-plus"></i> Connect
      </button>
    `}function f(){c.querySelectorAll(`.view-member-profile-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);window.location.hash=`#/profile?id=${t}`})}),c.querySelectorAll(`.toggle-connect-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-id`);if(t.currentUser.connections.includes(r)){n.toggleConnection(r,!1),n.showToast(`Removed connection.`);let t=e.closest(`.connect-action-wrapper`);t.innerHTML=d(r,!1),p(r)}else e.innerHTML=`<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`,e.disabled=!0,setTimeout(()=>{n.toggleConnection(r,!0),n.showToast(`Connection request accepted!`);let t=e.closest(`.connect-action-wrapper`);t.innerHTML=d(r,!0),p(r)},600)})})}function p(e){let r=c.querySelector(`#net-card-${e}`);if(!r)return;let i=r.querySelector(`.toggle-connect-btn`);i.addEventListener(`click`,()=>{if(t.currentUser.connections.includes(e)){n.toggleConnection(e,!1),n.showToast(`Removed connection.`);let t=i.closest(`.connect-action-wrapper`);t.innerHTML=d(e,!1),p(e)}else i.innerHTML=`<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`,i.disabled=!0,setTimeout(()=>{n.toggleConnection(e,!0),n.showToast(`Connection request accepted!`);let t=i.closest(`.connect-action-wrapper`);t.innerHTML=d(e,!0),p(e)},600)})}o.addEventListener(`input`,e=>{r=e.target.value,u()}),l(),u()}function m(e,t,n){let r=window.location.hash||``,i=new URLSearchParams(r.includes(`?`)?r.split(`?`)[1]:``).get(`id`)||`currentUser`,a=null;if(i===`currentUser`||i===`u-0`||i===t.currentUser.id)a={id:`currentUser`,name:t.currentUser.name,avatar:t.currentUser.avatar,role:t.currentUser.role,type:`Community Member`,bio:t.currentUser.bio||`Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.`,location:t.currentUser.location||`Bulawayo, Zimbabwe`,tags:[`Social Impact`,`Innovation`,`Technology`,`Empowerment`],email:t.currentUser.email};else if(a=t.network.find(e=>e.id===i),!a){let e=t.mentors.find(e=>e.id===i);e&&(a={id:e.id,name:e.name,avatar:e.avatar,role:e.title,type:`Mentor`,bio:e.bio,location:e.location,tags:e.tags,email:`${e.name.toLowerCase().replace(/\s+/g,``)}@impiloconsultancy.org`})}if(!a){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon"><i class="lucide-user-x"></i></div>
        <div class="empty-state-title">Profile Not Found</div>
        <div class="empty-state-desc">We couldn't retrieve details for the specified member.</div>
        <button class="primary-btn" onclick="window.location.hash='#/dashboard'" style="margin-top: 15px;">Go back to Dashboard</button>
      </div>
    `;return}let o=t.activities.filter(e=>e.user===a.name),s=a.id===`currentUser`,c=t.currentUser.connections.includes(a.id);e.innerHTML=`
    <div style="margin-bottom: 25px;">
      <a href="javascript:history.back()" style="display: flex; align-items: center; gap: 6px; color: var(--color-primary); font-size: 13px; text-decoration: none; font-weight: 600; width: fit-content; margin-bottom: 20px;">
        <i class="lucide-arrow-left"></i> Back to previous page
      </a>
    </div>

    <div class="profile-layout">
      <!-- Profile Header / Sidebar Card -->
      <div class="section-panel profile-sidebar-card">
        <img src="${a.avatar}" alt="${a.name}" class="profile-layout-avatar">
        
        <h2 class="profile-layout-name">${a.name}</h2>
        <div class="profile-layout-badge">${a.type}</div>
        <div class="profile-layout-role">${a.role}</div>

        <div class="profile-meta-list">
          <div class="profile-meta-item">
            <i class="lucide-map-pin"></i>
            <span>${a.location}</span>
          </div>
          ${a.email?`
            <div class="profile-meta-item">
              <i class="lucide-mail"></i>
              <span>${a.email}</span>
            </div>
          `:``}
        </div>

        <div style="width: 100%; margin-top: 10px;">
          ${s?``:`
            <button class="primary-btn toggle-profile-connect opp-btn" data-id="${a.id}" style="justify-content: center;">
              ${c?`<i class="lucide-user-check"></i> Connected`:`<i class="lucide-user-plus"></i> Connect`}
            </button>
          `}
        </div>
      </div>

      <!-- Profile Details & Recent Activity -->
      <div class="profile-details-column">
        <!-- About Section -->
        <div class="section-panel">
          <h3 class="profile-section-title">Biography</h3>
          <p class="profile-bio-text">${a.bio}</p>
          
          <h4 class="profile-subsection-title">Expertise & Interests</h4>
          <div class="mentor-tags">
            ${a.tags.map(e=>`
              <button class="mentor-tag interest-click-btn" data-interest="${e}" style="cursor: pointer; border: 1px solid var(--border-light); font-weight: 600; text-transform: capitalize; outline: none;">
                ${e}
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Activity History Section -->
        <div class="section-panel">
          <h3 class="profile-section-title">Recent Activity</h3>
          
          <div class="activity-feed">
            ${o.length===0?`
              <div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">
                No recent community activities logged for this member.
              </div>
            `:o.map(e=>`
              <div class="activity-item">
                <div class="activity-circle" style="border-color: rgba(255, 191, 0, 0.3); color: var(--color-primary); background-color: rgba(255, 191, 0, 0.06);">
                  <i class="${e.action.includes(`discussion`)?`lucide-message-square`:e.action.includes(`replied`)?`lucide-message-circle`:e.action.includes(`event`)?`lucide-calendar`:`lucide-user-plus`}"></i>
                </div>
                <div class="activity-desc">
                  <strong>${e.user}</strong> ${e.action}
                  <a href="${e.link}">${e.target}</a>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>
    </div>
  `;let l=e.querySelector(`.toggle-profile-connect`);l&&l.addEventListener(`click`,()=>{t.currentUser.connections.includes(a.id)?(n.toggleConnection(a.id,!1),n.showToast(`Removed connection.`),l.innerHTML=`<i class="lucide-user-plus"></i> Connect`):(l.innerHTML=`<span class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></span> Connecting...`,l.disabled=!0,setTimeout(()=>{n.toggleConnection(a.id,!0),n.showToast(`Connection request accepted!`),l.disabled=!1,l.innerHTML=`<i class="lucide-user-check"></i> Connected`},600))}),e.querySelectorAll(`.interest-click-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-interest`).trim();t===`Social Impact`?window.location.hash=`#/discussions?category=Social Impact`:t===`Innovation`?window.location.hash=`#/discussions?category=Innovation`:t===`Technology`?window.location.hash=`#/discussions?category=Technology`:t===`Empowerment`?window.location.hash=`#/discussions?category=Empowerment`:window.location.hash=`#/discussions?search=${encodeURIComponent(t)}`})})}function h(e,t,n){e.innerHTML=`
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
  `,document.getElementById(`pillar-btn-resources`).addEventListener(`click`,()=>{window.location.hash=`#/resources`}),document.getElementById(`pillar-btn-mentorship`).addEventListener(`click`,()=>{window.location.hash=`#/mentorship`}),document.getElementById(`pillar-btn-forums`).addEventListener(`click`,()=>{window.location.hash=`#/discussions`}),document.getElementById(`pillar-btn-events`).addEventListener(`click`,()=>{window.location.hash=`#/events`}),document.getElementById(`pillar-btn-network`).addEventListener(`click`,()=>{window.location.hash=`#/network`})}function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var _;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(_||={});function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ee(e)}var v;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(v||={});var te=(e,t)=>{if(e.charAt(0)===`_`)return oe(t,e.slice(1,e.length));switch(e){case v.bool:return re(t);case v.float4:case v.float8:case v.int2:case v.int4:case v.int8:case v.numeric:case v.oid:return ie(t);case v.json:case v.jsonb:return ae(t);case v.timestamp:return se(t);case v.abstime:case v.date:case v.daterange:case v.int4range:case v.int8range:case v.money:case v.reltime:case v.text:case v.time:case v.timestamptz:case v.timetz:case v.tsrange:case v.tstzrange:return ne(t);default:return ne(t)}},ne=e=>e,re=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},ie=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},ae=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},oe=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>te(t,e))}return e},se=e=>typeof e==`string`?e.replace(` `,`T`):e,ce;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(ce||={});var le;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(le||={});var ue;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(ue||={});var de;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(de||={});function y(e){"@babel/helpers - typeof";return y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},y(e)}function fe(e,t){if(y(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(y(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function pe(e){var t=fe(e,`string`);return y(t)==`symbol`?t:t+``}function me(e,t,n){return(t=pe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?he(Object(n),!0).forEach(function(t){me(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ge=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},_e=class extends ge{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return b({},super.toJSON())}},ve=class extends ge{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function ye(e,t,n){let r=b({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}var be=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xe=e=>{if(Array.isArray(e))return e.map(e=>xe(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=xe(n)}),t},Se=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},Ce=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new _e(Se(e),i,n,r))}).catch(()=>{let e=i+``;t(new _e(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new ve(Se(e),e,r))},we=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return b(b({},i),n);if(be(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=ye(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),b(b({},i),n)};async function x(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,we(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>Ce(e,c,r,o))})}function Te(e=`storage`){return{get:async(t,n,r,i)=>x(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>x(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>x(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>x(t,`HEAD`,n,b(b({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>x(t,`DELETE`,n,i,a,r,e)}}var{get:Ee,post:De,put:Oe,head:ke,remove:Ae}=Te(`storage`),je=`2.110.8`,S=30*1e3,Me=3*S,Ne=2*S,Pe=`http://localhost:9999`,Fe=`supabase.auth.token`,Ie={"X-Client-Info":`gotrue-js/${je}`},Le=`X-Supabase-Api-Version`,Re={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},ze=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,C=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function w(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var Be=class extends C{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function Ve(e){return w(e)&&e.name===`AuthApiError`}var T=class extends C{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},E=class extends C{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},D=class extends E{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function He(e){return w(e)&&e.name===`AuthSessionMissingError`}var O=class extends E{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},k=class extends E{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Ue=class extends E{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function We(e){return w(e)&&e.name===`AuthImplicitGrantRedirectError`}var Ge=class extends E{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},Ke=class extends E{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},qe=class extends E{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function Je(e){return w(e)&&e.name===`AuthRetryableFetchError`}var Ye=class extends E{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function Xe(e){return w(e)&&e.name===`AuthRefreshDiscardedError`}var Ze=class extends E{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},Qe=class extends E{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},$e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),et=` 	
\r=`.split(``),tt=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<et.length;t+=1)e[et[t].charCodeAt(0)]=-2;for(let t=0;t<$e.length;t+=1)e[$e[t].charCodeAt(0)]=t;return e})();function nt(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n($e[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n($e[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function rt(e,t,n){let r=tt[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function it(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{st(e,r,n)};for(let t=0;t<e.length;t+=1)rt(e.charCodeAt(t),i,a);return t.join(``)}function at(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function ot(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}at(r,t)}}function st(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function A(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)rt(e.charCodeAt(t),n,r);return new Uint8Array(t)}function ct(e){let t=[];return ot(e,e=>t.push(e)),new Uint8Array(t)}function j(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>nt(e,n,r)),nt(null,n,r),t.join(``)}function lt(e){return Math.round(Date.now()/1e3)+e}function ut(){return Symbol(`auth-callback`)}var M=()=>typeof window<`u`&&typeof document<`u`,N={tested:!1,writable:!1},dt=()=>{if(!M())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(N.tested)return N.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),N.tested=!0,N.writable=!0}catch{N.tested=!0,N.writable=!1}return N.writable};function ft(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var pt=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),mt=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,P=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},F=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},I=async(e,t)=>{await e.removeItem(t)},ht=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};ht.promiseConstructor=Promise;function L(e){let t=e.split(`.`);if(t.length!==3)throw new Qe(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!ze.test(t[e]))throw new Qe(`JWT not in base64url format`);return{header:JSON.parse(it(t[0])),payload:JSON.parse(it(t[1])),signature:A(t[2]),raw:{header:t[0],payload:t[1]}}}async function gt(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function _t(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function vt(e){return(`0`+e.toString(16)).substr(-2)}function yt(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,vt).join(``)}async function bt(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function xt(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await bt(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function R(e,t,n=!1){let r=yt(),i=r;n&&(i+=`/recovery`),await P(e,`${t}-code-verifier`,i);let a=await xt(r);return[a,r===a?`plain`:`s256`]}var St=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Ct(e){let t=e.headers.get(Le);if(!t||!t.match(St))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function wt(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Tt(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var Et=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function z(e){if(!Et.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function B(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Dt(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Ot(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function kt(e){return JSON.parse(JSON.stringify(e))}var V=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},At=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function jt(e){if(!mt(e))throw new qe(V(e),0);if(At.includes(e.status))throw new qe(V(e),e.status);let t;try{t=await e.json()}catch(e){throw new T(V(e),e)}let n,r=Ct(e);if(r&&r.getTime()>=Re[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new Ze(V(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new Ze(V(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new D;throw new Be(V(t),e.status||500,n)}var Mt=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function H(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[Le]=Re[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await Nt(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function Nt(e,t,n,r,i,a){let o=Mt(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw new qe(V(e),0)}if(s.ok||await jt(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await jt(e)}}function U(e){let t=null;Rt(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=lt(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function Pt(e){let t=U(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function W(e){return{data:{user:e.user??e},error:null}}function Ft(e){return{data:e,error:null}}function It(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=g(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function Lt(e){return e}function Rt(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var zt=[`global`,`local`,`others`],Bt=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=pt(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=zt[0]){if(zt.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${zt.join(`, `)}`);try{return await H(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(w(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await H(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:W})}catch(e){if(w(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=g(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await H(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:It,redirectTo:t?.redirectTo})}catch(e){if(w(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await H(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:W})}catch(e){if(w(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await H(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Lt});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(w(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){z(e);try{return await H(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:W})}catch(e){if(w(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){z(e);try{return await H(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:W})}catch(e){if(w(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){z(e);try{return await H(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:W})}catch(e){if(w(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){z(e.userId);try{let{data:t,error:n}=await H(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(w(e))return{data:null,error:e};throw e}}async _deleteFactor(e){z(e.userId),z(e.id);try{return{data:await H(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(w(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await H(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Lt});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(w(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await H(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await H(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await H(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await H(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(w(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await H(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await H(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(w(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await H(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await H(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await H(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await H(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(w(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){B(this.experimental),z(e.userId);try{return await H(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(w(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){B(this.experimental),z(e.userId),z(e.passkeyId);try{return await H(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(w(e))return{data:null,error:e};throw e}}};function Vt(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&dt()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var Ht=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function Ut(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Wt(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function Gt(e){return parseInt(e,16)}function Kt(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function qt(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Wt(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var G=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Jt=class extends G{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Yt({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new G({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new G({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new G({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new G({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new G({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new G({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new G({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new G({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!nn(t))return new G({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new G({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new G({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new G({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new G({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Xt({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new G({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new G({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!nn(t))return new G({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new G({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new G({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new G({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var Zt=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Qt(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=g(e,[`challenge`,`user`,`excludeCredentials`]),a=A(t).buffer,o=Object.assign(Object.assign({},n),{id:A(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:A(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function $t(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=g(e,[`challenge`,`allowCredentials`]),i=A(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:A(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function en(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:j(new Uint8Array(e.response.attestationObject)),clientDataJSON:j(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function tn(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:j(new Uint8Array(r.authenticatorData)),clientDataJSON:j(new Uint8Array(r.clientDataJSON)),signature:j(new Uint8Array(r.signature)),userHandle:r.userHandle?j(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function nn(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function rn(){return!!(M()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function an(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Jt(`Browser returned unexpected credential type`,t)}:{data:null,error:new Jt(`Empty credential response`,t)}}catch(t){return{data:null,error:Yt({error:t,options:e})}}}async function on(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Jt(`Browser returned unexpected credential type`,t)}:{data:null,error:new Jt(`Empty credential response`,t)}}catch(t){return{data:null,error:Xt({error:t,options:e})}}}var sn={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},cn={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function ln(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=ln(n,a):r[e]=ln(a)}else r[e]=a}return r}function un(e,t){return ln(sn,e,t||{})}function dn(e,t){return ln(cn,e,t||{})}var fn=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??Zt.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await an({publicKey:un(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=dn(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await on(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return w(e)?{data:null,error:e}:{data:null,error:new T(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new C(`rpId is required for WebAuthn authentication`)};try{if(!rn())return{data:null,error:new T(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return w(e)?{data:null,error:e}:{data:null,error:new T(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new C(`rpId is required for WebAuthn registration`)};try{if(!rn())return{data:null,error:new T(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return w(e)?{data:null,error:e}:{data:null,error:new T(`Unexpected error in register`,e)}}}};Ut();var pn={url:Pe,storageKey:Fe,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Ie,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},K={},mn=class e{get jwks(){return K[this.storageKey]?.jwks??{keys:[]}}set jwks(e){K[this.storageKey]=Object.assign(Object.assign({},K[this.storageKey]),{jwks:e})}get jwks_cached_at(){return K[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){K[this.storageKey]=Object.assign(Object.assign({},K[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},pn),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&M()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new Bt({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=pt(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new fn(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:dt()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Vt(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Vt(this.memoryStorage)),M()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e),(e.data.event===`TOKEN_REFRESHED`||e.data.event===`SIGNED_IN`)&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${je}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))();let e=await this.initializePromise,t=this._pendingInitNotifications??[];this._pendingInitNotifications=null;for(let e of t)await this._notifyAllSubscribers(e.event,e.session,e.broadcast);return e}async _initialize(){try{let e={},t=`none`;if(M()&&(e=ft(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),M()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),We(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return w(e)?this._returnResult({error:e}):this._returnResult({error:new T(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await H(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:U});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await R(this.storage,this.storageKey)),t=await H(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:U})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await H(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:U})}else throw new k(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await I(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await H(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Pt})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await H(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Pt})}else throw new k(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new O;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!M()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Wt(l[0]),d=o?.signInWithEthereum?.chainId;d||=Gt(await s.request({method:`eth_chainId`})),t=qt({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Kt(t),u]})}try{let{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:U});if(i)throw i;if(!r||!r.session||!r.user){let e=new O;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!M()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:j(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:U});if(i)throw i;if(!r||!r.session||!r.user){let e=new O;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await F(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new Ke;let{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:U});if(await I(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new O;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await H(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:U});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new O;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await R(this.storage,this.storageKey));let{error:a}=await H(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new k(`You must provide either an email or phone number.`)}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:U});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await R(this.storage,this.storageKey));let r=await H(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:Ft});return r.data?.url&&M()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new D;let{error:r}=await H(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await R(this.storage,this.storageKey));let{error:s}=await H(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:i?.emailRedirectTo});return s&&await I(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:s})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await H(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new k(`You must provide either an email or phone number and a type`)}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await F(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<Me:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await F(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=Dt()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=Ot(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(e.expires_at&&e.expires_at*1e3>Date.now()){let t=await F(this.storage,this.storageKey);if(t&&t.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await H(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:W}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new D}:await H(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:W})})}catch(e){if(w(e))return He(e)&&(await this._removeSession(),await I(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new D;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await R(this.storage,this.storageKey));let{data:c,error:l}=await H(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:W});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new D;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=L(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(w(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new D;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!M())throw new Ue(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Ue(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new Ge(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Ue(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new Ge(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Ue(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(w(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){let t=await F(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let n=async()=>{await this._removeSession(),await I(this.storage,`${this.storageKey}-code-verifier`)},{data:r,error:i}=t;if(i&&!He(i))return this._returnResult({error:i});let a=r.session?.access_token;if(a){let{error:t}=await this.admin.signOut(a,e);if(t&&!(Ve(t)&&(t.status===404||t.status===401||t.status===403)||He(t)))return e!==`others`&&await n(),this._returnResult({error:t})}return e!==`others`&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){let t=ut(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),He(t)||Je(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await R(this.storage,this.storageKey,!0));try{return await H(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await H(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return M()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(w(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await H(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:U});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new O}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await I(this.storage,`${this.storageKey}-code-verifier`),w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await H(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await _t(async n=>(n>0&&await gt(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await H(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:U})),(e,t)=>{let r=200*2**e;return t&&Je(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),w(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),M()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await F(this.storage,this.storageKey);if(t&&this.userStorage){let e=await F(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await P(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??Dt()}else if(t&&!t.user&&!t.user){let e=await F(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await I(this.storage,this.storageKey+`-user`),await P(this.storage,this.storageKey,t)):t.user=Dt()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<Me;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${Me}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(Xe(n)?this._debug(e,`refresh discarded by commit guard`,n):this._debug(e,`refresh failed`,n))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),Je(t)?console.warn(t):console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new D;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug(`#_callRefreshToken()`,`returning cached failure (cooldown active)`),this.lastRefreshFailure.result;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new ht;let t=await F(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new D;let a=await F(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new Ye};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await I(this.storage,this.storageKey),this.userStorage&&await I(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new Ye};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,`error`,i),w(i)){let n={data:null,error:i};if(!Je(i)){let e=await F(this.storage,this.storageKey);e?.expires_at&&e.expires_at*1e3>Date.now()?this._debug(r,`proactive refresh failed, access token still valid — preserving session`):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+Ne},(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0;let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await P(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=kt(e);await P(this.storage,this.storageKey,r)}else{let e=kt(t);await P(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await I(this.storage,this.storageKey),await I(this.storage,this.storageKey+`-code-verifier`),await I(this.storage,this.storageKey+`-user`),this.userStorage&&await I(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&M()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),S);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/S);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${S}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof Ht)this._debug(`auto refresh token tick lock not available`);else throw e}return}if(this.refreshingDeferred!==null){this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/S);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${S}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!M()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await R(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await H(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await H(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?en(e.webauthn.credential_response):tn(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await H(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await H(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Qt(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:$t(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=L(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=L(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await H(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new D})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new D});let a=await H(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&M()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new D});let a=await H(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&M()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await H(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new D})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await H(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new D})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await H(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=L(n);if(!t?.allowExpired)try{wt(i.exp)}catch(e){throw new Qe(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Tt(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,ct(`${o}.${s}`)))throw new Qe(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){B(this.experimental);try{if(!rn())return this._returnResult({data:null,error:new T(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await on({publicKey:$t(t.options),signal:e?.options?.signal??Zt.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new T(`WebAuthn ceremony failed`,null)});let a=tn(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){B(this.experimental);try{if(!rn())return this._returnResult({data:null,error:new T(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await an({publicKey:Qt(t.options),signal:e?.options?.signal??Zt.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new T(`WebAuthn ceremony failed`,null)});let a=en(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){B(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new D});let{data:r,error:i}=await H(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){B(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new D});let{data:i,error:a}=await H(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){B(this.experimental);try{let{data:t,error:n}=await H(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){B(this.experimental);try{let{data:t,error:n}=await H(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:U});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){B(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new D});let{data:r,error:i}=await H(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){B(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new D});let{data:i,error:a}=await H(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){B(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new D});let{error:i}=await H(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}};mn.nextInstanceID={};var hn=`2.110.8`,q=``,gn;if(typeof Deno<`u`)q=`deno`,gn=Deno.version?.deno;else if(typeof document<`u`)q=`web`;else if(typeof navigator<`u`&&navigator.product===`ReactNative`)q=`react-native`;else{var _n;q=`node`;let e=globalThis.process;gn=e==null||(_n=e.version)==null?void 0:_n.replace(/^v/,``)}var vn=[`runtime=${q}`];gn&&vn.push(`runtime-version=${gn}`),`${hn}${vn.join(`; `)}`;function yn(e){"@babel/helpers - typeof";return yn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},yn(e)}function bn(){if(typeof window<`u`||globalThis.Deno!==void 0)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=20:!1}bn()&&console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);var J=null,xn=`impilo_community_user_session`,Sn=`impilo_community_registered_users`;function Cn(){try{let e=localStorage.getItem(Sn);return e?JSON.parse(e):[]}catch{return[]}}function wn(e){let t=Cn(),n=t.findIndex(t=>t.id===e.id||t.email===e.email);n>=0?t[n]=e:t.push(e),localStorage.setItem(Sn,JSON.stringify(t))}function Tn(e,t,n,r=`Community Member`,i=`Bulawayo, Zimbabwe`){return Math.abs(e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0))%100+1,{id:e,name:n||t.split(`@`)[0],role:r||`Community Member`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80`,location:i||`Bulawayo, Zimbabwe`,email:t,bio:`Passionate community member collaborating on sustainable local projects and social entrepreneurship.`,connections:[],registeredEvents:[],requestedMentorships:[]}}var Y={async initSession(e,t){try{let n=localStorage.getItem(xn);if(n){let r=JSON.parse(n);if(r&&r.name)return e.currentUser=r,this.syncNetworkMember(e,r),t&&t(r),r}}catch(e){console.warn(`LocalStorage session read error:`,e)}return e.currentUser},async fetchSupabaseProfile(e){try{let{data:t,error:n}=await J.from(`profiles`).select(`*`).eq(`id`,e.id).single();if(t&&!n){let[n,r,i]=await Promise.all([J.from(`network_connections`).select(`connected_id`).eq(`user_id`,e.id),J.from(`event_registrations`).select(`event_id`).eq(`user_id`,e.id),J.from(`mentorship_requests`).select(`mentor_id`).eq(`requestor_id`,e.id)]),a=n.data?n.data.map(e=>e.connected_id):[],o=r.data?r.data.map(e=>e.event_id):[],s=i.data?i.data.map(e=>e.mentor_id):[];return{id:t.id,name:t.full_name||e.email.split(`@`)[0],role:t.role||`Community Member`,avatar:t.avatar_url||`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80`,location:t.location||`Bulawayo, Zimbabwe`,email:e.email,bio:t.bio||`Passionate community member.`,connections:a,registeredEvents:o,requestedMentorships:s,interests:t.interests||[],skills:t.skills||[]}}else{let t=Tn(e.id,e.email,e.user_metadata?.full_name||``);return await J.from(`profiles`).upsert({id:e.id,full_name:t.name,role:t.role,avatar_url:t.avatar,location:t.location,bio:t.bio,email:e.email}),t}}catch{return Tn(e.id,e.email,e.user_metadata?.full_name||``)}},async signUp({email:e,password:t,fullName:n,role:r,location:i},a){if(Cn().some(t=>t.email.toLowerCase()===e.toLowerCase()))throw Error(`An account with this email already exists.`);let o=Tn(`u-${Date.now()}`,e,n,r,i);return o._password=t,wn(o),localStorage.setItem(xn,JSON.stringify(o)),a.currentUser=o,this.syncNetworkMember(a,o),o},async signIn({email:e,password:t},n){let r=Cn().find(t=>t.email.toLowerCase()===e.toLowerCase());if(!r)throw Error(`Invalid email or password. Please check your credentials or register a new account.`);if(r._password&&r._password!==t)throw Error(`Invalid password. Please try again.`);return n.currentUser=r,this.syncNetworkMember(n,r),localStorage.setItem(xn,JSON.stringify(r)),r},async signOut(e){localStorage.removeItem(xn),e.currentUser={id:`u-0`,name:`Mako Gufe`,role:`Community Member`,avatar:`./mako_avatar.jpg`,location:`Bulawayo, Zimbabwe`,email:`mako.gufe@example.com`,bio:`Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.`,connections:[`u-1`,`u-5`],registeredEvents:[`ev-2`],requestedMentorships:[]}},syncNetworkMember(e,t){t.id!==`u-0`&&(e.network.some(e=>e.id===t.id||e.email===t.email)||e.network.unshift({id:t.id,name:t.name,avatar:t.avatar,title:t.role||`Community Member`,bio:t.bio||`Active Impilo Community Member.`,location:t.location||`Bulawayo, Zimbabwe`,tags:[`Social Impact`,`Community`,`Innovation`]}))}},X={currentUser:{...e},discussions:[...n],mentors:[...r],resources:[...i],events:[...a],network:[...o],activities:[...s]};async function En(){X.currentUser&&X.currentUser.id}function Z(e){let t=document.getElementById(`toast-msg`),n=document.getElementById(`toast-text`);n.textContent=e,t.classList.add(`active`),setTimeout(()=>{t.classList.remove(`active`)},3e3)}function Dn(e=`login`){let t=document.getElementById(`modal-overlay`),n=document.getElementById(`modal-content`),r=e;function i(){n.innerHTML=`
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
        <button id="tab-login" class="secondary-btn" style="flex: 1; justify-content: center; ${r===`login`?`background: rgba(255, 191, 0, 0.12); color: var(--color-primary); border-color: var(--color-primary); font-weight: 700;`:``}">
          Log In
        </button>
        <button id="tab-register" class="secondary-btn" style="flex: 1; justify-content: center; ${r===`register`?`background: rgba(255, 191, 0, 0.12); color: var(--color-primary); border-color: var(--color-primary); font-weight: 700;`:``}">
          Create Account
        </button>
      </div>

      <!-- Auth Error Notification -->
      <div id="auth-error" style="display: none; padding: 10px 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; border-radius: var(--border-radius-sm); font-size: 13px; margin-bottom: 15px;"></div>

      ${r===`login`?`
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
      `:`
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
    `,document.getElementById(`modal-auth-close`).addEventListener(`click`,()=>{t.classList.remove(`active`)}),document.getElementById(`tab-login`).addEventListener(`click`,()=>{r=`login`,i()}),document.getElementById(`tab-register`).addEventListener(`click`,()=>{r=`register`,i()});let e=document.getElementById(`auth-error`);r===`login`?document.getElementById(`form-auth-login`).addEventListener(`submit`,async n=>{n.preventDefault();let r=document.getElementById(`btn-auth-submit`),i=document.getElementById(`auth-email`).value.trim(),a=document.getElementById(`auth-password`).value;e.style.display=`none`,r.disabled=!0,r.innerHTML=`<span class="spinner" style="width: 16px; height: 16px; border-width: 2px;"></span> Logging in...`;try{let e=await Y.signIn({email:i,password:a},X);t.classList.remove(`active`),Z(`Welcome back, ${e.name}! 👋`),Q(),$()}catch(t){e.textContent=t.message||`Failed to log in.`,e.style.display=`block`,r.disabled=!1,r.innerHTML=`Log In`}}):document.getElementById(`form-auth-register`).addEventListener(`submit`,async n=>{n.preventDefault();let r=document.getElementById(`btn-auth-submit`),i=document.getElementById(`reg-name`).value.trim(),a=document.getElementById(`reg-email`).value.trim(),o=document.getElementById(`reg-password`).value,s=document.getElementById(`reg-role`).value,c=document.getElementById(`reg-location`).value.trim();e.style.display=`none`,r.disabled=!0,r.innerHTML=`<span class="spinner" style="width: 16px; height: 16px; border-width: 2px;"></span> Registering...`;try{let e=await Y.signUp({email:a,password:o,fullName:i,role:s,location:c},X);t.classList.remove(`active`),Z(`Account created! Welcome, ${e.name}! 🎉`),Q(),$()}catch(t){e.textContent=t.message||`Failed to register account.`,e.style.display=`block`,r.disabled=!1,r.innerHTML=`Register Account`}})}i(),t.classList.add(`active`)}var On={showToast:Z,openAuthModal:Dn,signOut:async()=>{await Y.signOut(X),Z(`Logged out successfully.`),Q(),$()},addDiscussion:async(e,t,n)=>{X.currentUser&&X.currentUser.id;let r={id:`disc-${X.discussions.length+1}`,title:e,author:{name:X.currentUser.name,avatar:X.currentUser.avatar,role:X.currentUser.role},category:n,content:t,timestamp:new Date().toISOString(),likes:0,hasLiked:!1,replies:[]};X.discussions.unshift(r),X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`started a discussion thread`,target:e,timestamp:new Date().toISOString(),link:`#/discussions?id=${r.id}`}),$()},addReply:async(e,t)=>{X.currentUser&&X.currentUser.id;let n=X.discussions.find(t=>t.id===e);n&&(n.replies.push({id:`rep-${e}-${n.replies.length+1}`,author:{name:X.currentUser.name,avatar:X.currentUser.avatar,role:X.currentUser.role},content:t,timestamp:new Date().toISOString()}),X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`replied to discussion`,target:n.title,timestamp:new Date().toISOString(),link:`#/discussions?id=${e}`}),$())},toggleLike:async e=>{let t=X.discussions.find(t=>t.id===e);t&&(X.currentUser&&X.currentUser.id,t.hasLiked?(t.likes=Math.max(0,t.likes-1),t.hasLiked=!1):(t.likes+=1,t.hasLiked=!0,X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`liked the discussion thread`,target:t.title,timestamp:new Date().toISOString(),link:`#/discussions?id=${e}`})),$())},logResourceInteraction:async e=>{let t=X.resources.find(t=>t.id===e);t&&(X.currentUser&&X.currentUser.id,X.activities[0]&&X.activities[0].user===X.currentUser.name&&X.activities[0].action===`explored training resource`&&X.activities[0].target===t.title||(X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`explored training resource`,target:t.title,timestamp:new Date().toISOString(),link:`#/resources`}),$()))},logGrowthExploration:async()=>{X.currentUser&&X.currentUser.id,X.activities[0]&&X.activities[0].user===X.currentUser.name&&X.activities[0].action===`explored the Growth & Impact opportunities`||(X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`explored the Growth & Impact opportunities`,target:`Growth & Impact Hub`,timestamp:new Date().toISOString(),link:`#/growth`}),$())},requestMentorship:async e=>{if(X.currentUser&&X.currentUser.id,!X.currentUser.requestedMentorships.includes(e)){X.currentUser.requestedMentorships.push(e);let t=X.mentors.find(t=>t.id===e);X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`requested mentorship match with`,target:t?t.name:`a mentor`,timestamp:new Date().toISOString(),link:`#/mentorship`}),$()}},registerEvent:async e=>{if(X.currentUser&&X.currentUser.id,!X.currentUser.registeredEvents.includes(e)){X.currentUser.registeredEvents.push(e);let t=X.events.find(t=>t.id===e);t&&(t.attendees+=1,X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`registered to attend`,target:t.title,timestamp:new Date().toISOString(),link:`#/events`})),$()}},toggleConnection:async(e,t)=>{if(X.currentUser&&X.currentUser.id,t){if(!X.currentUser.connections.includes(e)){X.currentUser.connections.push(e);let t=X.network.find(t=>t.id===e);X.activities.unshift({id:`act-${X.activities.length+1}`,user:X.currentUser.name,action:`connected with network member`,target:t?t.name:`a member`,timestamp:new Date().toISOString(),link:`#/network`})}}else X.currentUser.connections=X.currentUser.connections.filter(t=>t!==e);$()}};function Q(){let e=document.getElementById(`sidebar-profile`),t=X.currentUser.id===`u-0`;e.innerHTML=`
    <img src="${X.currentUser.avatar}" alt="${X.currentUser.name}" class="profile-avatar" style="cursor: pointer;" id="sidebar-avatar-click">
    <div class="profile-info">
      <div class="profile-name" style="cursor: pointer;" id="sidebar-name-click">${X.currentUser.name}</div>
      <div class="profile-role">${X.currentUser.role}</div>
      <div style="display: flex; gap: 4px; margin-top: 6px; flex-direction: column;">
        <button class="primary-btn" id="sidebar-btn-view-profile" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; background-color: var(--color-primary); color: #050811; border: none; border-radius: var(--border-radius-sm); cursor: pointer;">
          View Profile
        </button>
        ${t?`
          <button class="secondary-btn" id="sidebar-btn-login" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; border-color: rgba(255, 191, 0, 0.4); color: var(--color-primary); border-radius: var(--border-radius-sm); cursor: pointer;">
            <i class="lucide-log-in"></i> Log In / Register
          </button>
        `:`
          <button class="secondary-btn" id="sidebar-btn-logout" style="font-size: 10px; padding: 5px 8px; font-weight: 700; width: 100%; justify-content: center; border-color: rgba(239, 68, 68, 0.4); color: #f87171; border-radius: var(--border-radius-sm); cursor: pointer;">
            <i class="lucide-log-out"></i> Log Out
          </button>
        `}
      </div>
    </div>
  `;let n=document.getElementById(`header-auth-text`);n&&(n.textContent=t?`Account`:X.currentUser.name.split(` `)[0]);let r=()=>{window.location.hash=`#/profile?id=currentUser`};if(document.getElementById(`sidebar-btn-view-profile`).addEventListener(`click`,r),document.getElementById(`sidebar-avatar-click`).addEventListener(`click`,r),document.getElementById(`sidebar-name-click`).addEventListener(`click`,r),t){let e=document.getElementById(`sidebar-btn-login`);e&&e.addEventListener(`click`,()=>Dn(`login`))}else{let e=document.getElementById(`sidebar-btn-logout`);e&&e.addEventListener(`click`,async()=>{await Y.signOut(X),Z(`Logged out successfully.`),Q(),$()})}}var kn={"#/dashboard":{render:c,title:`Dashboard`},"#/discussions":{render:l,title:`Discussions Hub`},"#/mentorship":{render:u,title:`Mentorship Board`},"#/resources":{render:d,title:`Learning Resources`},"#/events":{render:f,title:`Upcoming Events`},"#/network":{render:p,title:`Community Network`},"#/profile":{render:m,title:`Member Profile`},"#/growth":{render:h,title:`Growth & Impact Hub`}};function $(){let e=(window.location.hash||`#/dashboard`).split(`?`)[0],t=kn[e]||kn[`#/dashboard`];document.querySelectorAll(`.sidebar-menu .menu-item`).forEach(t=>{t.querySelector(`a`).getAttribute(`href`).split(`?`)[0]===e?t.classList.add(`active`):t.classList.remove(`active`)}),document.getElementById(`page-title`).textContent=t.title;let n=document.getElementById(`content-view`);n.style.opacity=`0`,setTimeout(()=>{t.render(n,X,On),n.style.opacity=`1`},100),document.getElementById(`sidebar`).classList.remove(`mobile-open`)}function An(){let e=document.getElementById(`menu-toggle`),t=document.getElementById(`sidebar`);e.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.toggle(`mobile-open`)});let n=document.getElementById(`header-auth-btn`);n&&n.addEventListener(`click`,()=>{X.currentUser.id===`u-0`?Dn(`login`):window.location.hash=`#/profile?id=currentUser`}),document.querySelector(`.main-panel`).addEventListener(`click`,()=>{t.classList.remove(`mobile-open`)}),document.getElementById(`notification-bell`).addEventListener(`click`,()=>{Z(`You are up to date! No new notifications.`)});let r=document.getElementById(`global-search-input`);r.addEventListener(`keypress`,e=>{if(e.key===`Enter`){let e=r.value.trim();e&&(window.location.hash=`#/discussions?search=${encodeURIComponent(e)}`,r.value=``)}}),window.addEventListener(`hashchange`,$),window.addEventListener(`load`,$)}async function jn(){await Y.initSession(X,async e=>{await En(),Q(),$()}),await En(),Q(),An(),$()}jn();