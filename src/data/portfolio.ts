import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "Sumit Jaiswal",
  title:
    "Senior Full Stack Developer | MERN Stack | React.js | Next.js | Node.js | AI Integration",
  shortIntro:
    "Building scalable web and mobile products across frontend, backend, cloud, and AI — from architecture to production.",
  summary:
    "Senior Full Stack Developer with 6+ years of experience designing, developing, and deploying scalable web and mobile applications. Strong hands-on expertise in JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js, with additional backend depth in Python, Django, FastAPI, Laravel, and PHP. Experienced with PostgreSQL, MongoDB, MySQL, AWS, Docker, and CI/CD, plus OpenAI, LangChain, RAG, and AI-powered product features. Proven in technical leadership, end-to-end project ownership, and reliable production delivery.",
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
    shareTitle: "Sumit Jaiswal | Senior Full Stack Developer",
    shareDescription:
      "Senior Full Stack Developer with 6+ years of experience building scalable web and mobile applications across MERN, React.js, Next.js, Node.js, Python, Laravel/PHP, cloud infrastructure, and AI/LLM integrations. Experienced in REST APIs, AWS, Docker, CI/CD, and end-to-end project delivery.",
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
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Python", level: 82 },
        { name: "PHP", level: 90 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 78 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Flutter", level: 70 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "Laravel", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "Django", level: 78 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 90 },
      ],
    },
    {
      title: "AI & Integrations",
      skills: [
        { name: "OpenAI / LLMs", level: 85 },
        { name: "LangChain / RAG", level: 82 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 86 },
        { name: "Git", level: 90 },
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
        "Leading hybrid web and mobile application development using MERN stack components, Laravel, and AI-assisted tools; owning features from design to production deployment.",
        "Building production features with OpenAI, LangChain, RAG pipelines, FastAPI, Django, and Laravel while coordinating technical decisions across the team.",
      ],
    },
    {
      role: "Senior Full Stack Engineer",
      company: "Jamtech Technologies",
      period: "Jun 2023 – Jan 2026",
      highlights: [
        "Led the development team across multiple concurrent client projects — coordination, code reviews, and technical decisions.",
        "Built scalable web apps, PWAs, and RESTful APIs with Node.js, Express, Laravel, Django, and FastAPI.",
        "Owned complex projects end-to-end and deployed on AWS with DevOps practices for reliable production releases.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Gautam Tech Solutions",
      period: "Jun 2022 – Jun 2023",
      highlights: [
        "Owned full lifecycle of web applications including server management and production issue resolution.",
        "Built and extended backend services with Laravel, Django, and FastAPI based on evolving business requirements.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Bhavya Technologies",
      period: "Aug 2020 – Sep 2021",
      highlights: [
        "Built responsive websites and web applications covering frontend, backend, and basic SEO using PHP, Laravel, and JavaScript.",
        "Improved application performance and code quality through iterative refactoring.",
      ],
    },
    {
      role: "Web Developer",
      company: "Sam Softech Consultancy",
      period: "Feb 2019 – Mar 2020",
      highlights: [
        "Developed websites using PHP across frontend and backend with Laravel and CodeIgniter.",
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
