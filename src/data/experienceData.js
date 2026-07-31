import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  BookOpen, 
  Sparkles,
  ShieldCheck,
  Zap,
  Layout,
  Cpu,
  Brain,
  Star,
  Award,
  FolderCheck,
  Github,
  Clock
} from 'lucide-react';

export const TIMELINE_JOURNEY = [
  {
    year: 'Present',
    type: 'Career Goal',
    title: 'Frontend Developer(Fresher)',
    organization: 'Actively Looking for Internship',
    description: 'Building production-ready React projects, strengthening frontend fundamentals and continuously learning modern web technologies to start my software engineering career.',
    icon: Sparkles,
    badge: 'Open to Work',
    accentColor: '#4F46E5',
    highlights: ['React', 'Learning', 'Internship'],
  },
  {
    year: '2024 - Present',
    type: 'Education',
    title: 'Bachelor of Technology (B.Tech.)',
    organization: 'SAGE University, Indore',
    description: 'Currently pursuing Bachelor of Engineering in Computer & Information Technology while learning modern web development.',
    icon: Briefcase,
    badge: 'B.Tech',
    accentColor: '#3B82F6',
    highlights: ['2024-2028', 'Computer & IT', 'Current'],
  },
  {
    year: '2024',
    type: 'School',
    title: 'Higher Secondary Education (Class 12)',
    organization: 'Catalyst World School',
    description: 'Completed Class 12 and decided to pursue a career in Computer & Information Technology.',
    icon: Code2,
    badge: 'Class 12',
    accentColor: '#C8A96A',
    highlights: ['2024', 'Science', 'Higher Secondary'],
  },
  {
    year: '2022',
    type: 'School',
    title: 'Secondary Education (Class 10)',
    organization: 'Catalyst World School',
    description: 'Successfully completed Class 10 and developed a strong interest in computers and technology.',
    icon: GraduationCap,
    badge: 'Class 10',
    accentColor: '#10B981',
    highlights: ['2022', 'School', 'Foundation'],
  },
];

export const WHY_HIRE_ME_CARDS = [
  {
    title: 'Strong Frontend Foundation',
    description:
      'Good understanding of HTML5, CSS3 and JavaScript with the ability to build clean, semantic and responsive web pages.',
    icon: Code2,
    badge: 'Frontend',
    gradient: 'from-indigo-500 via-indigo-600 to-accent',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Building responsive websites using Tailwind CSS and modern layout techniques that work across mobile, tablet and desktop devices.',
    icon: Layout,
    badge: 'Responsive',
    gradient: 'from-blue-500 via-sky-500 to-cyan-400',
  },
  {
    title: 'React Development',
    description:
      'Creating reusable React components, managing state with Hooks and developing modern frontend applications.',
    icon: Sparkles,
    badge: 'React',
    gradient: 'from-amber-500 via-gold to-yellow-400',
  },
  {
    title: 'Quick Learner',
    description:
      'Continuously improving my skills by building projects and learning new technologies like Python, Node.js, Express.js and MongoDB.',
    icon: Zap,
    badge: 'Learning',
    gradient: 'from-emerald-500 via-teal-500 to-green-400',
  },
  {
    title: 'Problem Solving',
    description:
      'Enjoy solving coding challenges, debugging issues and writing clean, maintainable frontend code.',
    icon: Brain,
    badge: 'Growth',
    gradient: 'from-purple-500 via-indigo-500 to-accent',
  },
  {
    title: 'Career Focus',
    description:
      'Currently seeking a Frontend Developer Internship where I can contribute, learn from experienced developers and grow professionally.',
    icon: BookOpen,
    badge: 'Available',
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
  },
];

export const ACHIEVEMENTS_METRICS = [
  {
    number: 10,
    suffix: '+',
    label: 'Project Built',
    subtitle: 'React, HTML, CSS & JavaScript',
    icon: FolderCheck,
    color: '#4F46E5',
  },
  {
    number: 6,
    suffix: '+',
    label: 'Technologies Used',
    subtitle: 'HTML, CSS, JS, React, Tailwind, Git',
    icon: Cpu,
    color: '#C8A96A',
  },
  {
    number: 1,
    suffix: '',
    label: 'Portfolio Website',
    subtitle: 'Designed & Developed',
    icon: Github,
    color: '#10B981',
  },
  {
    number: 2024,
    suffix: '',
    label: 'Started B.Tech',
    subtitle: 'SAGE University, Indore',
    icon: Award,
    color: '#8B5CF6',
  },
  {
    number: 100,
    suffix: '%',
    label: 'Learning Mindset',
    subtitle: 'Always Improving Every Day',
    icon: Clock,
    color: '#06B6D4',
  },
];

export const LEARNING_JOURNEY = [
  {
    id: 1,
    year: "2024",
    title: "Started Web Development",
    description:"Learned HTML5, CSS3 and JavaScript while creating responsive webpages and understanding frontend fundamentals.",
    badge:"Foundation",
    icon: BookOpen,
  },
  {
    id: 2,
    year: "2025",
    title: "Modern React Development",
    description:
      "Built reusable React components, learned Hooks, Tailwind CSS and created responsive frontend projects with clean UI.",
    badge: "React",
    icon: Code2,
  },
  {
    id: 3,
    year: "Present",
    title: "Internship Ready",
    description:
      "Building production-ready projects, improving Git & GitHub workflow and learning Node.js, Express.js and MongoDB while preparing for frontend roles.",
    badge: "Open to Work",
    icon: Sparkles,
  },
];