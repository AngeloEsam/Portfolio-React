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
import avatarImg from '@/assets/me.png';
import freshFruitsImg from '@/assets/fresh-fruits.png';
import adminDashboard from '@/assets//admin.png';
import eLearningImg from '@/assets/e-learning.png';
import foodieImg from '@/assets/foodie.png';
import awjImg from '@/assets/awj.png';
import foodDeliverImg from '@/assets/food-deliver.png';

// ==================== Personal Info ====================
export const personalInfo: PersonalInfo = {
  name: "Angelo",
  title: "Full Stack Developer",
  tagline: "Building scalable web solutions with modern technologies",
  avatar: avatarImg,
  summary:
    'Full Stack Developer specializing in Node.js and React. I build scalable web applications with clean architecture and focus on performance, maintainability, and user experience.',
  cvUrl: '',
  contact: {
    email: "angloesam61@gmail.com",
    phone: "+20 1093291108",
    linkedin: "https://www.linkedin.com/in/angelo-esam/",
    github: "https://github.com/AngeloEsam",
    location: "Cairo, Egypt",
  },
};

// ==================== Achievements / Stats ====================
export const achievements: Achievement[] = [
  { icon: "💼", value: "2+", label: "Years Experience" },
  { icon: "🚀", value: "10+", label: "Projects Delivered" },
  { icon: "⭐", value: "5+", label: "Technologies" },
  { icon: "🎓", label: "Certifications", value: "4+" },
];

// ==================== Skills ====================
export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "⚡" },
      { name: "NestJS", level: 70, icon: "🔺" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "REST APIs", level: 92, icon: "🔗" },
      { name: "Socket.io", level: 75, icon: "📡" },
      { name: "GraphQL", level: 65, icon: "🔮" },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Redux", level: 78, icon: "🔁" },
      { name: "Angular", level: 65, icon: "🅰️" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Microsoft SQL Server", level: 70, icon: "💾" },
      { name: "Redis", level: 65, icon: "🔴" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git / GitHub", level: 92, icon: "📦" },
      { name: "Docker", level: 60, icon: "🐳" },
      { name: "Linux", level: 50, icon: "🐧" },
      { name: "Cloudinary", level: 80, icon: "☁️" },
      { name: "Vercel", level: 85, icon: "▲" },
      { name: "Cron Jobs", level: 72, icon: "⏰" },
    ],
  },
];

// ==================== Experience ====================
export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Siyaq Company",
    position: "Frontend React Developer",
    type: "Full-time",
    startDate: "Oct 2025",
    endDate: "Present",
    location: "Cairo, Egypt",
    description:
      "Built and maintained scalable web applications using React.js and TypeScript, improving performance and usability of internal company tools.",
    responsibilities: [
      "Built and maintained scalable web applications using React.js and TypeScript, improving performance and usability of internal company tools.",
      "Developed 10+ reusable React components, reducing development time and improving page load performance through optimized state management.",
      "Integrated 10+ REST APIs and managed complex application state using Redux and React Query, improving data fetching efficiency and UI responsiveness.",
      "Collaborated with backend developers and designers to deliver 10+ production-ready features in an agile environment.",
      "Followed clean code principles and Git-based workflows throughout all development cycles.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "React Query",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "exp2",
    company: "Full-Stack Engineering Projects",
    position: "Freelance Backend Developer",
    type: "Freelance",
    startDate: "Apr 2024",
    endDate: "Present",
    location: "Cairo, Egypt",
    description:
      "Architected robust server-side logic using Node.js for 5+ production-grade platforms, improving data processing speed by 20%.",
    responsibilities: [
      "Architected robust server-side logic using Node.js for 5+ production-grade platforms, improving data processing speed by 20%.",
      "Optimized data flow and API endpoints, resulting in a 30% reduction in server response time for client applications.",
      "Implemented secure JWT authentication protocols, successfully mitigating unauthorized access risks by 100% across all delivered modules.",
    ],
    technologies: ["Node.js", "REST APIs", "JWT", "MongoDB", "PostgreSQL"],
  },
];

