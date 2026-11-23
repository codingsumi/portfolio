import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "Sumit Jaiswal",
  title: "Full Stack Developer | Laravel • PHP • Modern Web & AI",
  shortIntro:
    "Building scalable products with Laravel, modern JavaScript, and AI — from architecture to production.",
  summary:
    "Full Stack Developer with 6+ years of experience building scalable web applications primarily with Laravel and PHP, along with modern JavaScript frameworks. Strong hands-on expertise in Laravel, CodeIgniter, React, Next.js, Node.js, FastAPI, Django, PostgreSQL, MySQL, and RESTful APIs. Experienced in leading development teams, owning complex projects end-to-end, and integrating third-party services and AI-powered features into production systems.",
  contact: {
    email: "someitjaiswal.sj.97@gmail.com",
    phone: "+91 73238 37297",
    location: "Lucknow, Uttar Pradesh",
    relocate: "Anywhere",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sumit-jaiswal-dev/",
      platform: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/codingsumi",
      platform: "github",
    },
  ],
  resume: {
    pdfPath: "/Sumit_Jaiswal_Resume.pdf",
    sharePath: "/resume",
    fileName: "Sumit_Jaiswal_Resume.pdf",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      title: "Languages",
      skills: [
        { name: "PHP", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "PHP Frameworks",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "CodeIgniter", level: 85 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Flutter", level: 70 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Django", level: 78 },
        { name: "RESTful APIs", level: 92 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "LangChain / RAG", level: 82 },
        { name: "OpenAI / LLMs", level: 85 },
        { name: "AWS / Docker", level: 80 },
        { name: "Git / CI/CD", level: 88 },
      ],
    },
  ],
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Skyestone AI Pvt Ltd",
      period: "Jan 2026 – Present",
      current: true,
      highlights: [
        "Leading hybrid web and mobile application development using Laravel, PHP, and AI tools.",
        "Building production features with Laravel, OpenAI, LangChain, FastAPI, Django, and RAG pipelines.",
      ],
    },
    {
      role: "Senior Full Stack Engineer",
      company: "Jamtech Technologies",
      period: "Jun 2023 – Jan 2026",
      highlights: [
        "Led the development team across multiple concurrent client projects.",
        "Built scalable web apps, PWAs, and RESTful APIs with Laravel, Node.js, Express, Django, and FastAPI.",
        "Owned complex projects end-to-end — architecture, delivery, and iteration.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Gautam Tech Solutions",
      period: "Jun 2022 – Jun 2023",
      highlights: [
        "Delivered full-stack features across PHP/Laravel backends and modern frontends.",
        "Collaborated with stakeholders to ship reliable, production-ready releases.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Bhavya Technologies",
      period: "Aug 2020 – Sep 2021",
      highlights: [
        "Developed and maintained web applications with PHP frameworks and JavaScript.",
        "Improved application performance and code quality through iterative refactoring.",
      ],
    },
    {
      role: "Web Developer",
      company: "Sam Softech Consultancy",
      period: "Feb 2019 – Mar 2020",
      highlights: [
        "Built and maintained client websites and web applications.",
        "Established a foundation in full-stack development and client delivery.",
      ],
    },
  ],
  projects: [
    {
      title: "Aras Promotions",
      description:
        "Enterprise promotions platform where I owned full-stack delivery as a Full Stack Developer — Laravel/PHP APIs and MySQL data models powering event management, brand ambassador workflows, payroll, payment processing, and operational reporting. Built scalable integrations with Dwolla, QuickBooks, Comdata, and OneSignal, plus an Ionic/Angular client layer, to turn complex field promotions into reliable, production-grade business operations.",
      stack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Ionic",
        "Angular",
        "RESTful APIs",
        "Dwolla",
        "QuickBooks",
        "Comdata",
        "OneSignal",
      ],
      featured: true,
    },
    {
      title: "All Paws Pet Wash Connection",
      description:
        "On-demand self-service pet wash platform for physical locations — pet owners select a service, pay digitally, and get notified in real time. Delivered end-to-end full-stack and native mobile apps with guest, registered, and premium access; Stripe card management and recurring subscriptions; Nayax hardware payment flows; and OneSignal push notifications for a production-ready pet-care operations stack.",
      stack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Kotlin",
        "Swift",
        "Stripe",
        "Nayax",
        "OneSignal",
      ],
      featured: true,
    },
    {
      title: "Onleetech",
      description:
        "On-demand technician marketplace connecting customers with technicians through real-time service requests and a First-In-First-Out assignment model — once a technician receives a request, it locks for everyone else. Built the Laravel/PHP + Vue.js/Inertia web stack, Kotlin and Swift apps, Stripe Connect payouts and subscriptions, Firebase/OneSignal realtime alerts, and interactive accept popups for scalable marketplace operations.",
      stack: [
        "Laravel",
        "PHP",
        "Vue.js",
        "Inertia.js",
        "MySQL",
        "Kotlin",
        "Swift",
        "Stripe",
        "Firebase",
        "OneSignal",
      ],
      featured: true,
    },
    {
      title: "Iron Method AI",
      description:
        "AI-powered fitness and supplement e-commerce platform that pairs online shopping with personalized training. Built Laravel/PHP and Vue.js/Inertia commerce flows, QuickPose AI movement assessment, OpenAI-generated one-month workout plans, Agora video calling, ShipStation fulfillment, and Firebase/OneSignal realtime updates — combining computer vision, AI personalization, and scalable commerce architecture.",
      stack: [
        "Laravel",
        "PHP",
        "Vue.js",
        "Inertia.js",
        "MySQL",
        "OpenAI",
        "QuickPose AI",
        "Agora",
        "ShipStation",
        "Firebase",
        "OneSignal",
      ],
      featured: true,
    },
    {
      title: "Car Comfort",
      description:
        "Full-stack car comfort platform with a Next.js web experience, Express/Node APIs, MySQL data layer, Firebase services, Flutter mobile app, WebSocket real-time updates, and push notifications for live operations.",
      stack: [
        "Node.js",
        "Next.js",
        "Express.js",
        "MySQL",
        "Firebase",
        "WebSocket",
        "Flutter",
        "Real-time Notifications",
      ],
      href: "https://carcomfort-llc.com/",
      featured: true,
    },
    {
      title: "Sumit AI",
      description:
        "AI Health Consultant that delivers conversational health guidance powered by OpenAI, with a modern Next.js frontend and a robust Node.js + Prisma backend on PostgreSQL.",
      stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "OpenAI"],
      featured: true,
    },
    {
      title: "Sumit RAG",
      description:
        "Document Q&A system that indexes knowledge bases with ChromaDB and answers questions via LangChain + OpenAI, served through a FastAPI backend.",
      stack: ["FastAPI", "ChromaDB", "LangChain", "OpenAI"],
      featured: true,
    },
  ],
  education: [
    {
      degree: "MCA",
      institution: "BD College, Patna",
      period: "2021 – 2023",
    },
    {
      degree: "BCA",
      institution: "T.P.S. College, Patna",
      period: "2015 – 2018",
    },
  ],
};
