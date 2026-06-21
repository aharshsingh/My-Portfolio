// Central content for the portfolio. Edit here to update the whole site.

export const profile = {
  name: "Aharsh Singh",
  roles: [
    "Full Stack Developer",
    "Microservices Engineer",
    "MERN + Next.js",
    "Backend & Cloud",
  ],
  tagline:
    "A full stack developer building scalable, microservices-based products with Node.js, Next.js and Go. I care about clean architecture, performance, and shipping software that genuinely helps people.",
  location: "Delhi, India",
  email: "aharshsingh25@gmail.com",
  phone: "+91-8005198273",
  resumeNote: "Full Stack Developer @ PRP Services · open to opportunities",
  resumeFile: "/Aharsh-Singh-Resume.pdf",
};

export const socials = {
  github: "https://github.com/aharshsingh",
  linkedin: "https://www.linkedin.com/in/aharsh-singh-17917022a/",
  twitter: "https://x.com/AharshSingh?t=2jJeEqWK596sph6mm6eF3Q&s=08",
  instagram:
    "https://www.instagram.com/aharsh_singh?utm_source=qr&igsh=MTI2YXcxaHZocTJ1eg==",
  blog: "https://techweekle.blogspot.com/?",
};

export const stats = [
  { value: "1.5+", label: "Years Professional" },
  { value: "10+", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
  { value: "33+", label: "GitHub Repos" },
];

export const about = {
  paragraphs: [
    "I'm Aharsh — a Full Stack Developer based in Delhi, building scalable, microservices-based products end to end. I work across the stack with Node.js, Next.js, React and Go, comfortable owning everything from database schemas to containerized deployments on AWS.",
    "I'm currently at PRP Services working on Docker & Kubernetes-orchestrated microservices, after shipping full-stack modules at ABCDE Technologies. I'm obsessed with clean architecture, performance (Redis, queues, caching) and developer experience — turning complex requirements into polished, reliable products.",
  ],
  facts: [
    { k: "Name", v: "Aharsh Singh" },
    { k: "Role", v: "Full Stack Developer" },
    { k: "Based in", v: "Delhi, India" },
    { k: "Education", v: "B.Tech CSE @ LPU" },
    { k: "Focus", v: "Microservices · Full Stack" },
    { k: "Open to", v: "New opportunities" },
  ],
};

export const skillGroups = [
  {
    title: "Languages & Databases",
    items: [
      "TypeScript",
      "JavaScript",
      "Go (Golang)",
      "C++",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Redux-Saga",
      "Tailwind CSS",
      "Styled Components",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "Go-Gin", "REST", "GraphQL", "WebSocket"],
  },
  {
    title: "Infra & Messaging",
    items: ["AWS", "Docker", "Kubernetes", "RabbitMQ", "Redis Pub/Sub"],
  },
  {
    title: "AI & Desktop",
    items: ["Langflow", "Ollama", "Electron", "Claude Code"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Postman", "Figma"],
  },
];

export const experience = [
  {
    period: "Aug 2025 — Present",
    role: "Full Stack Developer",
    org: "PRP Services",
    tag: "Full-time",
    bullets: [
      "Building scalable backend services on a microservices architecture with Node.js — containerized and orchestrated via Docker & Kubernetes on AWS.",
      "Developing responsive web apps with Next.js and using Redis caching to improve performance and scalability.",
    ],
  },
  {
    period: "Dec 2024 — Jul 2025",
    role: "Full Stack Developer",
    org: "ABCDE Technologies",
    tag: "Full-time",
    bullets: [
      "Owned end-to-end development of full-stack modules — responsive React.js & Next.js frontends.",
      "Built robust, modular RESTful APIs and database schemas with Go-Gin and MySQL.",
      "Stack: PostgreSQL, Go-Gin, React, Redux, Next.js, Tailwind.",
    ],
  },
];

export const education = [
  {
    period: "Aug 2021 — Jul 2025",
    title: "B.Tech, Computer Science & Engineering",
    org: "Lovely Professional University",
    note: "GPA: 7.42",
  },
  {
    period: "Apr 2019 — Mar 2020",
    title: "Intermediate (Class XII)",
    org: "Army Public School",
    note: "90.2%",
  },
  {
    period: "Apr 2017 — Mar 2018",
    title: "Matriculation (Class X)",
    org: "Army Public School",
    note: "84.6%",
  },
];

// Professional / enterprise projects (from resume) — text-driven, no public demo.
export const professionalProjects = [
  {
    key: "rcs",
    monogram: "RCS",
    title: "Rich Communication Services",
    category: "Communication Platform",
    stack: ["Next.js", "Tailwind", "Node.js", "MySQL"],
    highlights: [
      "Architected RBAC for Admin, Enterprise and Viewer roles with permission checks across campaigns, billing, templates and reports.",
      "Integrated external RCS provider APIs with retry logic and failover handling for unstable responses.",
      "Built webhook receivers for delivery reports, read receipts and template approvals — with idempotency and analytics logging.",
    ],
  },
  {
    key: "opencoot",
    monogram: "OC",
    title: "OpenCoot",
    category: "AI Desktop App",
    stack: ["Electron", "React", "Node.js", "Langflow", "Ollama"],
    highlights: [
      "Built an enterprise cross-platform desktop app for macOS & Windows with Electron, React and Node.js.",
      "Developed AI workflow execution & automation with Langflow, dynamically loading LLM models per user needs.",
      "Implemented secure sandboxing for isolated execution and enterprise-grade privacy.",
      "Integrated GitHub, Slack and Email connectors to automate workflows via AI agents.",
    ],
  },
  {
    key: "wacampaign",
    monogram: "WA",
    title: "WhatsApp Campaign Management",
    category: "Campaign Platform",
    stack: ["Next.js", "Node.js", "Golang", "GraphQL", "Redis", "RabbitMQ"],
    highlights: [
      "Built a scalable, RBAC-based WhatsApp campaign platform for clients and resellers — billing, analytics and dashboards.",
      "Integrated WhatsApp GraphQL APIs and Meta webhooks for real-time delivery, status updates and event processing.",
      "Used Redis caching and a RabbitMQ queue architecture to handle high webhook traffic and boost TPS.",
      "Optimized large-scale dashboards with pagination, debouncing and efficient API management.",
    ],
  },
  {
    key: "shorturl",
    monogram: "URL",
    title: "ShortURL (SMS)",
    category: "URL Microservice",
    stack: ["Golang", "MySQL", "Redis", "Microservices"],
    highlights: [
      "Built a standalone ShortURL microservice generating unique keys, mapping long URLs and handling high-speed redirects.",
      "Used Redis Pub/Sub for instant sync between the ShortURL and analytics services, plus caching for mappings and click counts.",
    ],
  },
];

// Personal projects — shipped with live demos.
export const personalProjects = [
  {
    key: "fashion",
    title: "Fashion Ethnic",
    blurb:
      "An e-commerce platform for traditional ethnic wear with cart, wishlist, AI-driven outfit suggestions and powerful search — cultural elegance meets modern tech.",
    stack: ["React", "Node.js", "MongoDB", "AI"],
    link: "https://fashion-ethnic.vercel.app/",
    repo: "https://github.com/aharshsingh/FashionEthnic",
    featured: true,
  },
  {
    key: "manageit",
    title: "ManageIt",
    blurb:
      "A MERN task manager with JWT auth, reminders and automated email notifications. Add, edit, complete and delete tasks with a clean, intuitive interface.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    link: "https://manageit-nine.vercel.app/",
    featured: true,
  },
  {
    key: "examlynk",
    title: "ExamLynk",
    blurb:
      "A MERN online test platform with JWT-secured sessions and an hourly cron job that analyzes submissions and emails results automatically.",
    stack: ["React", "Node.js", "Cron", "MongoDB"],
    link: "https://examlynk.vercel.app/",
    note: "Desktop only",
  },
  {
    key: "tensight",
    title: "Tensight IMS",
    blurb:
      "An Inventory Management System with category/product/stock tracking, a graphical dashboard and low-stock risk alerts for real-time inventory control.",
    stack: ["React", "Node.js", "Charts"],
    link: "https://tensight.netlify.app/",
  },
  {
    key: "crypto",
    title: "CryptoTicker",
    blurb:
      "A crypto market analysis platform with real-time price tracking, charts and trend insights wrapped in a clean, interactive dashboard.",
    stack: ["React", "API", "Charts"],
    link: "https://cryptoticker.netlify.app/",
  },
  {
    key: "calculator",
    title: "Scientific Calculator",
    blurb:
      "A feature-rich scientific calculator with trig, logs, exponentials, memory ops and a persistent dark/light mode — fully responsive across devices.",
    stack: ["React", "JavaScript"],
    link: "https://scientificcalulator.netlify.app/",
  },
];
