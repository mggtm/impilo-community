// Realistic mock data for the Impilo Community platform

export const currentUser = {
  id: 'u-0',
  name: 'Mako Gufe',
  role: 'Community Member',
  avatar: '/mako_avatar.jpg',
  location: 'Bulawayo, Zimbabwe',
  email: 'mako.gufe@example.com',
  bio: 'Passionate about leveraging technology and entrepreneurship to create sustainable social impact in local communities.',
  connections: ['u-1', 'u-5'],
  registeredEvents: ['ev-2'],
  requestedMentorships: []
};

export const stats = {
  totalMembers: 1248,
  activeDiscussions: 84,
  mentorsOnline: 18,
  upcomingEventsCount: 5
};

export const initialDiscussions = [
  {
    id: 'disc-1',
    title: 'How to secure seed funding for a social enterprise in SA?',
    author: {
      name: 'Naledi Dlamini',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
      role: 'Entrepreneur'
    },
    category: 'Empowerment',
    content: 'Hi everyone! I am working on a mobile clinic solution for rural communities but finding it difficult to secure initial seed funding. Most venture capitals seem to target purely commercial tech startups. Are there specific grants or impact investment funds that support early-stage social impact innovations? Any leads or tips would be greatly appreciated!',
    timestamp: '2026-07-21T14:30:00Z',
    likes: 24,
    hasLiked: false,
    replies: [
      {
        id: 'rep-1-1',
        author: {
          name: 'Albert Mensah',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
          role: 'Business Mentor'
        },
        content: 'Hi Naledi, you should look into SAB Foundation Social Innovation Awards and the Technology Innovation Agency (TIA) grassroots innovation programs. They are highly geared towards impact business models. Good luck!',
        timestamp: '2026-07-21T16:15:00Z'
      },
      {
        id: 'rep-1-2',
        author: {
          name: 'Zanele Khumalo',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
          role: 'Innovator'
        },
        content: 'I went through the TIA program last year. I can share some tips on writing the application proposal if you would like to connect!',
        timestamp: '2026-07-22T09:00:00Z'
      }
    ]
  },
  {
    id: 'disc-2',
    title: 'Introducing Python programming for beginners: Group study session?',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80',
      role: 'Software Developer'
    },
    category: 'Technology',
    content: 'Hey community! I am thinking of setting up a weekly virtual study session where we go through basic Python syntax, data structures, and build some fun automation scripts together. No prior coding experience required. Would anyone be interested? We can host it on Zoom every Saturday afternoon.',
    timestamp: '2026-07-22T10:15:00Z',
    likes: 42,
    hasLiked: false,
    replies: [
      {
        id: 'rep-2-1',
        author: {
          name: 'Mako Gufe',
          avatar: '/mako_avatar.jpg',
          role: 'Community Member'
        },
        content: 'Count me in! I really need to learn Python for a data analysis project I am starting next semester.',
        timestamp: '2026-07-22T11:30:00Z'
      }
    ]
  },
  {
    id: 'disc-3',
    title: 'Mental Health in Startup Teams: Breaking the Stigma',
    author: {
      name: 'Lerato Phiri',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80',
      role: 'Wellness Advocate'
    },
    category: 'Social Impact',
    content: 'Running a startup or initiating community projects can be extremely stressful and isolating. Let\'s use this thread to talk about coping mechanisms, work-life balance, and how we can support our team members. What do you do to prevent burnout?',
    timestamp: '2026-07-20T08:00:00Z',
    likes: 18,
    hasLiked: false,
    replies: []
  },
  {
    id: 'disc-4',
    title: 'Announcing Township Agri-Tech pilot projects for 2026',
    author: {
      name: 'Zanele Khumalo',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
      role: 'Innovator'
    },
    category: 'Innovation',
    content: 'We are officially launching the Agri-Tech pilot program in Nelspruit next month! Looking for 3 local youth-led co-ops to test our automated solar greenhouses. Fully sponsored by Enactus partnership. Apply before the end of this week!',
    timestamp: '2026-07-22T14:00:00Z',
    likes: 31,
    hasLiked: false,
    replies: []
  }
];

