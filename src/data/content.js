"use client";

"use strict";

import React from "react";
import { FlaskConical } from "lucide-react";
import { Factory } from "lucide-react";
import { Dna } from "lucide-react";
import { Microscope } from "lucide-react";
import { Handshake } from "lucide-react";
import { Atom } from "lucide-react";
import { Users } from "lucide-react";
import { Timer } from "lucide-react";
import { Recycle } from "lucide-react";
import { Earth } from "lucide-react";
const IMAGES = {
  hero: "https://images.pexels.com/photos/38145550/pexels-photo-38145550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  synthesis:
    "https://images.pexels.com/photos/10187629/pexels-photo-10187629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  plant: "/assets/photo-7.jpg",
  cleanroom: "/assets/photo-5.jpg",
  facility: "/assets/photo-6.jpg",
  botanical: "/assets/photo-4.jpg",
  herbal:
    "https://images.pexels.com/photos/10187645/pexels-photo-10187645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  glassware:
    "https://images.pexels.com/photos/9243559/pexels-photo-9243559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};
const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    testid: "nav-link-home",
  },
  {
    label: "About Us",
    path: "/about",
    testid: "nav-link-about",
  },
  {
    label: "Products",
    path: "/products",
    testid: "nav-link-products",
  },
  {
    label: "Services",
    path: "/services",
    testid: "nav-link-services",
  },
  {
    label: "Contact Us",
    path: "/contact",
    testid: "nav-link-contact",
  },
];
const MARQUEE_ITEMS = [
  "Custom Synthesis",
  "API Intermediates",
  "Process R&D",
  "R&D Fine Chemicals",
  "CRO Services",
  "Medicinal Chemistry",
  "Building Blocks",
  "ISO 9001:2015 Certified",
];
const STATS = [
  {
    value: "2023",
    label: "Founded in Hyderabad",
  },
  {
    value: "40+",
    label: "Product Families",
  },
  {
    value: "mg → kg",
    label: "Synthesis Scale",
  },
  {
    value: "USA·UK·EU",
    label: "Export Markets",
  },
];
const PRODUCT_CATEGORIES = [
  {
    name: "Fine Chemicals",
    tag: "R&D Grade",
    blurb:
      "Premium R&D-grade fine chemicals and building blocks for the global scientific community.",
    image: IMAGES.synthesis,
    span: "lg:col-span-2 lg:row-span-2",
    testid: "product-tile-fine-chemicals",
  },
  {
    name: "API Intermediates",
    tag: "Pharma",
    blurb:
      "Advanced, novel organic intermediates for active pharmaceutical ingredient programmes.",
    image: IMAGES.hero,
    span: "lg:col-span-2",
    testid: "product-tile-api-intermediates",
  },
  {
    name: "Bio Medical Products",
    tag: "Life Science",
    blurb: "High-purity compounds supporting biomedical research.",
    image: IMAGES.cleanroom,
    span: "",
    testid: "product-tile-bio-medical",
  },
  {
    name: "Natural Products",
    tag: "Isolation + Synthesis",
    blurb: "Harmine, Piperlongumine, Picrotoxin, Coumestrol and more.",
    image: IMAGES.botanical,
    span: "",
    testid: "product-tile-natural-products",
  },
  {
    name: "Cosmetic Chemicals",
    tag: "Specialty",
    blurb:
      "Functional specialty ingredients for advanced cosmetic formulations.",
    image: IMAGES.glassware,
    span: "lg:col-span-2",
    testid: "product-tile-cosmetic-chemicals",
  },
  {
    name: "Herbal Products",
    tag: "Botanical",
    blurb:
      "Standardised herbal extracts and phytochemicals, gram to multi-kilogram scale.",
    image: IMAGES.herbal,
    span: "lg:col-span-2",
    testid: "product-tile-herbal-products",
  },
];
const SERVICES = [
  {
    num: "01",
    title: "Custom Synthesis",
    icon: FlaskConical,
    desc: "Milligram to multi-kilogram synthesis of non-commercially available compounds, delivered with complete analytical documentation.",
    points: [
      "Route design & feasibility",
      "mg to multi-kg scale",
      "COA with HPLC & NMR data",
    ],
    image: IMAGES.synthesis,
    testid: "service-custom-synthesis",
  },
  {
    num: "02",
    title: "Process R&D & Scale-Up",
    icon: Factory,
    desc: "Process development, optimisation and scale-up of new molecules — from lab bench to pilot plant production.",
    points: [
      "Route optimisation",
      "Cost-effective technologies",
      "Pilot plant production",
    ],
    image: IMAGES.plant,
    testid: "service-process-rd",
  },
  {
    num: "03",
    title: "Medicinal Chemistry",
    icon: Dna,
    desc: "Design and synthesis of compounds of research and pharmaceutical significance for drug-discovery programmes.",
    points: ["Building-block libraries", "SAR support", "Novel heterocycles"],
    image: IMAGES.glassware,
    testid: "service-medicinal-chemistry",
  },
  {
    num: "04",
    title: "Contract R&D",
    icon: Microscope,
    desc: "Dedicated research programmes executed by our team of post-graduates and Ph.D. chemists under strict confidentiality.",
    points: ["FTE engagements", "Project-based models", "Strict IP protection"],
    image: IMAGES.cleanroom,
    testid: "service-contract-rd",
  },
  {
    num: "05",
    title: "CRO Services",
    icon: Handshake,
    desc: "World-class chemistry support at every stage of development for catalogue and pharmaceutical companies worldwide.",
    points: ["Catalogue partnerships", "Rapid turnaround", "Global logistics"],
    image: IMAGES.facility,
    testid: "service-cro-services",
  },
];
const WHY_POINTS = [
  {
    title: "Advanced Scientific Infrastructure",
    desc: "Well-established synthetic laboratories and sophisticated analytical facilities enable precision-driven research, development and manufacturing.",
    icon: Atom,
  },
  {
    title: "Expert Scientific Team",
    desc: "Highly skilled, results-oriented scientists transform complex requirements into reliable, scalable solutions.",
    icon: Users,
  },
  {
    title: "Commitment to Delivery",
    desc: "We prioritise responsiveness and prompt delivery, ensuring our clients' timelines are always protected.",
    icon: Timer,
  },
  {
    title: "Efficiency & Sustainability",
    desc: "Cost-optimisation and waste-reduction strategies create value while supporting responsible manufacturing.",
    icon: Recycle,
  },
  {
    title: "Transparent Client Partnership",
    desc: "Lasting relationships built through excellent service, open communication and complete transparency.",
    icon: Handshake,
  },
  {
    title: "A Reliable Global Partner",
    desc: "A dependable partner in the growth and success of pharmaceutical companies worldwide.",
    icon: Earth,
  },
];
const PORTFOLIO_GROUPS = [
  {
    group: "Core Functional Organic Building Blocks",
    items: ["Acids & Anhydrides", "Aldehydes", "Alcohols", "Ethers", "Diols"],
  },
  {
    group: "Hydrocarbon Scaffolds & Unsaturation",
    items: ["Alkanes", "Alkenes", "Alkynes"],
  },
  {
    group: "Halogenated & Nitrogenous Intermediates",
    items: [
      "Fluoro Derivatives",
      "Chloro Derivatives",
      "Bromo Derivatives",
      "Amine Derivatives",
      "Aniline Derivatives",
      "Nitriles",
      "Isocyanates",
    ],
  },
  {
    group: "Heterocyclic Architecture & Core Frameworks",
    items: [
      "Heterocyclic Products",
      "Imidazoles",
      "Pyridine Derivatives",
      "Coumarins",
      "Chromones",
      "Flavones",
    ],
  },
  {
    group: "Organometallics, Catalysts & Reactive Species",
    items: [
      "Boron Derivatives",
      "Phosphorus Derivatives",
      "Sulphur Derivatives",
      "Catalysts & Initiators",
      "Ligands",
    ],
  },
  {
    group: "Advanced Applied & Life Science Chemistry",
    items: [
      "Pharmaceutical Intermediates",
      "Natural Products",
      "Agrochemicals",
    ],
  },
  {
    group: "High-Tech Materials & Specialty Formulations",
    items: [
      "OLED Materials",
      "Electronic Chemicals",
      "Ionic Liquids",
      "Dyes",
      "Pigments",
      "Stains",
      "Miscellaneous Chemicals",
    ],
  },
];
const ABOUT_BLOCKS = [
  {
    num: "01",
    title: "Who We Are",
    text: "Founded in 2023 in Hyderabad, Telangana, India, DSR PHARMACHEM is committed to delivering high-quality fine chemicals for research and development as well as commercial manufacturing. As a leading manufacturer and supplier, we serve a wide spectrum of sectors: fine chemicals, API intermediates, CRO services, natural products, biomedical products, herbal products, and cosmetic chemicals. Our strength lies in synthesis and chemical R&D — flavones, isoflavones, coumarins, chromones, oxazoles, isoxazoles, thiazoles, quinolines, indoles, halogenated aromatics, 1,2-diamino and other benzene derivatives, along with many more aromatic and heterocyclic compounds. Through innovative, cost-effective synthetic routes, we deliver our products promptly and reliably at the best possible prices.",
  },
  {
    num: "02",
    title: "Our Research Focus",
    text: "DSR PHARMACHEM is a professional, research-driven firm dedicated to producing a diverse range of R&D organic specialty chemicals, building blocks, intermediates, and custom synthesis products for the chemical and pharmaceutical industries. We have established ourselves as a dependable source of quality organic products and are now a preferred vendor for catalogue companies around the world. With deep command of organic synthesis, we have successfully synthesised numerous high-quality compounds of research and pharmaceutical significance — and we specialise in developing new building blocks to meet the needs of research and drug discovery.",
  },
  {
    num: "03",
    title: "Expertise & Facilities",
    text: "DSR PHARMACHEM was founded by post-graduates in organic chemistry and MBA graduates with hands-on experience in the synthesis of fine chemicals and building blocks. Our well-equipped laboratories and pilot plant facilities support research, process development and optimisation, and the scale-up and production of new molecules. Our dedicated team of experienced post-graduates and Ph.D. holders in chemistry carries out a wide range of organic reactions to produce complex organic products — drawing on extensive experience in the art of synthesis to develop cost-effective technologies.",
  },
  {
    num: "04",
    title: "Global Reach",
    text: "We have established production bases and R&D centres in Hyderabad, India. As active exporters, our products have reached the United States of America, the United Kingdom, and countries across Europe, among others.",
  },
  {
    num: "05",
    title: "Our Commitment",
    text: "We maintain highly competitive pricing without compromising on quality. Our products are supplied in quantities from micro to macro scale and are made to meet each customer's specifications. Backed by robust quality control and packaging facilities, we ensure every order is delivered safely to our valued customers — and we respond swiftly to every enquiry with the exact information you need.",
  },
];
const VISION =
  "To be a globally admired leader in fine chemicals, empowering the pharmaceutical industry through innovative, high-quality, and sustainable solutions that advance human health.";
