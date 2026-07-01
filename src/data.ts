export interface Project {
  id: string;
  name: string;
  clientName: string;
  description: string;
  image: string;
  logoText: string;
  modalImages: string[];
  caseStudyUrl: string;
  tags: string[];
}

export interface PainPoint {
  id: number;
  text: string;
}

export interface Solution {
  id: number;
  text: string;
}

export interface Offering {
  id: number;
  title: string;
  description: string;
  iconName: string; // Used to determine which lucide icon to render
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const painPoints: PainPoint[] = [
  {
    id: 1,
    text: "Product catalogues with unique variants, bundles, or trade pricing tiers that standard themes simply weren't designed to handle."
  },
  {
    id: 2,
    text: "Freight and fulfilment logic for Australia's geography, including regional shipping zones, courier integrations, and split warehouse stock that off the shelf apps can't calculate properly."
  },
  {
    id: 3,
    text: "Wholesale or B2B pricing rules based on customer groups, order volume, or account history that require custom logic rather than a plugin workaround."
  },
  {
    id: 4,
    text: "A checkout experience that needs extra steps, local payment methods, or validation rules that break every time the theme gets updated."
  },
  {
    id: 5,
    text: "Site speed that drops away as your catalogue grows past what a standard platform can comfortably manage."
  }
];

export const solutions: Solution[] = [
  {
    id: 1,
    text: "A complete platform architecture designed around your business model, not a one size fits all template."
  },
  {
    id: 2,
    text: "Product configurators and pricing tools built for real complexity, including options, dependencies, and live calculations."
  },
  {
    id: 3,
    text: "Integrations that connect your store to the accounting, inventory, and freight systems you already rely on."
  },
  {
    id: 4,
    text: "A database built to stay fast even as your product range and order volume grow."
  },
  {
    id: 5,
    text: "An admin dashboard shaped around how your team actually works day to day, rather than a generic backend everyone gets stuck with."
  }
];

export const portfolioProjects: Project[] = [
  {
    id: "sydney-trade-spares",
    name: "Sydney Trade Spares",
    clientName: "STS",
    description: "Custom wholesale B2B portal supporting highly complex corporate pricing tiers, automated tax compliance invoice generation, and custom checkout workflows.",
    image: "/assets/images/instasmile/instasmile-cover.webp",
    logoText: "STS",
    modalImages: [
      "/assets/images/instasmile/instasmile-case-study-1.webp",
      "/assets/images/instasmile/instasmile-case-study-2.webp",
      "/assets/images/instasmile/instasmile-case-study-3.webp"
    ],
    caseStudyUrl: "#contact",
    tags: ["Custom Development", "B2B Portal", "WooCommerce", "Shipping Automation", "More +"]
  },
  {
    id: "one-party-rental",
    name: "One Party Rental",
    clientName: "OPR",
    description: "Rental and booking platform rebuilt for fast availability checks, seamless payment flow, and real-time fleet management.",
    image: "/assets/images/onePartyRental/oneparty-hero.webp",
    logoText: "OPR",
    modalImages: [
      "/assets/images/onePartyRental/oneparty-hero.webp",
      "/assets/images/onePartyRental/oneparty-banner-1.webp",
      "/assets/images/onePartyRental/oneparty-banner-2.webp"
    ],
    caseStudyUrl: "#contact",
    tags: ["Bookings", "UX Design", "Customer Flow", "Performance"]
  },
  {
    id: "pac-brake",
    name: "PacBrake",
    clientName: "PAC",
    description: "High-conversion B2B product launch built with optimized checkout flows, performance-first layouts, and strong brand storytelling.",
    image: "/assets/images/pacBrake/pacbrake-hero-banner.webp",
    logoText: "PAC",
    modalImages: [
      "/assets/images/pacBrake/pacbrake-hero-banner.webp",
      "/assets/images/pacBrake/pacbrake-performance.webp",
      "/assets/images/pacBrake/pacbrake-how-it-helped.webp"
    ],
    caseStudyUrl: "#contact",
    tags: ["Performance", "Conversion", "B2B", "Brand"]
  }
];

export const offerings: Offering[] = [
  {
    id: 1,
    title: "Discovery and Requirements Planning",
    description: "Understanding your business processes, technical needs, and growth plans before a single line of code gets written.",
    iconName: "Compass"
  },
  {
    id: 2,
    title: "Custom Frontend Development",
    description: "Storefronts designed around your brand and your customers' actual shopping behaviour, not a generic template.",
    iconName: "Monitor"
  },
  {
    id: 3,
    title: "Backend and Database Architecture",
    description: "Custom APIs and data structures built to handle your specific catalogue, pricing, and operational logic.",
    iconName: "Database"
  },
  {
    id: 4,
    title: "WooCommerce Development",
    description: "Extending and customising WordPress based stores with the functionality off the shelf plugins can't deliver.",
    iconName: "Sliders"
  },
  {
    id: 5,
    title: "Third Party Integrations",
    description: "Connecting your store to accounting, freight, CRM, and marketing platforms for a genuinely joined up operation.",
    iconName: "Cpu"
  },
  {
    id: 6,
    title: "Payment Integration",
    description: "Local and international payment methods, including digital wallets and buy now pay later options popular with Australian shoppers.",
    iconName: "CreditCard"
  },
  {
    id: 7,
    title: "Admin Interface Design",
    description: "Purpose built dashboards for product management, order processing, and reporting that match your team's workflow.",
    iconName: "Layout"
  },
  {
    id: 8,
    title: "Shipping and Fulfilment Logic",
    description: "Custom freight calculations and courier integrations built around Australia's regional delivery realities.",
    iconName: "Truck"
  },
  {
    id: 9,
    title: "Testing and Quality Assurance",
    description: "Thorough testing across functionality, performance, and security before launch and with every update after.",
    iconName: "CheckCircle"
  },
  {
    id: 10,
    title: "Ongoing Development Support",
    description: "Continued feature work and improvements as your business and your platform requirements evolve.",
    iconName: "LifeBuoy"
  }
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long does a custom ecommerce build take?",
    answer: "It depends on scope. A straightforward custom build typically runs three to four months from discovery through to launch, while more complex platforms with extensive integrations can take longer. We'll give you a realistic timeline once we understand your requirements."
  },
  {
    id: 2,
    question: "How does custom development compare in cost to a standard platform?",
    answer: "Custom builds usually need a larger upfront investment, but they often work out cheaper over time once you factor in the plugins, workarounds, and ongoing maintenance a standard platform demands. We're upfront about total cost of ownership so you can compare properly."
  },
  {
    id: 3,
    question: "Can you migrate our existing store to a new platform?",
    answer: "Yes. We handle migrations from any existing platform, including WooCommerce, Shopify, Magento, and custom builds. Migration planning protects your data, preserves your search rankings, and keeps downtime to a minimum."
  },
  {
    id: 4,
    question: "What happens if we need changes after the site goes live?",
    answer: "We offer ongoing support for feature additions, performance tuning, and changes as your business grows. A custom platform gives you the flexibility to adjust anything down the track, rather than waiting on a plugin developer to catch up."
  },
  {
    id: 5,
    question: "Do you work with businesses outside the major Australian cities?",
    answer: "Yes, we work with clients across Australia regardless of location, with most communication and project management handled remotely through regular calls and a shared project dashboard."
  }
];