export const initialMentors = [
  {
    id: 'men-1',
    name: 'Albert Mensah',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    title: 'Business Advisor & Incubator Lead',
    expertise: 'Business Strategy',
    tags: ['Startups', 'Pitching', 'Financial Modeling', 'Social Impact'],
    bio: 'Over 12 years of experience helping early-stage social entrepreneurs design sustainable business models and pitch to international investors.',
    location: 'Johannesburg, GP',
    available: true,
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'men-2',
    name: 'Dr. Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80',
    title: 'Public Health Consultant',
    expertise: 'Health & Wellness',
    tags: ['Community Health', 'Epidemiology', 'Healthcare Policy'],
    bio: 'Epidemiologist and health tech advocate. Advises grassroots health organizations on diagnostic tech deployment and field operations.',
    location: 'Cape Town, WC',
    available: true,
    rating: 4.8,
    reviewsCount: 22
  },
  {
    id: 'men-3',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80',
    title: 'Senior Solutions Architect',
    expertise: 'Software Development',
    tags: ['Web Apps', 'Cloud Architecture', 'Python', 'React', 'APIs'],
    bio: 'Software engineer who loves teaching. Can help you structure your database, choose your tech stack, and learn programming best practices.',
    location: 'Durban, KZN',
    available: false,
    rating: 5.0,
    reviewsCount: 15
  },
  {
    id: 'men-4',
    name: 'Thabo Mokoena',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    title: 'Product Design Lead',
    expertise: 'Product Design',
    tags: ['UI/UX', 'Wireframing', 'User Research', 'Figma'],
    bio: 'Helping startups create intuitive digital products. Expert in conducting usability tests and building high-fidelity design systems.',
    location: 'Pretoria, GP',
    available: true,
    rating: 4.7,
    reviewsCount: 29
  }
];

export const initialResources = [
  {
    id: 'res-1',
    title: 'Introduction to Social Entrepreneurship',
    category: 'Entrepreneurship',
    type: 'Course',
    duration: '4 Weeks (2 hrs/week)',
    rating: 4.8,
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
    description: 'Learn the fundamentals of creating a mission-driven business. This course covers social impact metrics, theories of change, and dual-purpose revenue generation structures.',
    syllabus: [
      'Module 1: Defining Social Entrepreneurship & Mindset',
      'Module 2: Building your Theory of Change',
      'Module 3: Funding Options: Grants vs. Venture Philanthropy',
      'Module 4: Practical SA Case Studies & Regulations'
    ]
  },
  {
    id: 'res-2',
    title: 'Fundamentals of Web Development (HTML, CSS & JS)',
    category: 'Technology',
    type: 'Course',
    duration: '6 Weeks (5 hrs/week)',
    rating: 4.9,
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=400&q=80',
    description: 'A comprehensive, practical guide to web programming. Build responsive websites from scratch and deploy them using modern version control practices.',
    syllabus: [
      'Module 1: Semantic HTML & Document Object Model (DOM)',
      'Module 2: Advanced CSS Layouts (Flexbox, Grid & Responsive)',
      'Module 3: JavaScript Variables, Loops, and Functions',
      'Module 4: DOM Manipulation & Event Handling',
      'Module 5: Fetching Data from REST APIs',
      'Module 6: Final Capstone Project & Deployment'
    ]
  },
  {
    id: 'res-3',
    title: 'Effective Pitching & Slide Deck Template',
    category: 'Entrepreneurship',
    type: 'Template',
    duration: '15 min read',
    rating: 4.7,
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
    description: 'A standard 10-slide pitch presentation framework used by successful startups to secure funding. Includes actionable tips for each slide section.',
    syllabus: [
      'Problem & Solution definition',
      'Market Size & Opportunity metrics',
      'Product / Service demonstration guidelines',
      'Financial Projection formatting'
    ]
  },
  {
    id: 'res-4',
    title: 'UI/UX Mobile Design Best Practices',
    category: 'Design',
    type: 'Article',
    duration: '20 min read',
    rating: 4.6,
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    description: 'Explore standard mobile layout grids, accessibility standards (WCAG), interactive button sizing rules, and gesture-friendly user interface patterns.',
    syllabus: [
      'Mobile layouts, scaling, and tap-target sizes',
      'Color contrasts and typographic scale guidelines',
      'Standard interactive feedback and micro-interactions'
    ]
  }
];

