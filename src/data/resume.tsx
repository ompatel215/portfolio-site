import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Om Patel",
  initials: "OP",
  url: "https://ompatelcodes.com",
  location: "College Park, MD",
  locationLink: "https://www.google.com/maps/place/college+park+md",
  description:
    "Data Science Grad Student @ UMD | Penn State CS Alum | SWE, ML & Data Engineering",
  summary:
    "I'm a Data Science graduate student at the [University of Maryland, College Park](/#education), following a Computer Science degree from [Penn State Abington](/#education). My work spans software engineering, machine learning, and data engineering, with a recurring focus on healthcare and real-world operational data — from legal document analysis to hospital readmission prediction to market sentiment modeling. I like building end-to-end: pipelines, models, and the interfaces that make them usable.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ompatel9213@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ompatel215",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ompatel8204/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: FileTextIcon,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ompatel9213@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],

  education: [
    {
      school: "University of Maryland, College Park",
      href: "https://umd.edu",
      degree: "M.S. in Data Science",
      logoUrl: "/umd.svg",
      start: "2026",
      end: "Dec 2027 (Expected)",
    },
    {
      school: "Pennsylvania State University, Abington",
      href: "https://abington.psu.edu",
      degree: "B.S. in Computer Science",
      logoUrl: "/psu.svg",
      start: "2022",
      end: "May 2026",
    },
  ],

  projects: [
    {
      title: "GymManager",
      href: "#",
      dates: "Freelance Project",
      active: true,
      category: "flagship",
      description:
        "Internal web application built for a gym's staff and trainers to log classes and hours, and for owners to track equipment status via member-facing QR codes that report issues in real time. (Client name, branding, personal information, equipment data, and QR code contents have been redacted/replaced for this portfolio.)",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
      links: [],
      image: "",
      video: "",
    },

    // --- Undergraduate (Penn State Abington) ---
    {
      title: "Smart Hospital OS Simulator",
      href: "https://github.com/ompatel215/smart-hospital-os",
      dates: "Dec 2025",
      active: true,
      category: "undergrad",
      description:
        "Simulates core operating system scheduling concepts applied to a healthcare setting: FCFS, Round Robin, and Priority scheduling algorithms, plus ICU bed allocation logic.",
      technologies: ["C"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/smart-hospital-os", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Market Pulse",
      href: "https://github.com/ompatel215/market-pulse",
      dates: "Apr 2026",
      active: true,
      category: "undergrad",
      description:
        "Real-time market sentiment dashboard that aggregates Reddit, Google News, and Stocktwits data, scores it with VADER sentiment analysis and LDA topic modeling, and overlays sentiment against stock price history.",
      technologies: ["Python", "VADER", "LDA", "yfinance"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/market-pulse", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Streaming Platform Churn Analysis",
      href: "https://github.com/ompatel215/streaming-platform-churn-analysis",
      dates: "Feb 2026",
      active: true,
      category: "undergrad",
      description:
        "End-to-end subscriber churn analysis for a streaming platform: monthly churn by subscription tier, revenue at risk, cohort survival curves at 3/6/12 months, and customer lifetime value by acquisition channel, presented in an interactive Tableau dashboard.",
      technologies: ["SQL", "Tableau"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/streaming-platform-churn-analysis", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Adaptive Quiz Generator",
      href: "https://github.com/ompatel215/Adaptive-Quiz-Generator",
      dates: "Apr 2026",
      active: true,
      category: "undergrad",
      description:
        "Upload a PDF and get a quiz that adapts to your weak spots: topics are auto-discovered via K-means clustering on sentence embeddings, and per-topic mastery is tracked with an exponential moving average. Runs against a local LLM backend (Ollama or Apple MLX).",
      technologies: ["Python", "K-means", "Ollama", "MLX"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/Adaptive-Quiz-Generator", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Fourward",
      href: "https://github.com/ompatel215/FourwardLang",
      dates: "Apr 2025",
      active: true,
      category: "undergrad",
      description:
        "A custom programming language and interpreter built from scratch, supporting variable declarations, control structures (if/else, while loops), functions, and error handling.",
      technologies: ["Python"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/FourwardLang", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Misinformation Detector",
      href: "https://github.com/ompatel215/misinfo_warning",
      dates: "Dec 2025",
      active: true,
      category: "undergrad",
      description:
        "Flask app that flags likely misinformation in a block of text using a trained classifier.",
      technologies: ["Python", "Flask"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/misinfo_warning", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Secure Messaging",
      href: "https://github.com/ompatel215/secure-messaging",
      dates: "Dec 2025",
      active: true,
      category: "undergrad",
      description:
        "Encrypted client-server messaging app: RSA key exchange for secure session setup, AES message encryption, and a lightweight anomaly detector that flags suspicious messages (injection patterns, abnormal text entropy) in real time.",
      technologies: ["Python", "Flask", "Cryptography"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/secure-messaging", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Log Analysis & Alerting System",
      href: "https://github.com/ompatel215/Log-Analysis-Alerting-System",
      dates: "Sep 2025",
      active: true,
      category: "undergrad",
      description:
        "Log analysis and alerting pipeline: parses and sorts raw log files, flags anomalies against expected system-event patterns, visualizes anomaly trends, and includes a small GUI for browsing results.",
      technologies: ["Python", "Pandas"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/Log-Analysis-Alerting-System", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nimbus",
      href: "https://github.com/ompatel215/nimbus",
      dates: "Sep 2024",
      active: true,
      category: "undergrad",
      description:
        "Mobile weather-guessing game: players guess a city's current temperature at increasing difficulty tiers, build daily streaks, and compete on a leaderboard, backed by a live weather API.",
      technologies: ["React Native", "Expo", "TypeScript"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/nimbus", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },

    // --- Personal Projects ---
    {
      title: "Legal Document Analyzer",
      href: "https://github.com/ompatel215/LegalDocumentAnalyzer",
      dates: "Mar 2025",
      active: true,
      category: "personal",
      description:
        "AI-powered legal document analyzer that autonomously reads, interprets, and summarizes legal documents, extracts key clauses, detects risks, and generates brief reports — built to save time for legal professionals on tedious document review.",
      technologies: ["Python"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/LegalDocumentAnalyzer", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Car Finder Agent Network",
      href: "https://github.com/ompatel215/CarFinder",
      dates: "Sep 2025",
      active: true,
      category: "personal",
      description:
        "AI-powered car-finding system built from three specialized agents: a scraping agent that pulls listings from Craigslist, AutoTrader, and Cars.com, a filtering agent that scores listings against user preferences with weighted ranking, and an agent that drafts negotiation emails.",
      technologies: ["Python", "Selenium"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/CarFinder", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hospital Readmission Analysis",
      href: "https://github.com/ompatel215/hospital-readmission-analysis",
      dates: "Apr 2025",
      active: true,
      category: "personal",
      description:
        "Analyzes hospital patient data to identify patterns in readmission rates, with an interactive dashboard surfacing insights for healthcare improvement.",
      technologies: ["Python"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/hospital-readmission-analysis", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Philly Traffic Optimization & Prediction Dashboard",
      href: "https://github.com/ompatel215/Philly-Traffic-Optimization-Prediction-Dashboard",
      dates: "Jan 2026",
      active: true,
      category: "personal",
      description:
        "Predicts traffic congestion across Philadelphia and surfaces actionable insights for optimal routing and urban planning.",
      technologies: ["Python"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/Philly-Traffic-Optimization-Prediction-Dashboard", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "ICD-10 Text Classification",
      href: "https://github.com/ompatel215/ICD-10-Text-Classification",
      dates: "Oct 2025",
      active: true,
      category: "personal",
      description:
        "Early-stage project to classify clinical text into ICD-10 diagnostic codes: text preprocessing pipeline and initial exploratory analysis of a sample clinical dataset. Model training in progress.",
      technologies: ["Python", "Jupyter", "NLTK"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/ICD-10-Text-Classification", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Used Car Market Intelligence Analysis",
      href: "https://github.com/ompatel215/Used-Car-Market-Intelligence-Analysis",
      dates: "Feb 2026",
      active: true,
      category: "personal",
      description:
        "In-progress exploratory analysis of a used-car listings dataset: cleaning and standardizing price, mileage, and fuel-type fields as a first step toward market pricing insights.",
      technologies: ["Python", "Pandas", "SQL"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/Used-Car-Market-Intelligence-Analysis", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "CarVerse AI",
      href: "https://github.com/ompatel215/carverse-ai",
      dates: "Aug 2025",
      active: true,
      category: "personal",
      description:
        "AI-assisted car specification lookup tool: falls back to OpenAI to generate realistic multi-year, multi-trim vehicle specs (power, transmission, drivetrain) when the CarQuery/NHTSA APIs return no data, with in-memory caching to avoid redundant calls.",
      technologies: ["React", "FastAPI", "OpenAI API"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/carverse-ai", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tally",
      href: "https://github.com/ompatel215/Tally",
      dates: "May 2026",
      active: true,
      category: "personal",
      description:
        "Small-business bookkeeping web app: dashboard with cash-flow charts, expense and deposit tracking, receipt management, vendor records, and multi-org support behind Supabase auth.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      links: [
        { type: "Source", href: "https://github.com/ompatel215/Tally", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [],
} as const;
