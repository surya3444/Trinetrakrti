export const T = {
  paper: "#FCFBF8",
  panel: "#FFFFFF",
  wash: "#F4F2EC",
  ink: "#13182B",
  ink70: "#3A4257",
  mute: "#6B7283",
  faint: "#9AA0AD",
  line: "#E5E2D9",
  line2: "#D7D3C7",
  blue: "#2B41E0",
  blueSoft: "#5468F0",
  blueWash: "#EDEFFF",
  coral: "#FF5C49",
  coralWash: "#FFEDE9",
  green: "#0F9D6B",
};

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

export interface BuildItem {
  id: string;
  t: string;
  icon: "globe" | "phone" | "spark" | "tool";
  d: string;
  tags: string[];
}

export const BUILDS: BuildItem[] = [
  { id: "web", t: "Websites", icon: "globe", d: "Fast, modern sites that load quick, rank well and turn visitors into customers.", tags: ["Marketing sites", "Landing pages", "Web apps", "E-commerce"] },
  { id: "app", t: "Apps", icon: "phone", d: "Web and mobile apps built to ship fast and scale calmly.", tags: ["iOS & Android", "Web apps", "SaaS platforms", "Customer portals"] },
  { id: "ai", t: "AI automations", icon: "spark", d: "We hand the repetitive, copy-paste work to AI.", tags: ["Workflow automation", "AI assistants", "Support bots", "Data pipelines"] },
  { id: "tools", t: "Internal tools", icon: "tool", d: "Dashboards and admin tools that replace spreadsheet chaos.", tags: ["Dashboards", "CRMs", "Admin panels", "Ops tooling"] },
];