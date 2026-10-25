"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { ABOUT_BLOCKS } from "@/data/content";
import { FadeUp } from "@/components/Reveal";
import { VisionMission } from "@/components/VisionMission";

import { SectionHeading } from "@/components/SectionHeading";
import { WHY_POINTS } from "@/data/content";
import { VALUES } from "@/data/content";
import { Check } from "lucide-react";
import { CERTS } from "@/data/content";
import { ShieldCheck } from "lucide-react";
import { Link } from "@/components/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Marquee } from "@/components/Marquee";
const BLOCK_IMAGES = [
  IMAGES.synthesis,
  IMAGES.glassware,
  IMAGES.plant,
  "/assets/global-reach-map.svg",
  "/assets/biomedical-research.webp",
];
const Story = () => (
  <section
    data-testid="about-story-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl space-y-24 px-6">
      {ABOUT_BLOCKS.map((b, i) => (
        <FadeUp key={b.num}>
          <div
            data-testid={`about-block-${b.num}`}
            className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-brick/25"
                aria-hidden="true"
              />
              <img
                src={BLOCK_IMAGES[i]}
                alt={i === 3 ? "World map showing export connections from Hyderabad, India to the USA, United Kingdom and Europe" : i === 4 ? "Laboratory scientist examining samples with a microscope" : b.title}
                loading="lazy"
                className={i === 3 ? "relative h-auto w-full rounded-3xl shadow-xl" : "relative h-[340px] w-full rounded-3xl object-cover shadow-xl"}
              />
              <span className="absolute -bottom-5 right-6 rounded-2xl bg-ink px-5 py-3 font-mono text-sm font-semibold tracking-[0.2em] text-sky shadow-lg">
                {b.num}
              </span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brick">
                {"Section "}
                <span
                  data-ve-dynamic="true"
                  style={{
                    display: "contents",
                  }}
                >
                  {b.num}
                </span>
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {b.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
                {b.text}
              </p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);
const WhyUs = () => (
  <section data-testid="about-why-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        title="Six reasons why DSR PHARMACHEM?"
        titleClassName="max-w-none text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(32px,3.4vw,48px)]"
        testid="about-why-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {WHY_POINTS.map((w, i) => (
          <FadeUp delay={i * 0.06} key={w.title}>
            <div className="group h-full rounded-2xl border border-white/10 bg-panel p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-sky/30">
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
      <FadeUp delay={0.2}>
        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-white/10 pt-10">
          <span className="mr-2 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            {"Core Values"}
          </span>
          {VALUES.map((v) => (
            <span
              data-testid={`value-${v.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300"
              key={v}
            >
              <Check className="h-3.5 w-3.5 text-sky" /> {v}
            </span>
          ))}
        </div>
      </FadeUp>
    </div>
  </section>
);
const Certifications = () => (
  <section
    data-testid="about-certs-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading
          dark={false}
          eyebrow="Certifications"
          title="Quality you can audit"
          description="Our quality, environmental and occupational-safety systems are certified to international standards — every order is backed by robust quality control and packaging facilities."
          testid="about-certs-heading"
        />
        <div className="space-y-4">
          {CERTS.map((c, i) => (
            <FadeUp delay={i * 0.08} key={c.name}>
              <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6">
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
      <FadeUp delay={0.15}>
        <Link
          to="/contact"
          data-testid="about-cta-link"
          className="group mt-16 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
        >
          {"Work with our scientists"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </FadeUp>
    </div>
  </section>
);
function About() {
  return (
    <React.Fragment>
      <PageHero
        testid="about-hero"
        compact
        inlineTitle
        descriptionClassName="max-w-5xl"
        titleLines={["Chemistry, practiced", "as a craft."]}
        description="DSR PHARMACHEM (DSRPC Private Limited) — a leading manufacturer and supplier of fine chemicals, API intermediates, CRO services, natural, biomedical, herbal and cosmetic products."
      />
      <Marquee />
      <Story />
      <VisionMission />
      <WhyUs />
      <Certifications />
    </React.Fragment>
  );
}
export default About;
