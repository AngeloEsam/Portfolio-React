import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Education,
  Certification,
  Achievement,
  SuggestedQuestion,
} from '@/types';
import avatarImg from '@/assets/1720702649556.jpg';

// ==================== Personal Info ====================
export const personalInfo: PersonalInfo = {
  name: 'Angelo',
  title: 'Full Stack Developer',
  tagline: 'Building scalable web solutions with modern technologies',
  avatar: avatarImg,
  summary:
    'Passionate Full Stack Developer with expertise in Node.js, React, and cloud technologies. I craft high-performance, scalable applications that deliver exceptional user experiences. Driven by clean code principles and a love for solving complex problems.',
  cvUrl: '',
  contact: {
    email: 'angloesam61@gmail.com',
    phone: '+20 1093291108',
    linkedin: 'https://www.linkedin.com/in/angelo-esam/',
    github: 'https://github.com/AngeloEsam',
    location: 'Cairo, Egypt',
  },
};

// ==================== Achievements / Stats ====================
export const achievements: Achievement[] = [
  { icon: '💼', value: '2+', label: 'Years Experience' },
  { icon: '🚀', value: '10+', label: 'Projects Delivered' },
  { icon: '⭐', value: '5+', label: 'Technologies' },
  { icon: '🎓', label: 'Certifications', value: '4+' },
];

// ==================== Skills ====================
export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'NestJS', level: 70 },
      { name: 'TypeScript', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'Socket.io', level: 75 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'Redux', level: 78 },
      { name: 'Angular', level: 65 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Microsoft SQL Server', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 60 },
      { name: 'Linux', level: 50 },
      { name: 'Cloudinary', level: 80 },
      { name: 'Vercel', level: 85 },
      { name: 'Cron Jobs', level: 72 },
    ],
  },
];

// ==================== Experience ====================
export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Siyaq Company',
    position: 'Frontend React Developer',
    type: 'Full-time',
    startDate: 'Oct 2025',
    endDate: 'Present',
    location: 'Cairo, Egypt',
    description:
      'Built and maintained scalable web applications using React.js and TypeScript, improving performance and usability of internal company tools.',
    responsibilities: [
      'Built and maintained scalable web applications using React.js and TypeScript, improving performance and usability of internal company tools.',
      'Developed 10+ reusable React components, reducing development time and improving page load performance through optimized state management.',
      'Integrated 10+ REST APIs and managed complex application state using Redux and React Query, improving data fetching efficiency and UI responsiveness.',
      'Collaborated with backend developers and designers to deliver 10+ production-ready features in an agile environment.',
      'Followed clean code principles and Git-based workflows throughout all development cycles.',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux', 'React Query', 'REST APIs', 'Git'],
  },
  {
    id: 'exp2',
    company: 'Full-Stack Engineering Projects',
    position: 'Freelance Backend Developer',
    type: 'Freelance',
    startDate: 'Apr 2024',
    endDate: 'Present',
    location: 'Cairo, Egypt',
    description:
      'Architected robust server-side logic using Node.js for 5+ production-grade platforms, improving data processing speed by 20%.',
    responsibilities: [
      'Architected robust server-side logic using Node.js for 5+ production-grade platforms, improving data processing speed by 20%.',
      'Optimized data flow and API endpoints, resulting in a 30% reduction in server response time for client applications.',
      'Implemented secure JWT authentication protocols, successfully mitigating unauthorized access risks by 100% across all delivered modules.',
    ],
    technologies: ['Node.js', 'REST APIs', 'JWT', 'MongoDB', 'PostgreSQL'],
  },
];

// ==================== Projects ====================
export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Barber Booking System',
    description:
      'Engineered a real-time scheduling engine handling 100+ concurrent requests with sub-100ms latency using Socket.io and background task automation.',
    image: '',
    technologies: ['Node.js', 'Socket.io', 'Real-time', 'Cron Jobs'],
    status: 'completed',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 'proj2',
    title: 'Contracting Management System',
    description:
      'Streamlined project workflows, reducing manual data processing time by 40% via dynamic financial template integration.',
    image: '',
    technologies: ['Node.js', 'MongoDB', 'REST API', 'Finance'],
    status: 'completed',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 'proj3',
    title: 'Social Media (Threads Clone)',
    description:
      'Developed a full-featured social platform supporting 50+ simulated users with instant messaging and Cloudinary media optimization.',
    image: '',
    technologies: ['React.js', 'Node.js', 'Cloudinary', 'Socket.io'],
    status: 'completed',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 'proj4',
    title: 'Job Marketplace (ERSHAD)',
    description:
      'Executed a role-based access control (RBAC) system, managing permissions for 3 distinct user types: Admin, Client, and Freelancer.',
    image: '',
    technologies: ['Node.js', 'RBAC', 'PostgreSQL', 'JWT'],
    status: 'completed',
    featured: true,
    category: 'Backend',
  },
  {
    id: 'proj5',
    title: 'React Admin Dashboard',
    description:
      'Developed a responsive admin dashboard with management pages for products, users, sales, and analytics — improving navigation and internal data visibility.',
    image: '',
    technologies: ['React.js', 'Tailwind CSS', 'Analytics', 'Responsive'],
    liveDemo: 'https://dashboard-react-js-flax.vercel.app/',
    status: 'completed',
    featured: true,
    category: 'Frontend',
  },
];

// ==================== Education ====================
export const education: Education[] = [
  {
    id: 'edu1',
    institution: 'Assiut University',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    startYear: '2019',
    endYear: '2023',
    location: 'Assiut, Egypt',
    grade: 'Very Good with Honors',
    description:
      'Focused on software engineering, algorithms, data structures, and database systems.',
  },
  {
    id: 'edu2',
    institution: 'Information Technology Institute (ITI)',
    degree: 'Professional Diploma',
    field: 'Full Stack Web Development',
    startYear: '2023',
    endYear: '2024',
    location: 'Assiut, Egypt',
    grade: 'Excellent',
    description:
      '9-month intensive diploma covering Node.js, React, Angular, databases, and software architecture.',
  },
];

// ==================== Certifications ====================
export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Node.js Application Developer',
    issuer: 'OpenJS Foundation',
    date: '2024',
    icon: '🟢',
  },
  {
    id: 'cert2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    icon: '☁️',
  },
  {
    id: 'cert3',
    title: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    date: '2025',
    icon: '🍃',
  },
  {
    id: 'cert5',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2022',
    icon: '🧠',
  },
];

// ==================== Chatbot Suggested Questions ====================
export const suggestedQuestions: SuggestedQuestion[] = [
  { id: 'q1', text: "What's Angelo's experience?", icon: '💼' },
  { id: 'q2', text: 'What technologies does he use?', icon: '⚙️' },
  { id: 'q3', text: 'Tell me about his projects', icon: '🚀' },
  { id: 'q4', text: 'What education does he have?', icon: '🎓' },
  { id: 'q5', text: 'How can I contact Angelo?', icon: '📬' },
  { id: 'q6', text: "What are Angelo's certifications?", icon: '📜' },
];