// ==================== Projects ====================
export const projects: Project[] = [
  {
    id: "proj1",
    title: "Barber Booking System",
    description:
      'Real-time scheduling system handling concurrent booking requests with Socket.io and automated task management.',
    image: '',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Cron Jobs'],
    status: 'completed',
    featured: true,
    category: "Full Stack",
  },
  {
    id: "proj2",
    title: "Contracting Management System",
    description:
      'Project management platform with dynamic financial templates and workflow automation for contracting companies.',
    image: '',
    technologies: ['Node.js', 'MongoDB', 'REST API', 'Express.js'],
    status: 'completed',
    featured: true,
    category: "Full Stack",
  },
  {
    id: 'proj3',
    title: 'Social Media Platform',
    description:
      'Full-featured social platform with real-time messaging, media uploads via Cloudinary, and user interactions.',
    image: '',
    technologies: ['React.js', 'Node.js', 'Cloudinary', 'Socket.io'],
    status: 'completed',
    featured: true,
    category: "Full Stack",
  },
  {
    id: "proj4",
    title: "Job Marketplace (ERSHAD)",
    description:
      'Job marketplace platform with role-based access control for admins, clients, and freelancers.',
    image: '',
    technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Express.js'],
    status: 'completed',
    featured: true,
    category: "Backend",
  },
  {
    id: "proj5",
    title: "React Admin Dashboard",
    description:
      'Responsive admin dashboard for managing products, users, sales data, and analytics.',
    image: adminDashboard,
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
    liveDemo: 'https://dashboard-react-js-flax.vercel.app/',
    status: 'completed',
    featured: true,
    category: "Frontend",
  },
  {
    id: 'proj6',
    title: 'Fresh Fruits',
    description:
      'Responsive landing page for fresh fruits e-commerce with clean, modern UI focused on product presentation.',
    image: freshFruitsImg,
    technologies: ['React.js'],
    liveDemo: 'https://fresh-fruits-react.vercel.app/',
    status: 'completed',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 'proj7',
    title: 'E-learning Website',
    description:
      'Educational platform landing page with responsive design for presenting courses and learning content.',
    image: eLearningImg,
    technologies: ['React.js'],
    liveDemo: 'https://e-learning-react-js.vercel.app/',
    status: 'completed',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 'proj8',
    title: 'Foodie Zone',
    description:
      'Modern restaurant landing page built with React and Tailwind CSS, featuring responsive layout and clean design.',
    image: foodieImg,
    technologies: ['React.js', 'Tailwind CSS'],
    liveDemo: 'https://foodie-tailwind-five.vercel.app/',
    status: 'completed',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 'proj9',
    title: 'Aug Tech | أوج تك',
    description:
      'Technology company landing page built with Next.js, focusing on professional corporate presentation.',
    image: awjImg,
    technologies: ['Next.js'],
    liveDemo: 'https://landing-page-next-lake.vercel.app/',
    status: 'completed',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 'proj10',
    title: 'Food Lover',
    description:
      'Restaurant landing page built with vanilla HTML, CSS, and JavaScript, featuring responsive design.',
    image: foodDeliverImg,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://food-deliver-zeta.vercel.app/',
    status: 'completed',
    featured: false,
    category: 'Frontend',
  },
];

// ==================== Education ====================
export const education: Education[] = [
  {
    id: "edu1",
    institution: "Assiut University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startYear: "2019",
    endYear: "2023",
    location: "Assiut, Egypt",
    grade: "Very Good with Honors",
    description:
      "Focused on software engineering, algorithms, data structures, and database systems.",
  },
  {
    id: "edu2",
    institution: "Information Technology Institute (ITI)",
    degree: "Professional Diploma",
    field: "Full Stack Web Development",
    startYear: "2023",
    endYear: "2024",
    location: "Assiut, Egypt",
    grade: "Excellent",
    description:
      "9-month intensive diploma covering Node.js, React, Angular, databases, and software architecture.",
  },
];

// ==================== Certifications ====================
export const certifications: Certification[] = [
  {
    id: "cert1",
    title: "Visual Programming using C#",
    issuer: "ITI summer training",
    date: "2021",
    icon: "💻",
  },
    {
    id: "cert2",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    icon: "🧠",
  },
  {
    id: "cert3",
    title: "Database Fundamentals and Architecture",
    issuer: "ITI summer training",
    date: "2022",
    icon: "📚",
  },
  {
    id: "cert4",
    title: "Flutter for Beginners",
    issuer: "Petra Company (Training)",
    date: "2023",
    icon: "📱",
  },
];

// ==================== Chatbot Suggested Questions ====================
export const suggestedQuestions: SuggestedQuestion[] = [
  { id: "q1", text: "What's Angelo's experience?", icon: "💼" },
  { id: "q2", text: "What technologies does he use?", icon: "⚙️" },
  { id: "q3", text: "Tell me about his projects", icon: "🚀" },
  { id: "q4", text: "What education does he have?", icon: "🎓" },
  { id: "q5", text: "How can I contact Angelo?", icon: "📬" },
  { id: "q6", text: "What are Angelo's certifications?", icon: "📜" },
];
