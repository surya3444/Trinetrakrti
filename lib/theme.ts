// Trinetrakrti — Stripe-inspired design tokens.
// Same brand palette (logo navy + logo red on white), expressed in Stripe's
// visual language: soft surfaces, layered shadows, rounded geometry, gradients.
const bg = "#FFFFFF";
const fg = "#17222F"; // logo navy — headings + dark surfaces
const muted = "#F6F9FC"; // Stripe's signature off-white section wash
const accent = "#E5322B"; // brand red — the signal color

export const T = {
  // semantic
  bg,
  fg,
  muted,
  accent,
  // text
  ink: fg,
  ink70: "#3C4452",
  mute: "#525F7F", // Stripe body-copy slate
  faint: "#8792A2",
  // surfaces & lines
  paper: bg,
  panel: bg,
  wash: muted,
  border: "#E6EBF1", // hairline card/section border
  borderSoft: "#EDF1F6",
  // accents (kept as aliases so existing references resolve to brand values)
  line: "#E6EBF1",
  line2: "#E6EBF1",
  blue: accent,
  blueSoft: accent,
  blueWash: muted,
  coral: accent,
  coralWash: "#FDECEB",
  green: fg,
  // Stripe-style geometry
  radius: 16,
  radiusSm: 10,
  radiusPill: 999,
  // layered "floating" shadows (Stripe's depth model)
  shadowBtn: "0 4px 8px rgba(50,50,93,.10), 0 1px 3px rgba(0,0,0,.08)",
  shadowCard: "0 2px 5px -1px rgba(50,50,93,.20), 0 1px 3px -1px rgba(0,0,0,.10)",
  shadowFloat: "0 15px 35px rgba(50,50,93,.10), 0 5px 15px rgba(0,0,0,.06)",
  shadowHover: "0 18px 40px rgba(50,50,93,.16), 0 8px 16px rgba(0,0,0,.06)",
  // gradients — derived strictly from navy + red so the palette is preserved
  heroGradient:
    "linear-gradient(150deg, #1A2536 0%, #243349 22%, #5A2A3B 55%, #B22F2C 80%, #E5322B 100%)",
  accentGradient: "linear-gradient(180deg, #F0463E 0%, #E5322B 100%)",
  maroonGradient: "linear-gradient(135deg, #8C1D2C 0%, #5A0E18 100%)",
  darkGradient: "linear-gradient(160deg, #1B2738 0%, #17222F 60%, #101822 100%)",
};

// ─────────────────────────────────────────────────────────────────────────────
// Brand — single source of truth (Change Register #1 / #2 / #3).
// One brand, one locked tagline, one canonical domain.
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "Trinetrakrti",
  tagline: "Brain Behind AI",
  // Used for the title/footer lockup and metadata.
  lockup: "Trinetrakrti — Brain Behind AI",
  // Canonical domain (the other surface 301-redirects here at cutover).
  url: "https://trinetrakrti.com",
  description:
    "We build websites, apps, AI automations & internal tools — around how your business actually works.",
  // WhatsApp click-to-chat. Replace with the real business number in full
  // international format, digits only (country code + number, no +/spaces).
  whatsapp: "918006800594",
  whatsappMessage: "Hi Trinetrakrti — I'd like to talk about a project.",
  // Contact details (surfaced in the footer).
  email: "contact@trinetrakrti.com",
  phone: "+918006800594", // tel: link (no spaces)
  phoneDisplay: "+91 8006800594",
  locations: ["HQ — Gadag, Karnataka", "Bangalore, India"],
  // Social profiles. Replace "#" with the real profile URLs.
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

export interface NavItem {
  to: string;
  label: string;
  subLinks?: NavItem[];
}

export const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/work", label: "What we build" },
  { to: "/our-work", label: "Our Work" },
  { to: "/products", label: "Our Products" },
  { to: "/results", label: "Results" },
  { to: "/process", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  {
    to: "/about-us",
    label: "About",
    subLinks: [
      { to: "/about-us", label: "About Company" },
      { to: "/leadership", label: "About Leadership" },
    ],
  },
];

export type IconName =
  | "globe"
  | "phone"
  | "spark"
  | "tool"
  | "palette"
  | "code"
  | "cloud"
  | "chip"
  | "cube"
  | "chain"
  | "bot"
  | "data";

