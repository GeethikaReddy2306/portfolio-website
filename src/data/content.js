import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiVite,
  SiNodedotjs, SiExpress, SiNestjs, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiDocker, SiVercel, SiGit, SiGithub, SiFigma, SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// ===============================
// CHANGE THIS
// Update skill categories and items
// Each skill: { name, icon, color }
// ===============================
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
          { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
      
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "Vite", icon: SiVite, color: "#bd34fe" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
      { name: "Express", icon: SiExpress, color: "#ffffff" }
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" }
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "#ff9900" },
     
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#a259ff" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
    ],
  },
];

// ===============================
// CHANGE THIS
// Add your projects
// ===============================
export const projects = [
  {
    title: "QuickHire - Recruitment Platform",
    category: "Full Stack Web Application",
    description:
      "A production-ready role-based recruitment platform connecting job seekers and recruiters. Built with secure JWT authentication, resume uploads, profile management, job posting, and application tracking. Deployed entirely on AWS.",
    image: "/images/quickhire.png",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS S3",
      "AWS SES",
      "JWT",
      "CSS",
    ],

    features: [
      "Role-based Authentication",
      "Recruiter Dashboard",
      "Resume Upload",
      "Job Posting",
      "Application Tracking",
      "AWS Deployment",
    ],

    github: "https://github.com/GeethikaReddy2306/QuickHire",
    demo: "http://13.201.69.108/",
  },

  {
    title: "EventNest - Event Booking Platform",
    category: "Full Stack Web Application",
    description:
      "A full-stack event booking platform featuring OTP email verification, JWT authentication, real-time seat availability, booking management, and automated sold-out event detection.",
    image: "/images/eventnest.png",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Tailwind CSS",
    ],

    features: [
      "OTP Verification",
      "JWT Authentication",
      "Seat Booking",
      "Real-time Availability",
      "Admin Dashboard",
      "Sold-Out Notifications",
    ],

    github: "https://github.com/GeethikaReddy2306/EventNest",
    demo: "https://event-nest-d52a.vercel.app/",
  },

  {
    title: "Restaurant Management System",
    category: "Full Stack Web Application",
    description:
      "A restaurant management application enabling menu management, order placement, customer management, and secure authentication with responsive user and admin dashboards.",
    image: "/images/management.png",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "CSS",
    ],

    features: [
      "Menu Management",
      "Online Ordering",
      "Customer Dashboard",
      "Admin Panel",
      "Authentication",
      "CRUD Operations",
    ],

    github: "https://github.com/GeethikaReddy2306/-restaurant-management",
    demo: "YOUR_LIVE_LINK",
  },

  {
    title: "Notes Application",
    category: "Full Stack Web Application",
    description:
      "A secure cloud-based notes application allowing users to create, edit, search, and delete notes  and persistent MongoDB storage.",
    image: "/images/notesapp.png",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      
    ],

    features: [
      
      "Create Notes",
      "Edit Notes",
      "Delete Notes",
      "Search Notes",
      "Responsive Design",
    ],

    github: "https://github.com/GeethikaReddy2306/notes-app",
    demo: "https://notes-app-1-wezr.onrender.com/",
  },

  {
    title: "Pokémon Explorer",
    category: "Frontend Application",
    description:
      "A responsive Pokémon Explorer built using the PokéAPI, allowing users to search Pokémon, explore abilities, view stats, and browse detailed information through a clean user interface.",
    image: "/images/pokemon.png",

    tech: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
    ],

    features: [
      "PokéAPI Integration",
      "Search Pokémon",
      "Detailed Stats",
      "Abilities",
      "Responsive UI",
      "Dynamic Routing",
    ],

    github: "https://github.com/GeethikaReddy2306/-pokemon-api",
    demo: "https://pokemon-api-iota-ruby.vercel.app/",
  },
];
// ===============================
// CHANGE THIS
// Experience entries
// ===============================
export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Company Name",
    period: "Jun 2024 — Sep 2024",
    location: "Remote",
    bullets: [
      "Built and shipped 3 production features used by 10k+ users.",
      "Reduced API response times by 38% through query optimization.",
      "Collaborated with design to deliver pixel-perfect, accessible UI.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2023 — Present",
    location: "Worldwide",
    bullets: [
      "Delivered 8+ client projects across e-commerce, dashboards, and marketing sites.",
      "Owned full lifecycle from discovery to deployment and post-launch support.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 — Present",
    location: "GitHub",
    bullets: [
      "Contributed to popular React libraries with merged PRs.",
      "Maintained personal open-source utilities with 200+ stars.",
    ],
  },
];

// ===============================
// CHANGE THIS
// Certificate entries (use real image URLs)
// ===============================
export const certificates = [
  {
    title: "Core Java",
    issuer: "CodeTantra",
    date: "2025",
    image: "/images/java.png",
    link: "https://qiscet.codetantra.com/cert/certificate.jsp?certId=CT279-uHfIgUi-c28",
  },
  {
    title: "Full Stack Web Development (Delta)",
    issuer: "Apna College",
    date: "2026",
    image: "/images/mern.png",
    link: "https://drive.google.com/file/d/10piLueLxzEvqyIcaR8MHF_PSgQtJngKN/view",
  },
];

// ===============================
// CHANGE THIS
// About highlights / education
// ===============================
export const highlights = [
  { label: "Years coding", value: "2+" },
  { label: "Projects shipped", value: "5+" }
  
];

export const education = [
  {
    school: "QIS College Of Engineering & Technology",
    degree: "B.Tech Computer Science",
    period: "2023 — 2027",
    detail: "Relevant coursework: Full Stack Developement,Data Structures, Algorithms, Distributed Systems, ML.",
  },
];
