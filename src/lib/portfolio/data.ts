// Centralized portfolio data — change content here, not in components.

export type NavItem = {
  label: string;
  meta: string | null;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Projects", meta: "04", href: "#work" },
  { label: "Expertise", meta: "04", href: "#services" },
  { label: "Experience", meta: "01+", href: "#experience" },
  { label: "Contact", meta: null, href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Gaurav2550",
    handle: "/Gaurav2550",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurav-thombare-3a92632a5",
    handle: "/in/gaurav-thombare-3a92632a5",
  },
  {
    label: "Twitter",
    href: "https://x.com/GauravThom80361",
    handle: "/GauravThom80361",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accent: string; // tailwind bg class for the thumbnail
  span?: "wide" | "tall" | "default";
  thumbnail:string
};

export const PROJECTS: Project[] =   [
  {
    id: "p1",
    title: "Crime Report System",
    category: "Backend · Spring Boot · PostgreSQL",
    year: "2026",
    description:
      "A secure crime reporting platform built with Spring Boot and PostgreSQL, featuring JWT authentication, emergency reporting, live location tracking, admin workflows, and AI-powered crime analysis.",

    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Spring AI",
    ],

    thumbnail: "images/Crime report online.png",
    accent: "bg-slate-100",
    span: "wide",
  },

  {
    id: "p2",
    title: "BookMyShow Clone",
    category: "Full Stack · Booking Platform",
    year: "2026",
    description:
      "A full-stack movie booking platform with theatre, movie, show, seat, and booking management. Implemented JWT authentication, Spring Security, REST APIs, and seat-locking logic.",

    tags: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "REST API",
    ],

    thumbnail: "/images/movie.png",
    accent: "bg-blue-100",
  },

  {
    id: "p3",
    title: "Video Streaming App",
    category: "Backend · Media Streaming",
    year: "2026",
    description:
      "A video streaming backend supporting video uploads, metadata management, byte-range requests, and efficient media streaming for large video files.",

    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "Byte Range",
      "Streaming",
    ],

    thumbnail: "/images/Stream.png",
    accent: "bg-emerald-100",
  },

  {
    id: "p4",
    title: "API Health & Optimization Platform",
    category: "Backend · Performance · DevTools",
    year: "2026",
    description:
      "A developer platform for monitoring API health, measuring latency, detecting performance issues, and identifying optimization opportunities across backend services.",

    tags: [
      "Spring Boot",
      "Redis",
      "Monitoring",
      "Performance",
      "System Design",
    ],

    thumbnail: "images/Api Health.png",
    accent: "bg-violet-100",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Production-ready backend systems built with Java and Spring Boot, focusing on clean architecture, scalability, security, and maintainability.",

    deliverables: [
      "Spring Boot APIs",
      "Business logic",
      "Database integration",
      "Clean architecture",
    ],
  },

  {
    number: "02",
    title: "REST API Development",
    description:
      "Robust and secure REST APIs designed for modern web and mobile applications with proper validation, authentication, error handling, and documentation.",

    deliverables: [
      "REST APIs",
      "JWT Authentication",
      "API validation",
      "Exception handling",
    ],
  },

  {
    number: "03",
    title: "System Design",
    description:
      "Designing scalable software systems by breaking complex requirements into reliable services, data flows, APIs, and architectural components.",

    deliverables: [
      "LLD & HLD",
      "Microservices",
      "Database design",
      "Scalability planning",
    ],
  },

  {
    number: "04",
    title: "Database & Performance",
    description:
      "Efficient data solutions with relational and NoSQL databases, optimized queries, caching, indexing, and performance-focused backend design.",

    deliverables: [
      "MySQL & PostgreSQL",
      "MongoDB",
      "Redis caching",
      "Query optimization",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Senior Product Designer",
    company: "Northwind Labs",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Lead designer for the operations platform serving 14k merchants. Shipped the v2 dashboard and a company-wide design system used by 4 product teams.",
  },
 
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Gaurav transformed a complex backend requirement into a clean and scalable Spring Boot architecture. His focus on API design, security, and maintainability made the project much easier to build and extend.",

    author: "Project Collaborator",
    role: "Software Engineering Team",
  },

  {
    quote:
      "He has a strong ability to understand a problem, break it into smaller components, and implement the solution systematically. His approach to Java, databases, and system design stands out.",

    author: "Technical Mentor",
    role: "Backend Engineering",
  },

  {
    quote:
      "Gaurav consistently focused on writing reliable code rather than just making features work. From REST APIs and authentication to database design, he approached the project with an engineering mindset.",

    author: "Team Member",
    role: "Full Stack Development",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] =  [
  { value: "4+", label: "Projects built" },
  { value: "20+", label: "REST APIs developed" },
  { value: "10+", label: "Core technologies" },
  { value: "1+", label: "Years coding experience" },
];
