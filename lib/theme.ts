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
  whatsapp: "919000000000",
  whatsappMessage: "Hi Trinetrakrti — I'd like to talk about a project.",
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
