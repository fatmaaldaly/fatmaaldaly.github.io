// Personal details, skills, experience and learning goals.
// Edit this file to update the content on the home page.

export const profile = {
  name: "Fatma Aldaly",
  role: "Aspiring Full-Stack Developer",
  location: "Egypt",
  email: "fatimaaldaly05@gmail.com",
  phone: "+20 101 450 4945",
  phoneHref: "+201014504945",
  github: "https://github.com/fatmaaldaly",
  githubUser: "fatmaaldaly",
  linkedin: "https://www.linkedin.com/in/fatma-aldaly-8347862a5",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    degree: "B.Sc. Business Informatics",
    institution: "German University in Cairo",
    date: "2021 – 2025",
  },
];

export const hobbies = ["Baking", "Painting", "Cooking"];

// `icon` keys are resolved to icons in components/Skills.jsx
export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces for web and mobile",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "React Native", icon: "react" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    description: "APIs and server logic",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT", icon: "jwt" },
    ],
  },
  {
    title: "Database",
    description: "Modeling and querying data",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Supabase", icon: "supabase" },
      { name: "Prisma", icon: "prisma" },
      { name: "SQL", icon: "database" },
    ],
  },
  {
    title: "Tools",
    description: "How I ship and collaborate",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
    ],
  },
  {
    title: "Also worked with",
    description: "Data, automation and AI",
    items: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "n8n", icon: "automation" },
      { name: "Power BI", icon: "chart" },
      { name: "AI / LLM APIs", icon: "ai" },
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Intella",
    date: "Jul 2026 – Sep 2026",
    summary:
      "Worked on frontend features inside an existing production codebase as part of an Agile team.",
    work: [
      "Developed frontend features using React, Next.js, TypeScript and MUI.",
      "Built and adapted reusable UI components based on existing designs.",
      "Implemented data fetching and connected frontend features to APIs.",
      "Used Git and GitHub for version control and Jira for sprint task tracking.",
    ],
    tech: ["React", "Next.js", "TypeScript", "MUI", "Git", "Jira"],
    takeaway:
      "How to work within an established codebase and design system, and how features move from a ticket to review to merge.",
  },
  {
    role: "Full Stack Data Scientist Intern",
    company: "Fixed Solutions",
    date: "May 2025 – Jul 2025",
    summary:
      "A mix of app development, automation and data analysis during my final year of university.",
    work: [
      "Developed responsive web and mobile apps with React and React Native, and integrated an AI model for predictive features.",
      "Built an AI agent in n8n that extracts data from PDF invoices to reduce manual work.",
      "Applied the CRISP-DM methodology to preprocess data, build models and present insights.",
    ],
    tech: ["React", "React Native", "n8n", "Python", "AI integration"],
    takeaway:
      "How AI and automation fit into real workflows, and the value of following a structured process when working with data.",
  },
];

export const learning = [
  {
    title: "Backend architecture",
    text: "Structuring services into clear layers and keeping business logic out of routes.",
    icon: "server",
  },
  {
    title: "API design",
    text: "Consistent REST conventions, validation, error handling and versioning.",
    icon: "api",
  },
  {
    title: "Databases",
    text: "Data modeling, relations, indexes and writing SQL I actually understand.",
    icon: "database",
  },
  {
    title: "Testing",
    text: "Unit and integration tests, so I can change code with confidence.",
    icon: "test",
  },
  {
    title: "System design",
    text: "Caching, queues and background jobs, and when each one is worth it.",
    icon: "system",
  },
  {
    title: "AI & LLMs",
    text: "Building features on top of LLM APIs with structured, reviewable output.",
    icon: "ai",
  },
  {
    title: "Software engineering fundamentals",
    text: "Clean code, data structures and patterns that make projects easier to grow.",
    icon: "code",
  },
  {
    title: "Production readiness",
    text: "Auth, security, deployment and monitoring: what it takes beyond localhost.",
    icon: "rocket",
  },
];
