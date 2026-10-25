"use client";

import React from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { MoleculeCanvas } from "@/components/MoleculeCanvas";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";
import { MaskedLines } from "@/components/Reveal";
import { Link } from "@/components/navigation";
import { ArrowRight } from "lucide-react";
import { STATS } from "@/data/content";
import { IMAGES } from "@/data/content";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/content";
import { SERVICES } from "@/data/content";
import { VISION } from "@/data/content";
import { MISSION } from "@/data/content";
import { WHY_POINTS } from "@/data/content";
import { CERTS } from "@/data/content";
import { EXPORT_MARKETS } from "@/data/content";
import { Check } from "lucide-react";
import { Marquee } from "@/components/Marquee";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <MoleculeCanvas className="absolute inset-0 h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.14),transparent_55%)]"
        aria-hidden="true"
      />
      <motion.div
        style={{
          opacity: fade,
        }}
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-48"
      >
        <div>
          <FadeUp>
            <p
              data-testid="hero-eyebrow"
              className="font-mono text-xs uppercase tracking-[0.35em] text-sky"
            >
              {"Fine Chemicals · API Intermediates · Est. 2023"}
            </p>
          </FadeUp>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <MaskedLines
              lines={["Building blocks of", "tomorrow's medicines."]}
              accentIndex={1}
              delay={0.15}
            />
          </h1>
          <FadeUp delay={0.5}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              {
                "DSR PHARMACHEM manufactures premium R&D-grade fine chemicals, building blocks and advanced organic intermediates — delivered promptly, reliably and at the best possible prices from Hyderabad, India."
              }
            </p>
          </FadeUp>
          <FadeUp
            delay={0.62}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products"
              data-testid="hero-explore-products-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-brick px-7 py-3.5 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
            >
              {"Explore Products"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-contact-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-display text-sm font-bold text-white transition-colors duration-300 hover:border-sky hover:text-sky"
            >
              {"Talk to Our Chemists"}
            </Link>
          </FadeUp>
          <FadeUp
            delay={0.75}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div
                data-testid={`stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                key={s.label}
              >
                <p className="font-display text-2xl font-extrabold text-white">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </FadeUp>
        </div>
        <motion.div
          style={{
            y: imgY,
          }}
          className="relative hidden lg:block"
        >
          <FadeUp delay={0.35}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={IMAGES.hero}
                alt="DSR Pharmachem research laboratory"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-panel/90 px-5 py-4 backdrop-blur-xl">
              <ShieldCheck className="h-8 w-8 text-sky" />
              <div>
                <p className="font-display text-sm font-bold text-white">
                  {"ISO 9001:2015"}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {"Certified Quality Systems"}
                </p>
              </div>
            </div>
          </FadeUp>
        </motion.div>
      </motion.div>
    </section>
  );
};
const AboutPreview = () => (
  <section
    data-testid="about-preview-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
      <FadeUp className="relative">
        <div
          className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-brick/30"
          aria-hidden="true"
        />
        <img
          src={IMAGES.synthesis}
          alt="Chemist performing precision synthesis"
          loading="lazy"
          className="relative h-[420px] w-full rounded-3xl object-cover shadow-xl"
        />
      </FadeUp>
      <div>
        <SectionHeading
          dark={false}
          eyebrow="Who We Are"
          title="A research-driven house of synthesis"
          testid="about-preview-heading"
        />
        <FadeUp delay={0.15}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            {
              "Founded in 2023 in Hyderabad — India's pharmaceutical capital — DSR PHARMACHEM is a research-driven firm producing R&D organic specialty chemicals, building blocks, intermediates and custom synthesis products. A preferred vendor for catalogue companies around the world, we offer world-class chemistry support at every stage of the development process."
            }
          </p>
          <Link
            to="/about"
            data-testid="about-preview-link"
            className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-brick transition-colors duration-300 hover:text-brickh"
          >
            {"Read our story"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);
const Bento = () => (
  <section data-testid="products-bento-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Product Categories"
          title="Six verticals. One standard: purity."
          description="From R&D fine chemicals to herbal products — every compound shipped with uncompromising quality control."
          testid="bento-heading"
        />
        <FadeUp delay={0.2}>
          <Link
            to="/products"
            data-testid="bento-view-all-btn"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-sm font-bold text-white transition-colors duration-300 hover:border-sky hover:text-sky"
          >
            {"View All Products"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>
      <div className="mt-14 grid auto-rows-[230px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <FadeUp delay={i * 0.07} className={c.span} key={c.name}>
            <Link
              to="/products"
              data-testid={c.testid}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 transition-[border-color,box-shadow] duration-500 hover:border-sky/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="mb-3 w-fit rounded-full border border-sky/40 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sky backdrop-blur-sm">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-300">{c.blurb}</p>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const ServicesHome = () => (
  <section
    data-testid="services-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="Our Services"
        title="Chemistry support, end to end"
        description="From feasibility to validated scale-up — a dedicated team of post-graduates and Ph.D. chemists behind every programme."
        testid="services-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <FadeUp delay={i * 0.07} key={s.num}>
            <Link
              to="/services"
              data-testid={`home-${s.testid}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-sky transition-colors duration-300 group-hover:bg-brick group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm text-slate-300">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-brick">
                {"Learn more"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeUp>
        ))}
        <FadeUp delay={0.35}>
          <Link
            to="/contact"
            data-testid="services-cta-card"
            className="group flex h-full flex-col justify-between rounded-2xl bg-ink p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/30"
          >
            <h3 className="font-display text-2xl font-extrabold text-white">
              {"Have a molecule in mind?"}
            </h3>
            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brick px-6 py-3 font-display text-sm font-bold text-white transition-colors duration-300 group-hover:bg-brickh">
              {"Start an Enquiry "}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);