export const initialEvents = [
  {
    id: 'ev-1',
    title: 'Impilo Youth Hackathon 2026: Health & Tech Info Session',
    date: '2026-08-05',
    time: '14:00 - 15:30 (CAT)',
    location: 'Virtual via Zoom',
    category: 'Hackathon',
    attendees: 124,
    description: 'Curious about the upcoming Hackathon? Join the coordinators as we break down the tracks (Mental Health, Civic Education, Wellness Access), eligibility criteria, judging guidelines, and how to pitch your ideas. Team formation sessions will run at the end.',
    speaker: 'Impilo Organising Committee'
  },
  {
    id: 'ev-2',
    title: 'Workshop: Social Business Model Canvas Masterclass',
    date: '2026-07-28',
    time: '10:00 - 12:30 (CAT)',
    location: 'Impilo Hub, Braamfontein & Streamed Online',
    category: 'Workshop',
    attendees: 48,
    description: 'A hands-on, intensive session designed to map out your startup ideas. We will run through the nine blocks of the canvas, specifically focusing on beneficiaries vs. customers, and measuring positive community outcomes.',
    speaker: 'Albert Mensah'
  },
  {
    id: 'ev-3',
    title: 'Fireside Chat: Innovation in Healthcare Solutions',
    date: '2026-08-12',
    time: '17:30 - 19:00 (CAT)',
    location: 'Virtual via Zoom',
    category: 'Networking',
    attendees: 89,
    description: 'An informal panel conversation with leading African medical-tech innovators sharing their hurdles, breakthroughs, and forecasts for community-driven health infrastructure over the next decade.',
    speaker: 'Dr. Sarah Jenkins + Guests'
  }
];

export const initialNetwork = [
  {
    id: 'net-1',
    name: 'Zanele Khumalo',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    type: 'Innovator',
    role: 'Founder of EduSpark SA',
    tags: ['EdTech', 'Gamified Learning', 'Youth Empowerment'],
    bio: 'Building off-grid educational gaming boxes for rural school kids.',
    location: 'Polokwane, LP'
  },
  {
    id: 'net-2',
    name: 'Kgotso Sekhute',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    type: 'Entrepreneur',
    role: 'Co-Founder of BioGreens',
    tags: ['AgriTech', 'Circular Economy', 'Sustainability'],
    bio: 'Converting food scraps into affordable organic fertilizer for smallholder farms.',
    location: 'Nelspruit, MP'
  },
  {
    id: 'net-3',
    name: 'Vuka Africa NGO',
    avatar: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=150&h=150&q=80',
    type: 'Organisation',
    role: 'Community Development NPO',
    tags: ['Youth Development', 'Skills Training', 'Funding Programs'],
    bio: 'Empowering townships through accessible digital literacy hubs and vocational support.',
    location: 'Soweto, GP'
  },
  {
    id: 'net-4',
    name: 'Albert Mensah',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    type: 'Mentor',
    role: 'Incubator Lead & Coach',
    tags: ['Pitching', 'Business Plan', 'Social Impact'],
    bio: 'Helps young creators outline, validate, and launch their social ventures.',
    location: 'Johannesburg, GP'
  },
  {
    id: 'net-5',
    name: 'Impilo Innovation Hub',
    avatar: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=150&h=150&q=80',
    type: 'Organisation',
    role: 'Technology Incubator & Maker Space',
    tags: ['Hardware Lab', 'Mentorship', 'Co-Working'],
    bio: 'Providing tools, internet access, and collaborative spaces for early stage innovators.',
    location: 'Braamfontein, GP'
  }
];

export const initialActivities = [
  {
    id: 'act-1',
    user: 'Naledi Dlamini',
    action: 'created a discussion thread',
    target: 'How to secure seed funding for a social enterprise in SA?',
    timestamp: '2026-07-21T14:30:00Z',
    link: '#/discussions'
  },
  {
    id: 'act-2',
    user: 'Albert Mensah',
    action: 'replied to Naledi\'s post',
    target: 'Suggesting SAB Foundation and TIA',
    timestamp: '2026-07-21T16:15:00Z',
    link: '#/discussions'
  },
  {
    id: 'act-3',
    user: 'Michael Chen',
    action: 'posted a new event/study session',
    target: 'Python Programming Study Session',
    timestamp: '2026-07-22T10:15:00Z',
    link: '#/discussions'
  },
  {
    id: 'act-4',
    user: 'Zanele Khumalo',
    action: 'joined the Impilo Community Network',
    target: 'as an Innovator',
    timestamp: '2026-07-22T08:00:00Z',
    link: '#/network'
  }
];
