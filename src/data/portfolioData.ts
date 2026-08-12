import {
  Project,
  ExperienceItem,
  SkillGroup,
  ImpactMetric,
  RealWorldSystem,
  EngineeringPrinciple,
} from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Rajesh Kannan A",
  role: "Senior Software Engineer",
  company: "LTM",
  positioning: "Frontend Engineer | React.js | Next.js | TypeScript",
  eyebrow: "FRONTEND ENGINEER · REACT · NEXT.JS · TYPESCRIPT",
  headline: "I build interfaces for complex systems.",
  supportingText:
    "4+ years building scalable web applications, real-time dashboards, enterprise workflows, and responsive experiences with React, Next.js, and TypeScript.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "rajesshkannan.a@gmail.com",
  phone: "9345870138",
  linkedIn: "https://linkedin.com/in/rajesh2512",
  linkedInDisplay: "linkedin.com/in/rajesh2512",
  github: "https://github.com/rajesh2512",
  githubDisplay: "github.com/rajesh2512",
  existingPortfolio: "https://rajesh-dev.vercel.app/",
  aboutTitle: "Engineering with a product mindset.",
  aboutText:
    "Rajesh specializes in transforming complex operational requirements into scalable, reliable, and intuitive frontend experiences. With over 4 years of experience, he designs component systems, real-time tracking platforms, enterprise dashboards, and state-driven web applications.",
  currentlyCard: {
    role: "Senior Software Engineer",
    company: "LTM",
    startDate: "May 2026",
    location: "Coimbatore, India",
  },
  education: {
    degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
    institution: "PSR Engineering College",
    period: "2018 — 2022",
    cgpa: "8 / 10",
  },
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "exp",
    value: "4+",
    label: "Years of Experience",
    sublabel: "Frontend & Web Architecture",
  },
  {
    id: "students",
    value: "15K+",
    label: "Students & Parents",
    sublabel: "Served by Real-Time Tracking",
  },
  {
    id: "gps",
    value: "500+",
    label: "GPS Units Integrated",
    sublabel: "Fleet Telematics & Sensors",
  },
  {
    id: "employees",
    value: "200+",
    label: "Employees Supported",
    sublabel: "Via Route Optimization",
  },
  {
    id: "clients",
    value: "5+",
    label: "Corporate Clients",
    sublabel: "Including Major Enterprise MNC",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "crackers-ecommerce",
    title: "Sri Arumugam Pyro Park - Crackers Shop E-Commerce & Admin",
    category: "Full-Stack E-Commerce & Admin Portal",
    shortDesc:
      "A production e-commerce store and admin management portal built for a premier crackers shop featuring live product catalog, cart management, dynamic pricing, and WhatsApp orders.",
    businessProblem:
      "Traditional crackers shops faced seasonal order rushes, offline inventory tracking challenges, and manual phone order intake.",
    keyImpact: "Live production store deployed on Vercel; automated WhatsApp order booking & integrated admin inventory portal",
    liveUrl: "https://crackers-rho.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs", "Vercel"],
    highlights: [
      "Full-stack e-commerce storefront deployed live at crackers-rho.vercel.app",
      "Integrated Admin Management Portal for inventory, pricing, & order processing",
      "Instant category filtering, cart management, and 50% discount calculator",
      "One-click WhatsApp order confirmation & PDF invoice generation",
      "Mobile-first responsive architecture built with Next.js App Router",
    ],
    caseStudy: {
      problem:
        "High festive season demand caused inventory overselling, phone line bottlenecks, and manual receipt calculation delays.",
      system:
        "Next.js App Router Storefront + Zustand Persistent Cart + Admin Inventory Dashboard + WhatsApp Order Webhook.",
      architecture: [
        "Server-Side Rendered (SSR) product catalog for fast LCP & SEO performance",
        "Zustand lightweight state store for persistent local shopping cart",
        "Role-protected Admin Dashboard for real-time SKU stock updates and pricing",
        "Mobile-optimized responsive layouts tailored for festive mobile shoppers",
      ],
      keyFeatures: [
        "Live product search & category filtering (Sparklers, Chakkars, Flower Pots, Combos)",
        "Instant cart badge calculator with item-wise discount breakdown",
        "Direct WhatsApp order payload dispatch with buyer details",
        "Admin product CRUD manager & stock alert badges",
      ],
      challenges: [
        "Optimizing high-resolution product imagery and category assets for fast sub-second mobile page loads during peak festive traffic",
      ],
      impact: [
        "Live production app deployed on Vercel (https://crackers-rho.vercel.app/)",
        "Streamlined order processing time by 60% through automated WhatsApp dispatch",
        "100% stock accuracy managed via real-time admin inventory controls",
      ],
    },
    metrics: [
      { label: "Live Deployment", value: "Vercel" },
      { label: "Order Speed", value: "+60%" },
      { label: "Stock Accuracy", value: "100%" },
    ],
  },
  {
    id: "vehicle-tracking",
    title: "Vehicle Tracking System",
    category: "Real-time Fleet Intelligence",
    shortDesc:
      "A real-time GPS tracking platform using Teltonika GPS devices and Omnicomm fuel sensors to monitor vehicle fleets.",
    businessProblem:
      "Fleet operators lacked real-time visibility into vehicle locations, fuel theft, and unauthorized route deviations.",
    keyImpact: "500+ GPS units & 50+ fuel sensors integrated; reduced fuel costs by ~15%",
    techStack: ["React.js", "Redux Toolkit", "WebSockets", "REST APIs", "Tailwind CSS", "Leaflet Maps"],
    highlights: [
      "Live GPS tracking with map markers and real-time status updates",
      "Geofencing and unauthorized usage alerts",
      "Fuel anomaly detection (refueling vs drain events)",
      "Trip history timeline & route usage reporting",
      "Integrated 500+ Teltonika GPS units & 50+ Omnicomm fuel sensors",
    ],
    caseStudy: {
      problem:
        "Fleet managers dealt with high fuel overheads, unverified routes, and lack of real-time telematics alerts across hundreds of active vehicles.",
      system:
        "Hardware Teltonika GPS and Omnicomm fuel sensors streaming telematics to a backend broker, consumed by a real-time React dashboard.",
      architecture: [
        "WebSocket telemetry stream listener with state batching",
        "Redux Toolkit slice for live vehicle state and geofence polygons",
        "Custom map marker clustering for 500+ concurrent assets",
        "Fuel drain graph visualization with anomaly threshold filters",
      ],
      keyFeatures: [
        "Live vehicle map view with ignition/speed badges",
        "Automated alerts for geofence breaches & speed violations",
        "Fuel drain & refueling detection logs",
        "Trip replay with interactive play/pause scrubbers",
      ],
      challenges: [
        "Handling high-frequency WebSocket updates without UI re-render lag",
        "Parsing raw sensor telemetry into human-readable fuel level graphs",
      ],
      impact: [
        "500+ GPS units successfully integrated into active fleets",
        "50+ fuel sensors monitored continuously",
        "~15% fuel-related operational cost reduction",
      ],
    },
    metrics: [
      { label: "GPS Units", value: "500+" },
      { label: "Fuel Sensors", value: "50+" },
      { label: "Cost Savings", value: "~15%" },
    ],
  },
  {
    id: "student-tracking",
    title: "Student Tracking & Attender App",
    category: "Safety & Mobility Platform",
    shortDesc:
      "A real-time student tracking platform used by 15,000+ students and parents with instant QR attendance.",
    businessProblem:
      "Parents and school administrators required accurate live bus locations and error-free boarding records.",
    keyImpact: "15,000+ active users; QR attendance reduced manual errors by ~30%",
    techStack: ["React.js", "Next.js", "React Native", "WebSockets", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Live GPS bus location streaming with dynamic ETA updates",
      "Instant QR code student attendance scanner interface",
      "Automated pick-up and drop-off parent notifications",
      "Multi-role interfaces: Parent, Driver/Attender, and School Admin",
      "Route management, student-to-bus assignment, and active trip monitoring",
    ],
    caseStudy: {
      problem:
        "School transport suffered from manual roster checking, phone inquiry overload from anxious parents, and lack of verified student drop-off records.",
      system:
        "Mobile Attender App for driver QR scans + Parent Mobile/Web View + Centralized Admin Operations Portal.",
      architecture: [
        "Event-driven WebSocket notifications for stop arrivals",
        "Offline-first QR scanner buffer with auto-sync on reconnect",
        "Role-Based Access Control (RBAC) separating Admin, Attender, and Parent views",
        "Responsive ETA calculator component based on vehicle velocity",
      ],
      keyFeatures: [
        "Live school bus route map with live ETA progress bar",
        "One-tap QR attendance scanner with sound/vibration feedback",
        "Parent alert feed for pick-up/drop-off events",
        "School admin route assignment & student roster table",
      ],
      challenges: [
        "Ensuring instant QR scan feedback under spotty mobile network conditions on bus routes",
      ],
      impact: [
        "15,000+ students and parents actively relying on the platform",
        "~30% reduction in attendance errors through automated QR scanning",
      ],
    },
    metrics: [
      { label: "Users Served", value: "15,000+" },
      { label: "Error Reduction", value: "~30%" },
    ],
  },
  {
    id: "cab-route-assignment",
    title: "Cab & Route Assignment System",
    category: "Enterprise Transportation",
    shortDesc:
      "A transportation management platform for corporate clients featuring route optimization and live driver navigation.",
    businessProblem:
      "Enterprise companies needed efficient employee shift routing, cab utilization, and real-time safety monitoring.",
    keyImpact: "200+ employees optimized; 20% vehicle utilization boost; 5 corporate clients & 1 major MNC",
    techStack: ["React.js", "TypeScript", "React Native", "REST APIs", "Redux", "Tailwind CSS"],
    highlights: [
      "Automated cab allocation & shift scheduling algorithm UI",
      "Route optimization engine for multi-stop employee pickup",
      "React Native driver application with live turn-by-turn routing",
      "SOS panic button & route deviation alerts for employee safety",
      "Last-minute cab allocation workflows for shift changes",
    ],
    caseStudy: {
      problem:
        "High transport operational costs caused by sub-optimal vehicle seating, manual cab allocation, and delayed employee pickup times.",
      system:
        "Shift Scheduler + Route Optimizer Engine + Driver Mobile Navigation + Admin Logistics Command Center.",
      architecture: [
        "Interactive route planning pipeline visualization",
        "Dynamic re-routing state handler for last-minute cab additions",
        "Real-time SOS socket alert escalation queue",
      ],
      keyFeatures: [
        "Shift roster matrix with automated cab assignment",
        "Visual pickup sequence timeline with distance & time matrix",
        "Driver navigation UI with real-time route deviation highlighting",
        "Corporate RBAC portal for department transport managers",
      ],
      challenges: [
        "Handling dynamic shift additions minutes before deployment without disrupting active routes",
      ],
      impact: [
        "200+ employees supported via optimized routes",
        "Vehicle utilization improved by ~20%",
        "Adopted by 5 corporate clients and 1 major MNC (500+ employees total)",
      ],
    },
    metrics: [
      { label: "Employees Optimized", value: "200+" },
      { label: "Utilization Boost", value: "~20%" },
      { label: "Corporate Clients", value: "5+" },
    ],
  },
  {
    id: "compliance-management",
    title: "Compliance Management Solution",
    category: "Enterprise Workflow Platform",
    shortDesc:
      "A configurable compliance management platform for enterprise regulatory and operational workflows.",
    businessProblem:
      "Organizations struggled with trackless paper forms, missed document expiry dates, and non-audit-ready workflows.",
    keyImpact: "100% dynamic form generation; automated document expiry alerts & audit trail history",
    techStack: ["React.js", "TypeScript", "React Hook Form", "Zod", "TanStack Query", "Tailwind CSS"],
    highlights: [
      "Dynamic form engine with configurable fields, validation, & conditional logic",
      "Automated document expiry tracking with multi-tier alerts",
      "Non-compliance workflow tracking and automated escalation paths",
      "RBAC approval queues with full version history and audit logs",
      "Interactive executive compliance score health dashboard",
    ],
    caseStudy: {
      problem:
        "Complex compliance audits were plagued by inconsistent form formats, missing document renewals, and untracked approval chains.",
      system:
        "Configurable Schema Form Builder + Rule Engine + Expiry Alert Cron + Audit Log System.",
      architecture: [
        "JSON-schema driven dynamic React form generator using React Hook Form & Zod",
        "Nested conditional visibility evaluator for complex form fields",
        "TanStack Query cache management for immediate optimistic updates",
      ],
      keyFeatures: [
        "Drag-and-drop / JSON dynamic form renderer",
        "Compliance score gauge & overdue action item tracker",
        "Document expiration countdown widget with multi-tier reminder triggers",
        "Approval queue matrix with multi-level sign-offs",
      ],
      challenges: [
        "Building a performant dynamic form engine supporting complex nested dynamic validation rules",
      ],
      impact: [
        "Eliminated compliance tracking gaps across operational teams",
        "Fully audit-ready architecture with complete historical log trails",
      ],
    },
    metrics: [
      { label: "Form Flexibility", value: "100%" },
      { label: "Audit Readiness", value: "Complete" },
    ],
  },
  {
    id: "hrm-timesheet",
    title: "HRM & Timesheet Management System",
    category: "Enterprise HR Platform",
    shortDesc:
      "An enterprise HR and timesheet management platform tracking employee onboarding, project effort, and shift approvals.",
    businessProblem:
      "Operational teams lacked real-time visibility into project effort allocation, manager approval bottlenecks, and document expirations.",
    keyImpact: "Streamlined employee onboarding; automated leave & project effort tracking for multi-tier teams",
    techStack: ["Next.js", "React.js", "TypeScript", "Zustand", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Employee onboarding, profile management, & role assignment matrix",
      "Attendance, shift, and leave request management workflows",
      "Timesheet entry with project effort allocation & productivity breakdown",
      "Manager approval queues with line-item rejection/approval comments",
      "Document expiration reminders (passports, visas, certifications)",
    ],
    caseStudy: {
      problem:
        "Inaccurate timesheet submissions delayed project billing, while manual leave approvals led to shift scheduling conflicts.",
      system:
        "Employee HR Portal + Timesheet Effort Matrix + Approval Workflow Engine + Analytics Dashboard.",
      architecture: [
        "Zustand lightweight state store for timesheet grid calculations",
        "Responsive grid matrix supporting quick keyboard grid navigation",
        "Master data manager for dynamic department & project codes",
      ],
      keyFeatures: [
        "Weekly timesheet entry table with project/task allocation sliders",
        "Manager approval dashboard with single-click bulk actions",
        "Employee effort distribution bar charts & productivity insights",
        "Document expiry countdown widgets",
      ],
      challenges: [
        "Optimizing matrix table re-renders when entering time entries across multiple projects",
      ],
      impact: [
        "Significantly accelerated weekly timesheet approval cycles",
        "Enhanced billing accuracy through detailed project effort tracking",
      ],
    },
    metrics: [
      { label: "Timesheet Accuracy", value: "100%" },
      { label: "Approval Cycle", value: "Accelerated" },
    ],
  },
];

