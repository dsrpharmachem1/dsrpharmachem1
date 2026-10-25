"use client";

import React from "react";
import { Earth } from "lucide-react";





import { FadeUp } from "@/components/Reveal";

import { Link } from "@/components/navigation";
import { ArrowRight } from "lucide-react";
import { STATS } from "@/data/content";
import { IMAGES } from "@/data/content";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/content";
import { SERVICES } from "@/data/content";
import { VisionMission } from "@/components/VisionMission";

import { WHY_POINTS } from "@/data/content";
import { CERTS } from "@/data/content";
import { EXPORT_MARKETS } from "@/data/content";
import { Check } from "lucide-react";
import { Marquee } from "@/components/Marquee";
const Hero = () => (
  <section data-testid="hero-section" className="premium-hero">
    <div className="premium-hero__scene" aria-hidden="true">
      <img src="/assets/molecular-capsule-hero.webp" alt="" width="2560" height="1911" fetchPriority="high" decoding="async" className="premium-hero__image" />
    </div>
    <div className="premium-hero__shade" aria-hidden="true" />
    <div className="premium-hero__inner">
      <div className="premium-hero__copy">
        <h1 className="premium-hero__title">
          Building blocks of <span>tomorrow's medicines.</span>
        </h1>
        <p className="premium-hero__description">
          DSR PHARMACHEM manufactures premium R&amp;D-grade fine chemicals,
          building blocks and advanced organic intermediates — delivered promptly,
          reliably and at the best possible prices from Hyderabad, India.
        </p>
        <div className="premium-hero__actions">
          <Link to="/products" data-testid="hero-explore-products-btn" className="premium-hero__primary">
            Explore Products <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" data-testid="hero-contact-btn" className="premium-hero__secondary">
            Talk to Our Chemists <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="premium-hero__footer">
        <div className="premium-hero__stats">
          {STATS.map((s) => (
            <div className="premium-hero__stat" data-testid={`stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={s.label}>
              <p className="premium-hero__value">{s.value}</p>
              <p className="premium-hero__label">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="premium-hero__cert">
          <ShieldCheck className="h-8 w-8 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="font-display text-sm font-bold text-white">ISO 9001:2015</p>
            <p className="mt-1 text-xs text-slate-300">Certified Quality Systems</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
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
  <section data-testid="products-bento-section" className="product-showcase">
    <img src="/assets/molecular-capsule-hero.webp" alt="" loading="lazy" className="product-showcase__background" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          dark={false}
          eyebrow="Product Categories"
          title={<>Six verticals. One standard: <span className="text-[#2d388a]">purity.</span></>}
          titleClassName="max-w-none text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(36px,3.6vw,48px)]"
          description="From R&D fine chemicals to herbal products — every compound shipped with uncompromising quality control."
          testid="bento-heading"
        />
        <FadeUp delay={0.2}>
          <Link
            to="/products"
            data-testid="bento-view-all-btn"
            className="product-showcase__all group"
          >
            {"View All Products"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>
      <div className="product-showcase__grid">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <FadeUp delay={i * 0.07} key={c.name}>
            <Link
              to="/products"
              data-testid={c.testid}
              className="product-showcase__card group"
            >
              <div className="product-showcase__photo">
                <img
                src={c.image}
                alt=""
                width="960"
                height="540"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
                <span className="product-showcase__number">0{i + 1}</span>
              </div>
              <div className="product-showcase__body">
                <span className="product-showcase__tag">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.blurb}</p>
                <span className="product-showcase__explore">
                  Explore category <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
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
        titleClassName="max-w-none text-3xl sm:text-4xl lg:text-5xl"
        description="From feasibility to validated scale-up — a dedicated team of post-graduates and Ph.D. chemists behind every programme."
        testid="services-heading"
      />
      <div className="service-preview-grid">
        {SERVICES.map((s, i) => (
          <FadeUp delay={i * 0.07} key={s.num}>
            <Link
              to={`/services/#${s.testid}`}
              data-testid={`home-${s.testid}`}
              className="service-preview-card group"
            >
              <div className="service-preview-card__image">
                <img src={s.image} alt="" loading="lazy" width="1200" height="750" />
                <span className="service-preview-card__number">
                  {s.num}
                </span>
              </div>
              <div className="service-preview-card__body">
                <span className="service-preview-card__icon"><s.icon className="h-5 w-5" aria-hidden="true" /></span>
              <h3 className="font-display text-xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
              <ul className="service-preview-card__points">
                {s.points.slice(0, 2).map((point) => <li key={point}><Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />{point}</li>)}
              </ul>
              <span className="service-preview-card__link">
                Explore service
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
              </div>
            </Link>
          </FadeUp>
        ))}
        <FadeUp delay={0.35}>
          <Link
            to="/contact"
            data-testid="services-cta-card"
            className="service-preview-enquiry group"
          >
            <div>
            <span className="service-preview-enquiry__eyebrow">Your next breakthrough</span>
            <h3 className="mt-8 max-w-xs font-display text-3xl font-bold leading-tight tracking-tight text-white">
              {"Have a molecule in mind?"}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">Share your molecule, CAS number or project brief. Our chemists can help you define the next step.</p>
            </div>
            <div>
            <p className="mb-5 text-xs text-slate-300">Feasibility assessment &amp; quotation</p>
            <span className="inline-flex w-full items-center justify-between gap-2 rounded-md bg-brick px-5 py-3.5 font-display text-sm font-bold text-white transition-colors duration-300 group-hover:bg-brickh">
              {"Start an Enquiry "}
              <ArrowUpRight className="h-4 w-4" />
            </span>
            </div>
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);
const WhyUs = () => (
  <section data-testid="why-us-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="Why DSR Pharmachem"
        title="Built for partners who can't afford delays"
        titleClassName="max-w-none text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(32px,3.4vw,48px)]"
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
        titleClassName="max-w-none text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(32px,3.4vw,48px)]"
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
          title="From Hyderabad to the world"
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
              <div className="flex min-w-0 items-center gap-3 sm:gap-5">
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
                <span className="font-display text-sm font-bold text-white sm:text-lg">
                  {m}
                </span>
              </div>
                {i < 3 ? (
                  <img src={`/assets/flag-${["us", "gb", "eu"][i]}.svg`} alt="" aria-hidden="true" width="40" height="28" className="h-7 w-10 shrink-0 rounded-sm border border-white/20 object-cover shadow-sm" />
                ) : (
                  <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded-sm border border-sky/30 bg-sky/10 text-sky"><Earth className="h-5 w-5" aria-hidden="true" /></span>
                )}
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
