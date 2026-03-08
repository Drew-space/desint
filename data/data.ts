import {
  BlogItem,
  FooterItem,
  NavItem,
  ProcessItem,
  ProjectItem,
  ServiceItem,
  StatusItem,
} from "@/types/types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/",
  },
  {
    id: 3,
    label: "Blog",
    href: "/",
  },
  {
    id: 4,
    label: "Pricing",
    href: "/",
  },
];

export const status: StatusItem[] = [
  {
    id: 1,
    value: "340+",
    label: "Successfull projects",
  },
  {
    id: 2,
    value: "64+",
    label: "Team members",
  },
  {
    id: 3,
    value: "80+",
    label: "Happy Clients",
  },
];

export const servicesItems: ServiceItem[] = [
  {
    id: 1,
    img: "/images/project-1.png",
    title: "Residential design",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    title: "Commercial design",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    title: "Turnkey execution",
  },
  {
    id: 4,
    img: "/images/project-4.png",
    title: "3D wall & floor design",
  },
  {
    id: 5,
    img: "/images/project-5.png",
    title: "Space planning",
  },
];

// export const servicesItems: ServiceItem[] = [
//   {
//     id: 1,
//     // img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     img: "/images/installingPanel1.avif",
//     title: "Residential Solar Installation",
//   },
//   {
//     id: 2,
//     // img: "/images/solar2.webp",
//     img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
//     title: "Commercial Solar Systems",
//   },
//   {
//     id: 3,
//     img: "/images/solar3.jpeg",
//     // img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
//     title: "Solar Panel Maintenance",
//   },
//   {
//     id: 4,
//     img: "/images/solar4.webp",
//     // img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
//     title: "Solar Battery Storage",
//   },
//   {
//     id: 5,
//     // img: "/images/solar5.png",
//     img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634",
//     title: "Solar Energy Consultation",
//   },
// ];

export const projects: ProjectItem[] = [
  {
    id: 1,
    img: "/images/project-1.png",
    title: "Modern Living Space",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    title: "Minimal workspace Design",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    title: "Luxury Residential Interior",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 4,
    img: "/images/project-4.png",
    title: "Luxury Residential interior",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 5,
    img: "/images/project-5.png",
    title: "Luxury Residential interior",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
];

export const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "Planning",
    step: "Step 01",
    text: "Every project begins with understanding your vision, space requirements, and design goals. Our team carefully plans each detail to ensure a smooth and efficient execution.",
  },
  {
    id: 2,
    title: "Concept & Estimation",
    step: "Step 02",
    text: "We develop design concepts and provide accurate cost estimates, helping you make informed decisions before construction or installation begins.",
  },
  {
    id: 3,
    title: "Construction & Design",
    step: "Step 03",
    text: "Our skilled team brings the design to life using high-quality materials, modern techniques, and careful craftsmanship to ensure lasting results.",
  },
  {
    id: 4,
    title: "Finalization",
    step: "Step 04",
    text: "After installation and finishing touches, we review the project to ensure everything meets quality standards and client expectations.",
  },
];

// export const processItems: ProcessItem[] = [
//   {
//     id: 1,
//     title: "planning",
//     step: "Step 01",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
//   },
//   {
//     id: 2,
//     title: "Estimating",
//     step: "Step 02",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
//   },
//   {
//     id: 3,
//     title: "Building",
//     step: "Step 03",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
//   },
//   {
//     id: 4,
//     title: "planning",
//     step: "Step 04",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
//   },
// ];

export const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "Interior Color Trends Designers Are Betting On for 2026",
    text: "From warm neutrals to bold accent palettes, 2026 is shaping up to be the year designers break the rules and embrace personality-driven interiors.",
    date: "Design • Dec 30, 2025",
  },
  {
    id: 2,
    title: "How Minimal Spaces Are Evolving Into Warmer, Lived-In Homes",
    text: "Minimalism isn’t disappearing  it’s getting softer. Here’s how designers are blending clean layouts with texture, warmth, and human comfort.",
    date: "Interior • Jan 12, 2026",
  },
];

export const footerItems: FooterItem[] = [
  {
    id: 1,
    title: "Services",
    list: [
      "Interior Design",
      "Exterior Architecture",
      "Project Management",
      "General Contracting",
      "Custom Decoration",
      "Space Planning",
    ],
  },
  {
    id: 2,
    title: "Company",
    list: [
      "About Our Studio",
      "Design Process",
      "Our Portfolio",
      "Sustainability",
      "Careers",
      "Contact Us",
    ],
  },
  {
    id: 3,
    title: "Resources",
    list: [
      "Design Blog",
      "Style Guide 2026",
      "Maintenance Tips",
      "FAQs",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
];
