"use client";

import React from "react";
import { SERVICES } from "@/data/content";
import { FadeUp } from "@/components/Reveal";
import { Check } from "lucide-react";
import { Link } from "@/components/navigation";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WORKFLOW } from "@/data/content";
import { Users } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { PageHero } from "@/components/PageHero";
const ServiceBlocks = () => (
  <section data-testid="services-detail-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl space-y-20 px-6">
      {SERVICES.map((s, i) => (
        <FadeUp key={s.num}>
          <div
            data-testid={s.testid}
            className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 rounded-full border border-sky/40 bg-ink/70 px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-sky backdrop-blur-sm">
                {s.num}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-panel text-sky">
                  <s.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
                {s.desc}
              </p>
              <ul className="mt-7 space-y-3">
                {s.points.map((p) => (
                  <li
                    className="flex items-center gap-3 text-sm text-slate-300"
                    key={p}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brick/20 text-brickh">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                data-testid={`${s.testid}-enquire`}
                className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-sky transition-colors duration-300 hover:text-white"
              >
                {"Enquire about this service"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);
const Workflow = () => (
  <section
    data-testid="workflow-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="How We Work"
        title="From feasibility to validation"
        description="A disciplined, transparent workflow protects your timeline at every stage of the engagement."
        testid="workflow-heading"
      />
      <div className="mt-16 grid gap-8 md:grid-cols-5">
        {WORKFLOW.map((step, i) => (
          <FadeUp delay={i * 0.09} key={step}>
            <div data-testid={`workflow-step-${i + 1}`} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-semibold text-sky">
                  {i + 1}
                </span>
                {i < WORKFLOW.length - 1 && (
                  <span
                    className="hidden flex-1 border-t-2 border-dashed border-slate-300 md:mt-6 md:block md:w-full"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="mt-4 font-display text-base font-bold text-ink">
                {step}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const Engagement = () => (
  <section data-testid="engagement-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="Engagement Models"
        title="Structured around your programme"
        testid="engagement-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {[
          {
            icon: Users,
            title: "Dedicated FTE Model",
            desc: "Full-time-equivalent chemists assigned exclusively to your programme, with weekly reporting and complete IP transfer.",
            testid: "engagement-fte-card",
          },
          {
            icon: FolderKanban,
            title: "Project-Based Engagement",
            desc: "Fixed-scope projects with milestone-based delivery — feasibility, synthesis, scale-up and analytical validation.",
            testid: "engagement-project-card",
          },
        ].map((m, i) => (
          <FadeUp delay={i * 0.1} key={m.title}>
            <div
              data-testid={m.testid}
              className="group h-full rounded-2xl border border-white/10 bg-panel p-10 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-sky/30"
            >
              <m.icon className="h-7 w-7 text-sky" />
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {m.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
                {m.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.2}>
        <Link
          to="/contact"
          data-testid="services-bottom-cta"
          className="group mt-14 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
        >
          {"Discuss your project"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </FadeUp>
    </div>
  </section>
);
function Services() {
  return (
    <React.Fragment>
      <PageHero
        testid="services-hero"
        eyebrow="Services · CRO · Custom Synthesis"
        titleLines={["Your molecule,", "our methodology."]}
        description="World-class chemistry support at every stage of the development process — from first feasibility study to validated pilot-plant production."
      />
      <ServiceBlocks />
      <Workflow />
      <Engagement />
    </React.Fragment>
  );
}
export default Services;
