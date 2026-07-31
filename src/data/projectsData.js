import travelAgencyImg from "../assets/projects/travel-agency.png";
import gymMembershipImg from "../assets/projects/gym-membership.png";

export const PROJECTS_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React' },
];

export const PROJECTS_LIST = [
  {
  id: 'travel-agency',
  title: 'Travel Agency Website',
  image: travelAgencyImg,
  category: ['frontend', 'react'],
  categoryLabel: 'Frontend Project',
  layoutMode: 'large',
  featured: true,
  devTime: 'May 2026',
  role: 'Frontend Developer(Personal Project)',

  description:
    'A premium and responsive Travel Agency Website built using React, JavaScript, HTML, CSS and Tailwind CSS. It features a modern UI, smooth animations, and a fully responsive design.',

  keyFeatures: [
    'Responsive design for all devices',
    'Modern React component architecture',
    'Smooth UI with Tailwind CSS',
    'Interactive destinations and booking sections',
  ],

  stack: [
    'React',
    'JavaScript',
    'HTML5',
    'CSS',
    'Tailwind CSS'
  ],

  demoUrl: 'https://luxury-travel-vynt.vercel.app',

  githubUrl: 'https://luxury-travel-vynt.vercel.app',

  previewGradient: 'from-sky-900 via-blue-900 to-indigo-900',

  accentColor: '#2563EB',

  stats: [
    { label: 'Project', value: 'Frontend' },
    { label: 'Status', value: 'Completed' },
    { label: 'Responsive', value: '100%' },
  ]
},
  {
    id: 'gym-membership',
    title: 'Gym Membership Landing Page',
    image: gymMembershipImg,
    category: ['Frontend'],
    categoryLabel: 'frontend',
    layoutMode: 'medium',
    featured: true,
    devTime: '1 Weeks',
    role: 'Frontend Developer',
    description: 'A modern and responsive Gym Membership Landing Page built using HTML, CSS and JavaScript. The website includes a hero section, membership plans, trainer section, testimonials and contact section with a clean user interface.',
    keyFeatures: [
      'Responsive Design',
      'Membership Pricing Section',
      'Modern UI & Smooth Layout'
    ],
    stack: ['HTML5', 'CSS3', 'Tailwind CSS'],
    demoUrl: 'https://parv89.github.io/Landing-Page/',
    githubUrl: 'https://github.com/Parv89/Landing-Page',
    previewGradient: 'from-slate-900 via-purple-950 to-indigo-950',
    accentColor: '#8B5CF6',
    stats: [
      { label: 'Project', value: 'Frontend' },
      { label: 'Status', value: 'Completed' },
      { label: 'Responsive', value: '100%' },
    ]
  },
  {
    id: 'portfolio-website',
  title: 'Personal Portfolio Website',
  category: ['frontend', 'react'],
  categoryLabel: 'Portfolio',
  layoutMode: 'compact',
  featured: false,
  devTime: 'In Progress',
  role: 'Frontend Developer',

  description:
    'A modern personal portfolio showcasing my projects, skills, learning journey and frontend development experience. Currently under development.',

  keyFeatures: [
    'Responsive Design',
    'React & Tailwind CSS',
    'Smooth Animations',
    'Coming Soon'
  ],

  stack: [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Framer Motion'
  ],

  demoUrl: '#',
  githubUrl: '#',

  previewGradient: 'from-indigo-900 via-slate-900 to-purple-900',

  accentColor: '#4F46E5',

  stats: [
    { label: 'Status', value: 'Coming Soon' },
    { label: 'Progress', value: '80%' },
  ]
  },
];
