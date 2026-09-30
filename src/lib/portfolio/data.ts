// Centralized portfolio data — change content here, not in components.

export type NavItem = {
  label: string;
  meta: string | null;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", meta: "40", href: "#work" },
  { label: "Service", meta: "4", href: "#services" },
  { label: "Experience", meta: "9y+", href: "#experience" },
  { label: "Contact", meta: null, href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Dribbble", href: "https://dribbble.com", handle: "@dymas" },
  { label: "Instagram", href: "https://instagram.com", handle: "@dymas.alfin" },
  { label: "LinkedIn", href: "https://linkedin.com", handle: "/in/dymasalfin" },
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
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Lumen Banking",
    category: "Fintech · Mobile App",
    year: "2025",
    description:
      "A reimagined mobile banking experience that reduced onboarding friction by 38% and lifted weekly active users by 22% in the first quarter after launch.",
    tags: ["UX Research", "iOS", "Design System"],
    accent: "bg-amber-100",
    span: "wide",
  },
  {
    id: "p2",
    title: "Northwind Studio",
    category: "SaaS · Dashboard",
    year: "2025",
    description:
      "Operations dashboard for a logistics platform serving 14k merchants. Built a modular data-viz kit shipped in 6 weeks.",
    tags: ["Data Viz", "Web App"],
    accent: "bg-rose-100",
  },
  {
    id: "p3",
    title: "Field Notes OS",
    category: "Productivity · Web",
    year: "2024",
    description:
      "A focused note-taking tool for researchers. Shipped a clean editor with command palette and zero-distraction mode.",
    tags: ["Web App", "Branding"],
    accent: "bg-emerald-100",
  },
  {
    id: "p4",
    title: "Verde Market",
    category: "E-commerce",
    year: "2024",
    description:
      "End-to-end commerce redesign for a sustainable marketplace. Increased checkout conversion from 1.8% to 3.4%.",
    tags: ["E-com", "Web"],
    accent: "bg-violet-100",
  },
  {
    id: "p5",
    title: "Atlas Travel",
    category: "Mobile · Travel",
    year: "2023",
    description:
      "Trip-planning app with offline-first maps. Designed a wayfinding system that works without connectivity.",
    tags: ["Mobile", "Maps"],
    accent: "bg-sky-100",
  },
  {
    id: "p6",
    title: "Orbit Health",
    category: "Healthcare · Web",
    year: "2023",
    description:
      "Patient portal redesign for a telehealth provider. Cut support tickets by 27% with clearer information architecture.",
    tags: ["Web", "Health"],
    accent: "bg-orange-100",
    span: "wide",
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
    title: "Product Design",
    description:
      "End-to-end product design from discovery to delivery — wireframes, flows, and pixel-perfect UI that engineers can ship.",
    deliverables: ["User flows", "Wireframes", "High-fidelity UI", "Design QA"],
  },
  {
    number: "02",
    title: "UX Research",
    description:
      "Evidence-led design decisions grounded in real user behavior. I run interviews, usability tests, and synthesis workshops.",
    deliverables: ["User interviews", "Usability testing", "Journey maps", "Synthesis"],
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Scalable, documented design systems that keep teams fast and interfaces consistent as products grow.",
    deliverables: ["Token architecture", "Component library", "Documentation", "Governance"],
  },
  {
    number: "04",
    title: "Brand & Identity",
    description:
      "Visual identity that translates product strategy into a system of marks, type, color, and motion.",
    deliverables: ["Logo & marks", "Type system", "Color palette", "Brand guidelines"],
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
  {
    role: "Product Designer",
    company: "Atlas Travel",
    period: "2021 — 2023",
    location: "Singapore",
    summary:
      "Owned the trip-planning experience end to end. Designed offline-first maps and a wayfinding system that doubled session length on mobile.",
  },
  {
    role: "UI/UX Designer",
    company: "Verde Studio",
    period: "2018 — 2021",
    location: "Jakarta",
    summary:
      "Designed commerce experiences for 8+ DTC brands. Built the studio's first reusable component library and motion guidelines.",
  },
  {
    role: "Freelance Designer",
    company: "Independent",
    period: "2016 — 2018",
    location: "Remote",
    summary:
      "Worked with founders on MVPs across fintech, health, and travel. Shipped 12 products from zero to launch.",
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
      "Dymas turned a tangled operations tool into something our merchants actually enjoy using. The redesign paid for itself in the first quarter.",
    author: "Priya Nair",
    role: "VP Product, Northwind Labs",
  },
  {
    quote:
      "He is one of those rare designers who can hold the strategy and the pixels in the same hand. Calm, fast, and quietly excellent.",
    author: "Marco Bianchi",
    role: "Founder, Atlas Travel",
  },
  {
    quote:
      "We hired Dymas to fix a checkout flow. He redesigned the underlying model and conversion jumped from 1.8% to 3.4%.",
    author: "Sara Lindqvist",
    role: "CEO, Verde Market",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "40+", label: "Shipped projects" },
  { value: "9y+", label: "Designing products" },
  { value: "12", label: "Industries served" },
  { value: "4", label: "Design systems built" },
];
