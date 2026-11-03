

const defaultSportImage =
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85";

export const sports = [
  {
    name: "Cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Master batting, bowling and fielding with expert coaching.",
    category: "Team Sport",
  },
  {
    name: "Football",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Build speed, teamwork and confidence on the football field.",
    category: "Team Sport",
  },
  {
    name: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Improve your shooting, footwork and court awareness.",
    category: "Team Sport",
  },
  {
    name: "Badminton",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Develop lightning-fast reactions and powerful rallies.",
    category: "Racket Sport",
  },
  {
    name: "Tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Learn precision, technique and competitive match play.",
    category: "Racket Sport",
  },
  {
    name: "Volleyball",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Build coordination, communication and team spirit.",
    category: "Team Sport",
  },
  {
    name: "Table Tennis",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Sharpen your reflexes, control and match strategy.",
    category: "Racket Sport",
  },
  {
    name: "Swimming",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Improve endurance, technique and water confidence.",
    category: "Fitness Sport",
  },
  {
    name: "Athletics",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Develop speed, strength and endurance through training.",
    category: "Individual Sport",
  },
  {
    name: "Boxing Fitness",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: defaultSportImage,
    description: "Build strength, stamina and discipline with guided sessions.",
    category: "Fitness Sport",
  },
];

// ==========================================
// MEMBERSHIP PLANS
// ==========================================

export const plans = [
  {
    name: "Starter",
    price: "₹999",
    description: "Your journey starts here",
    features: [
      "Access to 1 selected sport",
      "2 coached sessions per week",
      "Member community access",
      "Monthly progress check-in",
      "Basic fitness assessment",
    ],
  },
  {
    name: "All Access",
    price: "₹1,799",
    description: "For people who love every game",
    featured: true,
    features: [
      "Access to all 10 sports",
      "Unlimited group sessions",
      "Priority event registration",
      "Quarterly fitness assessment",
      "Exclusive member activities",
    ],
  },
  {
    name: "Performance",
    price: "₹2,999",
    description: "Train harder and get stronger",
    features: [
      "Everything in All Access",
      "4 personal coaching sessions",
      "Custom training plan",
      "Competition support",
      "Monthly performance review",
    ],
  },
  {
    name: "Elite",
    price: "₹4,499",
    description: "A premium training experience",
    features: [
      "Everything in Performance",
      "8 personal coaching sessions",
      "Dedicated fitness mentor",
      "Personal development roadmap",
      "Priority tournament entry",
      "Advanced performance tracking",
    ],
  },
];

// ==========================================
// COACHING TEAM
// ==========================================

export const coaches = [
  {
    name: "Arjun Menon",
    role: "Head Coach · Cricket",
    experience: "12 years experience",
    initials: "AM",
  },
  {
    name: "Priya Nair",
    role: "Senior Coach · Badminton",
    experience: "9 years experience",
    initials: "PN",
  },
  {
    name: "Rahul Das",
    role: "Performance Coach · Football",
    experience: "10 years experience",
    initials: "RD",
  },
  {
    name: "Vikram Sharma",
    role: "Basketball Coach",
    experience: "8 years experience",
    initials: "VS",
  },
  {
    name: "Ananya Rao",
    role: "Tennis Coach",
    experience: "7 years experience",
    initials: "AR",
  },
  {
    name: "Karthik Iyer",
    role: "Fitness & Athletics Coach",
    experience: "11 years experience",
    initials: "KI",
  },
];

// ==========================================
// CLUB EVENTS & TOURNAMENTS
// ==========================================

export const events = [
  {
    day: "08",
    month: "NOV 2026",
    name: "STRIDE Volleyball Championship",
    description: "Team registration · Mixed teams · 8:00 AM",
    category: "Volleyball",
  },
  {
    day: "16",
    month: "NOV 2026",
    name: "STRIDE 5-a-side Football Cup",
    description: "Team registration · All skill levels · 8:00 AM",
    category: "Football",
  },
  {
    day: "22",
    month: "NOV 2026",
    name: "Rally Point Badminton Open",
    description: "Singles and doubles · Beginner and open categories",
    category: "Badminton",
  },
  {
    day: "29",
    month: "NOV 2026",
    name: "STRIDE Basketball Showdown",
    description: "3-on-3 tournament · Team registration · 9:00 AM",
    category: "Basketball",
  },
  {
    day: "06",
    month: "DEC 2026",
    name: "Community Cricket League",
    description: "10-over format · Mixed teams · 7:30 AM",
    category: "Cricket",
  },
  {
    day: "12",
    month: "DEC 2026",
    name: "STRIDE Swimming Challenge",
    description: "Multiple age groups · Freestyle events · 8:00 AM",
    category: "Swimming",
  },
  {
    day: "20",
    month: "DEC 2026",
    name: "Winter Tennis Open",
    description: "Singles tournament · All skill levels · 7:00 AM",
    category: "Tennis",
  },
  {
    day: "27",
    month: "DEC 2026",
    name: "STRIDE Fitness Challenge",
    description: "Strength, endurance and team challenges · 6:30 AM",
    category: "Fitness",
  },
];