const VisionMission = () => (
  <section
    data-testid="vision-mission-section"
    className="relative overflow-hidden bg-deep py-24"
  >
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
      {[
        {
          label: "Our Vision",
          text: VISION,
          testid: "vision-card",
        },
        {
          label: "Our Mission",
          text: MISSION,
          testid: "mission-card",
        },
      ].map((card, i) => (
        <FadeUp delay={i * 0.12} key={card.label}>
          <div
            data-testid={card.testid}
            className="h-full rounded-3xl border border-white/10 bg-ink/60 p-10 backdrop-blur-sm"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
              {card.label}
            </p>
            <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-white md:text-2xl">
              {"“"}
              <span
                data-ve-dynamic="true"
                style={{
                  display: "contents",
                }}
              >
                {card.text}
              </span>
              {"”"}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);
const WhyUs = () => (
  <section data-testid="why-us-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="Why DSR Pharmachem"
        title="Built for partners who can't afford delays"
        testid="why-us-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {WHY_POINTS.map((w, i) => (
          <FadeUp delay={i * 0.06} key={w.title}>
            <div
              data-testid={`why-card-${i + 1}`}
              className="group h-full rounded-2xl border border-white/10 bg-panel p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-sky/30"
            >
              <w.icon className="h-6 w-6 text-sky" />
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {w.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const Certifications = () => (
  <section
    data-testid="certifications-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="Certifications & Quality"
        title="Certified systems, documented purity"
        testid="certifications-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CERTS.map((c, i) => (
          <FadeUp delay={i * 0.1} key={c.name}>
            <div
              data-testid={`cert-${c.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-sky">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-extrabold text-ink">
                  {c.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {c.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const GlobalReach = () => (
  <section
    data-testid="global-reach-section"
    className="relative overflow-hidden bg-ink py-24"
  >
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
      <div>
        <SectionHeading
          eyebrow="Global Reach"
          title="From Hyderabad to the world's labs"
          description="With production bases and R&D centres in Hyderabad, India, we are active exporters — our products have reached the United States, the United Kingdom and countries across Europe."
          testid="global-reach-heading"
        />
      </div>
      <div>
        {EXPORT_MARKETS.map((m, i) => (
          <FadeUp delay={i * 0.08} key={m}>
            <div
              data-testid={`market-${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center justify-between border-b border-white/10 py-5"
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-xs text-slate-500">
                  {"0"}
                  <span
                    data-ve-dynamic="true"
                    style={{
                      display: "contents",
                    }}
                  >
                    {i + 1}
                  </span>
                </span>
                <span className="font-display text-lg font-bold text-white">
                  {m}
                </span>
              </div>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sky">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                {" Active"}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const CtaBand = () => (
  <section data-testid="cta-section" className="bg-mist py-24 text-slate-900">
    <div className="mx-auto max-w-7xl px-6">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink px-8 py-16 text-center lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]"
            aria-hidden="true"
          />
          <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-sky">
            {"Custom Synthesis · Process R&D · CRO"}
          </p>
          <h2 className="relative mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {"Let's synthesise your next breakthrough."}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
            {
              "Send us your molecule, CAS number or project brief — our chemists respond with a feasibility assessment and quotation."
            }
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              data-testid="cta-enquiry-btn"
              className="inline-flex items-center gap-2 rounded-full bg-brick px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
            >
              {"Start an Enquiry "}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              data-testid="cta-services-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:border-sky hover:text-sky"
            >
              {"Explore Services"}
            </Link>
          </div>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "Confidential handling",
              "COA & MSDS supplied",
              "Response within 24 hours",
            ].map((t) => (
              <span
                className="flex items-center gap-2 text-xs text-slate-400"
                key={t}
              >
                <Check className="h-3.5 w-3.5 text-sky" /> {t}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);
function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Marquee />
      <AboutPreview />
      <Bento />
      <ServicesHome />
      <VisionMission />
      <WhyUs />
      <Certifications />
      <GlobalReach />
      <CtaBand />
    </React.Fragment>
  );
}
export default Home;
