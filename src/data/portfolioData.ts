// ══════════════════════════════════════════════════════════════
// PORTFOLIO DATA — Single source of truth for all content
// Update this file to change projects, links, descriptions, etc.
// ══════════════════════════════════════════════════════════════

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl: string;
  featured: boolean;
  accentColor: string;
  icon: string; // SVG path data for the icon
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  dates: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Lidiya Aramde',
  headline: 'Computer Science Student & Software Developer',
  tagline: 'AI · Blockchain · Full-Stack',
  email: 'lidiyurr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lidiya-fetene-083a9a22a',
  github: 'https://github.com/lidu12',
  university: 'Addis Ababa University',
  degree: 'Computer Science',
};

export const projects: Project[] = [
  {
    id: 'documind',
    title: 'DocuMind AI',
    subtitle: 'AI-Powered Document Intelligence Platform',
    description:
      'A production-grade, multi-tenant Retrieval-Augmented Generation (RAG) platform. Users upload documents (PDFs, text files), which are automatically parsed and chunked into semantic embeddings. The system enables conversational question-answering grounded in document context with verifiable source citations.',
    technologies: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'Google Gemini API', 'Docker', 'GitHub Actions'],
    liveUrl: 'https://lidu12.github.io/ai-document-intelligence-assistant/',
    repoUrl: 'https://github.com/lidu12/ai-document-intelligence-assistant',
    featured: true,
    accentColor: '#6366F1',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    id: 'wallet-analysis',
    title: 'Wallet Analysis',
    subtitle: 'Blockchain Intelligence & Suspicious Activity Analysis',
    description:
      'A full-stack blockchain intelligence system combining Ethereum AML (Anti-Money Laundering) wallet clustering and multi-chain crypto risk & spam detection. Features an ETL pipeline that extracts raw Ethereum blocks, transforms and loads them into multiple databases, with a React dashboard for visualization and analysis.',
    technologies: ['Python', 'FastAPI', 'React', 'Vite', 'NestJS', 'Next.js', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Web3'],
    repoUrl: 'https://github.com/lidu12/Wallet-Analysis',
    featured: true,
    accentColor: '#8B5CF6',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  {
    id: 'eunoia',
    title: 'Eunoia',
    subtitle: 'AI-Powered Relationship Wellness Platform',
    description:
      'A full-stack relationship wellness platform with an AI coach informed by attachment theory. Features include relationship health assessments, guided journaling with AI-extracted psychological insights, mood tracking with emotional analytics, and relationship goal tracking. This is not a substitute for professional mental-health care.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Google Gemini API', 'Recharts'],
    liveUrl: 'https://eunoia-relationship-coach.vercel.app/',
    repoUrl: 'https://github.com/lidu12/eunoia-relationship-coach',
    featured: true,
    accentColor: '#38BDF8',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    id: 'vet-drug',
    title: 'Veterinary Drug Supply Management System',
    subtitle: 'Pharmaceutical Supply Chain Platform',
    description:
      'A full-stack platform for veterinary pharmaceutical supply chain management with role-based access control (Admin, Staff, Auditor), JWT authentication, automated anomaly detection for high-volume transactions, stockout velocity forecasting, and an immutable security audit trail.',
    technologies: ['React', 'Vite', 'Express', 'PostgreSQL', 'JWT', 'Bcrypt', 'Helmet'],
    liveUrl: 'https://veterinary-drug-supply-management-system-lidiya1.vercel.app/',
    repoUrl: 'https://github.com/lidu12/veterinary-drug-supply-management-system',
    featured: false,
    accentColor: '#10B981',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    id: 'ai-study',
    title: 'AI Study Assistant',
    subtitle: 'NLP-Powered Study Note Analyzer',
    description:
      'A Flask application that converts raw study notes into structured summaries, key points, and plain-English explanations. Features local NLP text analysis, word count and reading time statistics, copy-to-clipboard support, and a responsive web interface.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'NLP'],
    liveUrl: 'https://ai-study-assistant-y58h.onrender.com',
    repoUrl: 'https://github.com/lidu12/ai-study-assistant',
    featured: false,
    accentColor: '#F59E0B',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
];

export const experience: Experience[] = [
  {
    id: 'insa',
    organization: 'INSA',
    role: 'Blockchain Analysis Intern',
    dates: '', // To be provided later
    description: [
      'Contributed to a blockchain intelligence project focused on cryptocurrency wallet analysis and suspicious transaction pattern identification.',
      'Gained practical experience in blockchain data analysis, risk assessment, and backend integration within a team-based environment.',
      'Worked with tools and technologies including Python, NestJS, PostgreSQL, Redis, and blockchain APIs for data extraction and processing.',
    ],
    technologies: ['Python', 'NestJS', 'PostgreSQL', 'Redis', 'Blockchain APIs'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend Development',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'NestJS', 'Flask'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Vite'],
  },
  {
    title: 'Databases & Data',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'pgvector'],
  },
  {
    title: 'AI & Intelligent Systems',
    skills: ['Google Gemini API', 'RAG Architecture', 'Semantic Search', 'Vector Embeddings', 'NLP'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Vercel', 'Render'],
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
