import G1 from "../G1.png";
import G2 from "../G2.png";
import G3 from "../G3.png";
import G4 from "../G4.png";
import G5 from "../G5.png";
import C1 from "../C1.png";
import C2 from "../C2.png";
import C3 from "../C3.png";
import C4 from "../C4.png";
import C5 from "../C5.png";
import C6 from "../C6.png";
import T1 from "../T1.png";
import T2 from "../T2.png";

export const projects = [
  {
    id: 1,
    title: "GROCER",
    subtitle: "E-commerce website",
    category: "Full Stack Development",
    shortDescription:
      "Built a dynamic ecommerce website with product browsing, cart management, and checkout flow.",
    fullDescription:
      "A full-featured ecommerce application designed to provide a seamless shopping experience. It includes product listings, category filters, shopping cart functionality, and a clean checkout process. The project highlights responsive design, state management, and secure data handling for an intuitive user journey.",
    images: [G1, G2, G3, G4, G5],
    tech: ["React", "Node.js", "Express", "CSS3", "PostgreSQL"],
    techIcons: ["⚛️", "🟩", "🎨", "✨", "🔌"],
    features: [
      "Responsive product gallery and category filtering",
      "Add to cart, update quantities, and remove items",
      "Smooth checkout flow with order summary",
      "Secure backend integration for product and user data",
      "Optimized for mobile and desktop experiences",
    ],
    role: "Full-Stack Developer",
    links: {
      live: "#",
      github: "https://github.com/fatmaaldaly/e-commerce-site",
    },
  },
  {
    id: 2,
    title: "CRM PRO",
    subtitle: "Enterprise Lead Management System",
    category: "Full Stack Development",
    shortDescription:
      "Built a CRM system with role-based access, lead management, activity tracking, and reminders. Integrated AI features for lead insights and call follow-ups with structured, actionable outputs.",
    fullDescription:
      "A comprehensive CRM platform designed for sales teams to manage leads efficiently. Features role-based access control, advanced lead management, activity tracking, reminder systems, and AI-powered insights. The system leverages AI to provide intelligent lead recommendations and automated call follow-up summaries, helping teams optimize their sales pipeline.",
    images: [C1, C2, C3, C4, C5, C6],
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Supabase",
      "Tanstack query",
      "AI Integration",
      "Tailwind CSS",
    ],
    techIcons: ["⚛️", "🟩", "📦", "🚀", "🤖", "🎨"],
    features: [
      "Role-based access control",
      "Advanced lead management and pipeline tracking",
      "Real-time activity logging and notes",
      "AI-powered lead insights and recommendations",
      "Automated call follow-up summaries",
      "Customizable reminders and notifications",
      "Dashboard with key metrics and analytics",
    ],
    role: "Full-Stack Developer",
    links: {
      live: "https://crm-pro-hazel.vercel.app/",
      github: "https://github.com/fatmaaldaly/CRMPro",
    },
  },
  {
    id: 3,
    title: "TASK MANAGER",
    subtitle: "Productivity & Task Organization",
    category: "Frontend Development",
    shortDescription:
      "Built a task management app that allows users to add, complete, and delete tasks. Implemented a clean UI and interactive state management for seamless task tracking.",
    fullDescription:
      "A sleek task management application designed for individuals and teams to organize their daily workflow. The app features intuitive task creation, status updates, and deletion with a clean, modern interface. Built with React's state management for smooth, real-time interactions and persistence.",
    images: [T1, T2],
    tech: [
      "React",
      "JavaScript",
      "Local Storage",
      "CSS3",
      "Component Architecture",
    ],
    techIcons: ["⚛️", "✨", "💾", "🎨", "🧩"],
    features: [
      "Add, edit, and delete tasks in real-time",
      "Mark tasks as complete",
      "Clean, intuitive user interface",
      "Fully keyboard accessible",
      "Mobile-friendly design",
    ],
    role: "Frontend Developer",
    links: {
      live: "#",
      github: "#",
    },
  },
];