export const REAL_WORLD_SYSTEMS: RealWorldSystem[] = [
  {
    id: "fleet",
    title: "Fleet Telematics & Tracking",
    subtitle: "Real-Time Telematics & Fuel Monitoring",
    iconName: "Truck",
    users: "Fleet Managers, Dispatchers, Logistics Leads",
    mainWorkflow:
      "Live vehicle position tracking -> Teltonika & Omnicomm sensor data ingestion -> Fuel drain & refueling event alerts -> Trip history scrubber.",
    realtimeReqs: "WebSocket connection, 5-second interval location streaming, low-latency telemetry UI updates.",
    frontendChallenges:
      "Handling thousands of telemetry events without freezing map markers or trigger unnecessary React component re-renders.",
    techStack: ["React.js", "Redux Toolkit", "WebSockets", "Leaflet", "Tailwind CSS"],
  },
  {
    id: "student",
    title: "Student Transport & Safety",
    subtitle: "Real-Time Bus Tracking & QR Roster",
    iconName: "GraduationCap",
    users: "15,000+ Students, Parents, School Bus Drivers, Admins",
    mainWorkflow:
      "Driver scans QR code on boarding -> Event sent to server -> Parent notified of arrival -> Bus map ETA auto-calculated.",
    realtimeReqs: "Push alerts, instant QR validation, live geolocation ETA calculation.",
    frontendChallenges:
      "Optimizing mobile web experience for low-bandwidth mobile networks while preserving fast QR scan execution.",
    techStack: ["React.js", "Next.js", "React Native", "WebSockets", "Tailwind CSS"],
  },
  {
    id: "transport",
    title: "Corporate Transport Operations",
    subtitle: "Smart Cab Allocation & Route Optimization",
    iconName: "Car",
    users: "200+ Employees, Corporate Transport Managers, Drivers",
    mainWorkflow:
      "Shift roster uploaded -> Route optimizer clusters employee drop-offs -> Cab assigned -> Driver app navigation -> SOS alert queue.",
    realtimeReqs: "SOS panic triggers, last-minute shift reassignment, dynamic route updates.",
    frontendChallenges:
      "Building intuitive multi-step wizard UIs for transport managers to view and tweak automated route clusters.",
    techStack: ["React.js", "TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "compliance",
    title: "Enterprise Compliance Platform",
    subtitle: "Configurable Workflows & Audit Systems",
    iconName: "ShieldCheck",
    users: "Compliance Officers, Auditors, Department Leads",
    mainWorkflow:
      "Dynamic form schema authored -> User submits compliance entry -> Validation rules evaluated -> Escalation trigger -> Audit log stored.",
    realtimeReqs: "Expiry triggers, automated reminder crons, multi-level approval state sync.",
    frontendChallenges:
      "Developing a dynamic JSON-driven form builder supporting complex nested validations and conditional fields.",
    techStack: ["React.js", "TypeScript", "React Hook Form", "Zod", "TanStack Query"],
  },
  {
    id: "hrm",
    title: "HRM & Workforce Analytics",
    subtitle: "Employee Onboarding & Effort Allocation",
    iconName: "Users",
    users: "Employees, HR Directors, Project Managers",
    mainWorkflow:
      "Employee logs project hours -> Weekly timesheet grid updated -> Manager approves/rejects -> Effort analytics plotted.",
    realtimeReqs: "Real-time approval updates, missing submission warnings, document expiry alerts.",
    frontendChallenges:
      "Maintaining smooth table performance across matrix inputs while auto-calculating total billable vs non-billable effort.",
    techStack: ["Next.js", "TypeScript", "Zustand", "REST APIs", "Recharts"],
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "ltm",
    company: "LTM",
    role: "Senior Software Engineer",
    period: "May 2026 — Present",
    location: "Coimbatore, Tamil Nadu, India",
    current: true,
    highlights: [
      "Spearheading scalable frontend architecture and engineering standards for enterprise web platforms.",
      "Developing modern, high-performance UI systems using React.js, Next.js, and TypeScript.",
    ],
  },
  {
    id: "techgenzi-developer",
    company: "Techgenzi Private Limited",
    role: "React Developer",
    period: "September 2022 — March 2026",
    location: "Coimbatore, Tamil Nadu, India",
    highlights: [
      "Engineered real-time vehicle tracking platform integrating Teltonika GPS & Omnicomm fuel sensors (500+ units, ~15% fuel cost reduction).",
      "Built Student Tracking platform serving 15,000+ students and parents with instant QR attendance (~30% error reduction).",
      "Developed Cab & Route Assignment System optimizing transport for 200+ employees across 5 corporate clients & 1 major MNC (~20% utilization boost).",
      "Architected Configurable Compliance Management System featuring dynamic JSON form engine with React Hook Form & Zod.",
      "Created HRM & Timesheet System for workforce onboarding, leave management, and project effort tracking.",
      "Contributed to React Native mobile applications for driver navigation and attender scanning.",
    ],
  },
  {
    id: "techgenzi-intern",
    company: "Techgenzi Private Limited",
    role: "Software Developer Intern",
    period: "March 2022 — August 2022",
    location: "Coimbatore, Tamil Nadu, India",
    highlights: [
      "Assisted in developing core React UI components, responsive layout systems, and REST API integration routines.",
      "Gained hands-on expertise in state management, cross-browser compatibility, and modern JavaScript ES6+ patterns.",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Core & UI",
    skills: [
      { name: "React.js", description: "Hooks, Context, Custom Hooks, Micro-frontends", highlight: true },
      { name: "Next.js", description: "App Router, SSR, SSG, Server Actions", highlight: true },
      { name: "TypeScript", description: "Strict typing, Generics, Type utilities", highlight: true },
      { name: "JavaScript ES6+", description: "Async/Await, Closures, Event Loop", highlight: true },
      { name: "HTML5 / CSS3", description: "Semantic markup, CSS Grid, Flexbox, Animation" },
      { name: "Tailwind CSS", description: "Design tokens, Arbitrary values, Plugins", highlight: true },
      { name: "shadcn/ui", description: "Radix UI base, Accessible component design", highlight: true },
      { name: "Framer Motion", description: "Layout animations, Spring physics, Gestures", highlight: true },
      { name: "Radix UI", description: "Unstyled accessible primitives" },
      { name: "Material UI / Ant Design / Bootstrap", description: "Enterprise UI frameworks" },
    ],
  },
  {
    id: "state-data",
    title: "State & Data Fetching",
    skills: [
      { name: "Redux Toolkit", description: "Slices, createAsyncThunk, RTK Query", highlight: true },
      { name: "Zustand", description: "Atomic lightweight state management", highlight: true },
      { name: "TanStack Query (React Query)", description: "Server state caching, Optimistic updates", highlight: true },
      { name: "SWR", description: "Stale-while-revalidate data fetching" },
    ],
  },
  {
    id: "apis",
    title: "APIs & WebSockets",
    skills: [
      { name: "REST APIs", description: "JSON contracts, HTTP status handling, Interceptors", highlight: true },
      { name: "WebSockets", description: "Real-time streaming, Auto-reconnect, State sync", highlight: true },
      { name: "GraphQL & Apollo Client", description: "Queries, Mutations, Cache normalization" },
      { name: "tRPC & URQL", description: "End-to-end type safety APIs" },
    ],
  },
  {
    id: "performance",
    title: "Performance & Optimization",
    skills: [
      { name: "Code Splitting & Lazy Loading", description: "Dynamic imports, Suspense", highlight: true },
      { name: "SSR & SSG Strategies", description: "Next.js rendering optimization", highlight: true },
      { name: "Lighthouse Audit 90+", description: "Core Web Vitals tuning (LCP, CLS, INP)", highlight: true },
      { name: "Bundle Analyzer", description: "Tree shaking, dependency trimming" },
      { name: "Image Optimization", description: "Next/Image, WebP formats, responsive sizing" },
      { name: "Caching Strategies", description: "HTTP headers, Service Workers, SWR" },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Tooling",
    skills: [
      { name: "Git & GitHub", description: "Branching strategies, PR reviews, Rebasing", highlight: true },
      { name: "GitHub Actions", description: "CI/CD automated test & build pipelines" },
      { name: "ESLint & Prettier", description: "Code quality rules & code formatting" },
      { name: "Vite / Webpack / Babel", description: "Build tools, HMR, custom loaders" },
      { name: "Storybook", description: "Isolated component documentation" },
    ],
  },
  {
    id: "testing-arch",
    title: "Testing & Architecture",
    skills: [
      { name: "Jest & React Testing Library", description: "Component unit testing & integration tests", highlight: true },
      { name: "Cypress", description: "End-to-end web testing" },
      { name: "Component-Driven Architecture", description: "Design systems, Atomic design", highlight: true },
      { name: "Micro Frontends", description: "Module federation & decoupled web apps" },
      { name: "Accessibility (WCAG)", description: "ARIA roles, Keyboard navigation, Contrast compliance", highlight: true },
      { name: "SEO Optimization", description: "OpenGraph, Metadata API, Structured JSON-LD" },
    ],
  },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: "01",
    title: "Build for Maintainability",
    description:
      "Reusable component systems, predictable state boundaries, and clean TypeScript interfaces ensure the codebase remains maintainable as product scope scales.",
    iconName: "Layers",
  },
  {
    number: "02",
    title: "Performance is a Feature",
    description:
      "Optimized rendering, intelligent code splitting, lazy loading, and minimal bundle sizes deliver instant page loads and smooth 60fps user interactions.",
    iconName: "Zap",
  },
  {
    number: "03",
    title: "Complex Systems Need Simple Interfaces",
    description:
      "High-density operational workflows, GPS telematics, and multi-step shift approvals are transformed into clean, intuitive UI design systems.",
    iconName: "Layout",
  },
  {
    number: "04",
    title: "Real-Time Should Feel Effortless",
    description:
      "Reliable WebSockets, automatic state reconnects, and optimistic UI updates ensure live data streaming feels crisp, reliable, and instantaneous.",
    iconName: "Activity",
  },
];