export interface BuildItem {
  id: string;
  t: string;
  icon: IconName;
  d: string;
  tags: string[];
}

export interface ServiceExample {
  t: string;
  d: string;
}

export interface ServiceItem {
  id: string;
  t: string;
  icon: IconName;
  d: string;
  // Detail-page content (service landing page at /work/[id]).
  long?: string;
  includes?: string[];
  examples?: ServiceExample[];
}

// Full capability catalogue — kept as the complete menu (e.g. the booking
// selector, where any ask is valid). Each entry also powers its own service
// landing page at /work/[id], so they carry richer detail + examples.
export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "logo",
    t: "Custom Logo Design",
    icon: "palette",
    d: "Distinctive marks and brand identities built from a clear idea, not a template.",
    long: "A logo is the smallest, most-repeated piece of your brand — so it has to carry weight. We design distinctive marks rooted in what your business actually stands for, then deliver a full kit that holds up everywhere from a favicon to a billboard.",
    includes: [
      "Discovery on positioning, audience and tone",
      "Multiple original logo directions to choose from",
      "Full file set — vector, raster, light/dark, favicon",
      "Color palette, typography and usage guidelines",
    ],
    examples: [
      { t: "SaaS brand identity", d: "A wordmark + monogram system for a B2B platform, tuned to read cleanly at 16px in a browser tab and on a conference banner." },
      { t: "Local-business rebrand", d: "Refreshed an aging logo into a modern, flexible mark with a complete style guide for signage, packaging and social." },
    ],
  },
  {
    id: "uiux",
    t: "UI/UX Design",
    icon: "spark",
    d: "Interfaces designed around how people actually use them — clear, fast, considered.",
    long: "Good design isn't decoration — it's how fast someone gets to what they came for. We map the real journeys, prototype the screens, and hand off a clean, consistent system your engineers can build without guesswork.",
    includes: [
      "User flows, wireframes and clickable prototypes",
      "High-fidelity UI with a reusable component library",
      "Design system + tokens for consistent builds",
      "Accessibility and responsive behaviour baked in",
    ],
    examples: [
      { t: "Dashboard redesign", d: "Reworked a dense analytics dashboard into a focused layout that cut time-to-insight and dropped support tickets." },
      { t: "Onboarding flow", d: "Designed a step-by-step signup that lifted completion by reducing fields and clarifying every decision point." },
    ],
  },
  {
    id: "web",
    t: "Web Development",
    icon: "globe",
    d: "Fast, modern sites that load quick, rank well and convert visitors into customers.",
    long: "Your website is usually the first thing a customer judges you on. We build fast, modern, SEO-ready sites that load in a blink, look right on every screen, and turn visitors into enquiries — not bounce stats.",
    includes: [
      "Responsive marketing sites and landing pages",
      "Headless CMS so your team can edit without us",
      "Core Web Vitals, SEO and analytics wired in",
      "Forms, payments and third-party integrations",
    ],
    examples: [
      { t: "Ecommerce storefront", d: "Built Horticogen, a horticulture store with catalog, search and checkout that loads fast and ranks on its core terms." },
      { t: "Company website", d: "A multi-page marketing site with a CMS, lead capture and analytics so the team ships content without a developer." },
    ],
  },
  {
    id: "app",
    t: "App Development",
    icon: "phone",
    d: "Web and mobile apps built to ship fast and scale calmly.",
    long: "We build web and mobile apps MVP-first — a real, usable version in front of users in weeks, not quarters — on an architecture that scales calmly as you grow instead of buckling.",
    includes: [
      "iOS, Android and cross-platform (React Native) apps",
      "Progressive web apps that work offline",
      "Auth, push notifications and payments",
      "App store submission and release support",
    ],
    examples: [
      { t: "Field-ops mobile app", d: "An offline-first app for on-site teams to log work and sync the moment they regain signal." },
      { t: "Customer companion app", d: "A cross-platform app pairing a web product with mobile, sharing one backend and design system." },
    ],
  },
  {
    id: "software",
    t: "Custom Software Development",
    icon: "code",
    d: "Tailored systems and platforms engineered around your exact workflow.",
    long: "When off-the-shelf tools force you to work their way, we build software that works yours. Tailored platforms, internal tools and systems engineered around your exact process — so the software fits the business, not the other way around.",
    includes: [
      "Internal tools, dashboards and admin panels",
      "Multi-tenant SaaS platforms with role-based access",
      "Workflow automation across your existing tools",
      "APIs and integrations that connect what you already use",
    ],
    examples: [
      { t: "Campus Verse", d: "An ERP unifying institutional management, student health and career readiness for multi-branch universities." },
      { t: "Real-estate ERP", d: "Centralized project planning, live inventory and revenue intelligence with tenant-level isolation and audit logs." },
    ],
  },
  {
    id: "data",
    t: "Data Science",
    icon: "data",
    d: "Turn raw data into models, insight and decisions you can act on.",
    long: "Most businesses sit on more data than they use. We turn yours into clear answers — dashboards that surface what matters, and models that predict, classify and recommend so decisions stop being guesswork.",
    includes: [
      "Data pipelines, cleaning and warehousing",
      "Dashboards and reporting that update themselves",
      "Predictive and classification models",
      "Forecasting, segmentation and recommendation engines",
    ],
    examples: [
      { t: "Demand forecasting", d: "A model predicting weekly demand so a retailer could stock smarter and cut both stockouts and waste." },
      { t: "Churn prediction", d: "Scored accounts by churn risk and fed the list to the success team before customers slipped away." },
    ],
  },
  {
    id: "cloud",
    t: "Cloud Computing Services",
    icon: "cloud",
    d: "Architect, deploy and scale resilient infrastructure on the cloud.",
    long: "We architect, deploy and run cloud infrastructure that stays up, scales on demand and doesn't quietly drain your budget — on AWS, GCP or Azure, with the monitoring and automation to keep it healthy.",
    includes: [
      "Cloud architecture and migration",
      "CI/CD pipelines and infrastructure-as-code",
      "Auto-scaling, load balancing and backups",
      "Monitoring, alerting and cost optimization",
    ],
    examples: [
      { t: "Lift-and-shift migration", d: "Moved a monolith to managed cloud services, cutting hosting cost and downtime while adding auto-scaling." },
      { t: "CI/CD setup", d: "Built deploy pipelines and infrastructure-as-code so a team ships to production in minutes, repeatably." },
    ],
  },
  {
    id: "iot",
    t: "Internet of Things (IoT)",
    icon: "chip",
    d: "Connected devices and telemetry pipelines, from sensor to dashboard.",
    long: "From sensor to dashboard, we connect the physical world to your software — reliable device firmware, telemetry pipelines that don't lose data, and live dashboards that turn raw readings into action.",
    includes: [
      "Device firmware and connectivity",
      "Telemetry ingestion and time-series storage",
      "Real-time dashboards and alerting",
      "Remote control and over-the-air updates",
    ],
    examples: [
      { t: "Environmental monitoring", d: "Sensors streaming temperature and humidity to a live dashboard with threshold alerts for facility teams." },
      { t: "Asset tracking", d: "Connected trackers feeding a map view of equipment location and usage across multiple sites." },
    ],
  },
  {
    id: "arvr",
    t: "AR/VR",
    icon: "cube",
    d: "Immersive augmented and virtual reality experiences for real use cases.",
    long: "Augmented and virtual reality, built for real use cases — not gimmicks. Product visualizers, training simulations and immersive showcases that help people understand, learn or decide faster.",
    includes: [
      "AR product and try-before-you-buy experiences",
      "VR training and simulation environments",
      "3D model optimization for the web and headsets",
      "WebAR delivered straight through the browser",
    ],
    examples: [
      { t: "AR product preview", d: "A browser-based AR view letting shoppers place a product in their room before buying." },
      { t: "VR training sim", d: "A virtual environment for staff to practise a high-risk procedure safely and repeatably." },
    ],
  },
  {
    id: "game",
    t: "Game Development",
    icon: "spark",
    d: "Engaging games and interactive experiences across platforms.",
    long: "Interactive experiences that hold attention — from branded mini-games and gamified onboarding to full titles across web, mobile and desktop, built with solid mechanics and a smooth feel.",
    includes: [
      "2D and 3D game development (Unity / web engines)",
      "Gamification of products and learning",
      "Multiplayer and leaderboard systems",
      "Cross-platform builds for web, mobile and desktop",
    ],
    examples: [
      { t: "Branded marketing game", d: "A lightweight web game built for a campaign that drove engagement and shareable scores." },
      { t: "Gamified learning module", d: "Turned dry training content into levels and rewards, lifting completion rates." },
    ],
  },
  {
    id: "aibot",
    t: "AI Bot Subscription",
    icon: "bot",
    d: "Always-on AI assistants and support bots, offered as a managed subscription.",
    long: "An always-on AI assistant for your business, run as a managed subscription — we build it, host it, keep it accurate and improve it over time, so you get a support or sales bot without owning the upkeep.",
    includes: [
      "Custom assistant trained on your content",
      "Website, WhatsApp and chat channel integration",
      "Ongoing tuning, monitoring and updates",
      "Predictable monthly subscription, fully managed",
    ],
    examples: [
      { t: "Support deflection bot", d: "A site assistant answering common questions from your docs, cutting repetitive support load around the clock." },
      { t: "Lead-qualifying bot", d: "A WhatsApp assistant that greets enquiries, answers questions and books qualified calls automatically." },
    ],
  },
  {
    id: "ai",
    t: "AI Development",
    icon: "spark",
    d: "Custom AI features, automations and copilots wired into your product.",
    long: "We wire AI into the places it actually saves time — copilots inside your product, automations that handle the repetitive work, and features that feel native rather than bolted on.",
    includes: [
      "In-product copilots and assistants",
      "Document, email and workflow automation",
      "Semantic search and retrieval (RAG)",
      "Model selection, evaluation and guardrails",
    ],
    examples: [
      { t: "Reporting automation", d: "An automation that drafts the weekly report from raw data and lands it in the inbox, done." },
      { t: "In-app copilot", d: "A copilot embedded in a SaaS product that answers questions and takes actions on the user's behalf." },
    ],
  },
  {
    id: "genai",
    t: "Generative AI Solutions",
    icon: "bot",
    d: "Generative models for content, code and workflows — built for production.",
    long: "Generative AI taken from demo to dependable. We build production systems for content, code and workflow generation — with retrieval, evaluation and guardrails so output stays accurate, on-brand and safe at scale.",
    includes: [
      "Retrieval-augmented generation over your data",
      "Content, code and document generation pipelines",
      "Prompt engineering, evaluation and guardrails",
      "Fine-tuning and model orchestration",
    ],
    examples: [
      { t: "Content generation pipeline", d: "A system drafting on-brand marketing copy from a brief, with a human approval step before publish." },
      { t: "Knowledge assistant", d: "A RAG assistant answering staff questions from internal docs, with citations back to the source." },
    ],
  },
  {
    id: "blockchain",
    t: "Blockchain Solutions",
    icon: "chain",
    d: "Smart contracts, wallets and decentralized apps with security first.",
    long: "Blockchain where it genuinely adds trust or transparency — audited smart contracts, wallet integrations and decentralized apps, built security-first so the code does exactly what it promises.",
    includes: [
      "Smart contract design and development",
      "Wallet integration and token systems",
      "Decentralized apps (dApps) front to back",
      "Security review and testing before launch",
    ],
    examples: [
      { t: "Token + smart contract", d: "Designed and tested a token contract with clear, auditable rules and a safe deployment process." },
      { t: "On-chain verification", d: "A dApp letting users verify the authenticity of records directly against the chain." },
    ],
  },
  {
    id: "consulting",
    t: "IT Consulting",
    icon: "tool",
    d: "Strategy, architecture and technical guidance to move with confidence.",
    long: "Sometimes you need a clear head before a line of code. We pressure-test the plan, choose the architecture, and give you a straight technical roadmap — so you spend your budget on the right build, not a rebuild.",
    includes: [
      "Technology strategy and architecture review",
      "Build-vs-buy and vendor selection",
      "Technical due diligence and audits",
      "Roadmaps, estimates and team guidance",
    ],
    examples: [
      { t: "Architecture review", d: "Audited a scaling system, flagged the bottlenecks, and laid out a staged plan to fix them without a rewrite." },
      { t: "Build-vs-buy call", d: "Helped a team decide what to build and what to buy, saving months on tooling they didn't need to make." },
    ],
  },
];

// Focused hero capabilities (Change Register #38 — TRIM).
// The overview grid (homepage, /work) shows only the capabilities we lead with
// and have real proof for; the full catalogue above stays available on booking.
const CORE_IDS = ["software", "ai", "data", "web", "app", "uiux"] as const;
export const SERVICES: ServiceItem[] = CORE_IDS.map(
  (id) => ALL_SERVICES.find((s) => s.id === id)!
);