const MISSION =
  "We manufacture and deliver world-class fine chemicals with uncompromising quality, scientific excellence, and customer focus — enabling pharmaceutical companies worldwide to develop safer, more effective medicines.";
const VALUES = [
  "Integrity",
  "Scientific Rigor",
  "Environmental Safety",
  "Client Confidentiality",
];
const CERTS = [
  {
    name: "ISO 9001:2015",
    desc: "Quality Management",
  },
  {
    name: "ISO 14001:2015",
    desc: "Environmental Management",
  },
  {
    name: "ISO 45001:2018",
    desc: "Occupational Health & Safety",
  },
];
const EXPORT_MARKETS = [
  "United States of America",
  "United Kingdom",
  "European Union",
  "Asia Pacific",
];
const WORKFLOW = [
  "Feasibility Study",
  "Route Scouting",
  "Lab Synthesis",
  "Scale-Up",
  "Analytical Validation",
];
const CONTACT = {
  corporate:
    "The Office Capital, 15th Floor, Dallas Centre, Raidurg Panmaktha, Hitech City, Hyderabad, Telangana, India – 500 032",
  exportOffice:
    "Plot No. 188, Sy. No. 281 & 282, Jyothi Welfare, Near BPCL, Rampally, Keesara Mandal, Medchal-Malkajgiri (Dist), Hyderabad, Telangana, India – 501 302",
  phones: ["+91 99899 77665", "+91 91446 86868"],
  emails: [
    "info@dsrpharmachem.com",
    "bd@dsrpharmachem.com",
    "sales@dsrpharmachem.com",
    "purchase@dsrpharmachem.com",
  ],
  website: "www.dsrpharmachem.com",
};
const INTEREST_OPTIONS = [
  "General Enquiry",
  "Product Quote",
  "Custom Synthesis",
  "Process R&D & Scale-Up",
  "Medicinal Chemistry",
  "Contract R&D / CRO Services",
];
export { ABOUT_BLOCKS };
export { CERTS };
export { CONTACT };
export { EXPORT_MARKETS };
export { IMAGES };
export { INTEREST_OPTIONS };
export { MARQUEE_ITEMS };
export { MISSION };
export { NAV_LINKS };
export { PORTFOLIO_GROUPS };
export { PRODUCT_CATEGORIES };
export { SERVICES };
export { STATS };
export { VALUES };
export { VISION };
export { WHY_POINTS };
export { WORKFLOW };
