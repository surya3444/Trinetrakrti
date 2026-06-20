// Trinetrakrti — Swiss International Typographic Style tokens.
// Brand-adapted: logo red accent + logo navy as near-black, on pure white.
const bg = "#FFFFFF";
const fg = "#17222F"; // near-black navy — text + visible borders
const muted = "#F2F2F2"; // secondary background blocks
const accent = "#E5322B"; // the only signal color

export const T = {
  // semantic (Swiss)
  bg,
  fg,
  muted,
  accent,
  // legacy aliases (kept so every component resolves to a Swiss value)
  paper: bg,
  panel: bg,
  wash: muted,
  ink: fg,
  ink70: "#2E3744",
  mute: "#5A6473",
  faint: "#9AA0AD",
  line: fg,
  line2: fg,
  blue: accent,
  blueSoft: accent,
  blueWash: muted,
  coral: accent,
  coralWash: muted,
  green: fg,
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
} as const;

export interface NavItem {
  to: string;
  label: string;
}

export const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/work", label: "What we build" },
  { to: "/our-work", label: "Our Work" },
  { to: "/products", label: "Our Products" },
  { to: "/results", label: "Results" },
  { to: "/process", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
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

export interface ServiceItem {
  id: string;
  t: string;
  icon: IconName;
  d: string;
}

// Full capability catalogue — kept as the complete menu (e.g. the booking
// selector, where any ask is valid). Not shown as a generalist grid anymore.
export const ALL_SERVICES: ServiceItem[] = [
  { id: "logo", t: "Custom Logo Design", icon: "palette", d: "Distinctive marks and brand identities built from a clear idea, not a template." },
  { id: "uiux", t: "UI/UX Design", icon: "spark", d: "Interfaces designed around how people actually use them — clear, fast, considered." },
  { id: "web", t: "Web Development", icon: "globe", d: "Fast, modern sites that load quick, rank well and convert visitors into customers." },
  { id: "app", t: "App Development", icon: "phone", d: "Web and mobile apps built to ship fast and scale calmly." },
  { id: "software", t: "Custom Software Development", icon: "code", d: "Tailored systems and platforms engineered around your exact workflow." },
  { id: "data", t: "Data Science", icon: "data", d: "Turn raw data into models, insight and decisions you can act on." },
  { id: "cloud", t: "Cloud Computing Services", icon: "cloud", d: "Architect, deploy and scale resilient infrastructure on the cloud." },
  { id: "iot", t: "Internet of Things (IoT)", icon: "chip", d: "Connected devices and telemetry pipelines, from sensor to dashboard." },
  { id: "arvr", t: "AR/VR", icon: "cube", d: "Immersive augmented and virtual reality experiences for real use cases." },
  { id: "game", t: "Game Development", icon: "spark", d: "Engaging games and interactive experiences across platforms." },
  { id: "aibot", t: "AI Bot Subscription", icon: "bot", d: "Always-on AI assistants and support bots, offered as a managed subscription." },
  { id: "ai", t: "AI Development", icon: "spark", d: "Custom AI features, automations and copilots wired into your product." },
  { id: "genai", t: "Generative AI Solutions", icon: "bot", d: "Generative models for content, code and workflows — built for production." },
  { id: "blockchain", t: "Blockchain Solutions", icon: "chain", d: "Smart contracts, wallets and decentralized apps with security first." },
  { id: "consulting", t: "IT Consulting", icon: "tool", d: "Strategy, architecture and technical guidance to move with confidence." },
];

// Focused hero capabilities (Change Register #38 — TRIM).
// The overview grid (homepage, /work) shows only the capabilities we lead with
// and have real proof for; the full catalogue above stays available on booking.
const CORE_IDS = ["software", "ai", "data", "web", "app", "uiux"] as const;
export const SERVICES: ServiceItem[] = CORE_IDS.map(
  (id) => ALL_SERVICES.find((s) => s.id === id)!
);
