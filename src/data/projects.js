import E1 from "../assets/E1.webp";
import C1 from "../assets/C1.webp";
import C2 from "../assets/C2.webp";
import C3 from "../assets/C3.webp";
import C4 from "../assets/C4.webp";
import C5 from "../assets/C5.webp";
import C6 from "../assets/C6.webp";
import T1 from "../assets/T1.webp";
import T2 from "../assets/T2.webp";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";

// Projects shown on the home page (featured: true) and on /projects.
// Each project also gets a case-study page at /projects/:slug.
// Leave `links.live` empty when there is no deployed demo.
export const projects = [
  {
    slug: "crm-pro",
    title: "CRM Pro",
    tagline: "Lead management CRM for sales teams, with AI-assisted follow-ups",
    category: "Full-Stack Web App",
    platform: "web",
    featured: true,
    role: "Full-stack developer (solo project)",
    summary:
      "A CRM where sales agents track leads through a pipeline, log every call and note, and get reminders before follow-ups slip. Admins manage the team, import or export leads, and see how the pipeline is performing.",
    problem:
      "When leads live in spreadsheets and chat threads, it's hard to know who contacted whom, what was said, and what needs to happen next. Managers have little visibility into the pipeline, and follow-ups get forgotten.",
    approach: [
      "Started with the data model: profiles with roles, leads, activities, reminders, notifications and attachments, defined in Prisma and evolved through migrations as requirements grew.",
      "Used Next.js route handlers as the API layer, with Zod validation on incoming data and role checks on admin-only endpoints.",
      "Handled authentication with Supabase and put protected pages behind a shared layout, so agents and admins each see the navigation that fits their role.",
      "Managed server state on the client with TanStack Query to cache data and refresh it after mutations.",
      "Added AI endpoints that generate a lead brief and a structured call follow-up summary. The user reviews the output before saving it to the lead's history.",
      "Moved time-based work out of the request cycle: Upstash QStash triggers due reminders and manager digests, and Resend sends invite and digest emails.",
    ],
    features: [
      "Role-based access for admins and sales agents",
      "Lead pipeline by stage and status, with reassignment",
      "Activity timeline with notes, call attempts and attachments",
      "Reminders with in-app notifications",
      "AI lead briefs and call follow-up summaries",
      "CSV import and export of leads",
      "User management: invite, deactivate and reactivate",
      "Dashboard and reports with pipeline metrics",
    ],
    learned: [
      "A well-designed schema makes every feature after it easier, and migrations let it change safely.",
      "Designing API routes around resources and permissions instead of around pages.",
      "AI output works best as a structured draft that a person reviews, not as a final answer.",
      "Scheduled and background work needs its own tools when an app runs on serverless functions.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "Vercel AI SDK",
      "Upstash QStash",
      "Resend",
      "Recharts",
    ],
    images: [C1, C2, C3, C4, C5, C6],
    links: {
      live: "https://crm-pro-hazel.vercel.app/",
      github: "https://github.com/fatmaaldaly/CRMpro",
    },
  },
  {
    slug: "maison-de-beaute",
    title: "Maison de Beauté",
    tagline:
      "Full-stack beauty store with a REST API, JWT auth, cart and orders",
    category: "Full-Stack Web App",
    platform: "web",
    featured: true,
    role: "Full-stack developer (solo project)",
    summary:
      "An e-commerce site for beauty products, built end to end: a React storefront on top of an Express and PostgreSQL REST API that handles accounts, products, carts and orders.",
    problem:
      "An online store needs more than a product grid. Shoppers need accounts, a cart that stays in sync, and an order flow, all backed by an API that validates data and keeps user information secure.",
    approach: [
      "Organized the backend in layers (routes, middleware, controllers, services and models) so each part has one job.",
      "Wrote the data access with plain SQL through node-postgres to understand exactly what hits the database.",
      "Implemented authentication with hashed passwords (bcrypt) and JSON Web Tokens checked by an auth middleware.",
      "Added validation middleware for carts and orders, and a central error handler with a custom error class for consistent API responses.",
      "Hardened the API with Helmet and CORS, and explored Arcjet for rate limiting and bot detection.",
      "On the frontend, shared auth, cart and category state through React Context and custom hooks, with a single Axios client for API calls.",
    ],
    features: [
      "Product browsing with category filtering",
      "Sign up and log in with JWT-based sessions",
      "Cart: add items, update quantities, remove items",
      "Checkout flow with an order summary",
      "Dark mode toggle",
      "Responsive on mobile and desktop",
    ],
    learned: [
      "How authentication works end to end, from hashing a password to verifying a token on every request.",
      "Why validation belongs on the server, even when the frontend already checks the input.",
      "How a layered backend keeps routes thin and makes logic easier to find and change.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Axios",
      "Helmet",
    ],
    images: [E1],
    links: {
      live: "",
      github: "https://github.com/fatmaaldaly/e-commerce-site",
    },
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    tagline: "E-commerce admin panel with charts, data tables and detail views",
    category: "Frontend Web App",
    platform: "web",
    featured: true,
    role: "Frontend developer (solo project)",
    summary:
      "A dashboard for store admins: an overview of revenue, sales channels, top products and recent orders, plus paginated product and order tables with a detail page for each item.",
    problem:
      "Admins need a quick read on how the store is doing, and a way to drill from a summary number down to a specific order or product without losing context.",
    approach: [
      "Used a Next.js App Router route group so every admin page shares one layout with a desktop sidebar and a mobile menu.",
      "Put all API calls in a typed service layer, with TypeScript types for every response.",
      "Fetched and cached data with TanStack Query, so each widget loads independently.",
      "Built a skeleton component for every widget and empty states for tables, so the UI never jumps or shows a blank screen.",
      "Split the UI into small, focused components (stat cards, change badges, charts, tables) that are easy to reuse.",
    ],
    features: [
      "KPI cards with period-over-period change",
      "Revenue overview and sales-by-channel charts",
      "Top products and recent orders widgets",
      "Paginated product and order tables",
      "Order and product detail pages",
      "Skeleton loading and empty states",
      "Responsive layout with a mobile sidebar",
    ],
    learned: [
      "Typing API responses up front catches mistakes before they reach the UI.",
      "Loading and empty states are part of the design, not an afterthought.",
      "Keeping data fetching out of components makes them simpler and easier to test.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "TanStack Query",
      "Axios",
      "Recharts",
      "Tailwind CSS",
    ],
    images: [A1, A2, A3, A4],
    links: {
      live: "",
      github: "https://github.com/fatmaaldaly/admin-dashboard",
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    tagline: "Mobile task manager built with React Native and Expo",
    category: "Mobile App",
    platform: "mobile",
    featured: true,
    role: "Mobile developer (solo project)",
    summary:
      "A focused to-do app for iOS and Android. Add a task, tap to mark it done, and remove it when you no longer need it.",
    problem:
      "I wanted to understand how React knowledge transfers to mobile, so I built a small, complete app instead of following a tutorial step by step.",
    approach: [
      "Set up the project with Expo and TypeScript so I could run it on a real phone through Expo Go.",
      "Managed the task list with React hooks and kept components small and typed.",
      "Rendered tasks in a scrollable list and handled taps to toggle and delete.",
      "Styled everything with React Native's StyleSheet and Flexbox.",
    ],
    features: [
      "Add tasks from an input field",
      "Tap a task to mark it complete (shown with a strikethrough)",
      "Delete tasks you no longer need",
      "Scrollable task list",
      "Runs on iOS and Android through Expo",
    ],
    learned: [
      "How React Native differs from the web: no DOM, different layout defaults and touch-first interactions.",
      "How Expo speeds up mobile development and testing on a real device.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "React Hooks"],
    images: [T2, T1],
    links: {
      live: "",
      github: "https://github.com/fatmaaldaly/task-manager",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
