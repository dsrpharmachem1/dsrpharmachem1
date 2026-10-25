"use client";

import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_GROUPS } from "@/data/content";
import { FadeUp } from "@/components/Reveal";
import { PRODUCT_CATEGORIES } from "@/data/content";
import { Link } from "@/components/navigation";
import { ArrowUpRight } from "lucide-react";
import { PackageCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
const Innovation = () => (
  <section data-testid="products-intro-section" className="bg-ink py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="Redefining Chemical Innovation"
        title="Core capabilities & scientific portfolio"
        description="DSR PHARMACHEM stands at the vanguard of chemical innovation — a pioneering force in the synthesis of R&D-grade organic specialty chemicals. Distinguished by an unyielding commitment to purity, technical rigor and reproducibility, we are a strategic partner and preferred global vendor for leading scientific catalogue firms."
        testid="products-intro-heading"
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {PORTFOLIO_GROUPS.map((g, i) => (
          <FadeUp delay={(i % 2) * 0.08} key={g.group}>
            <div
              data-testid={`portfolio-group-${i + 1}`}
              className="h-full rounded-2xl border border-white/10 bg-panel p-8 transition-[border-color] duration-300 hover:border-sky/30"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-white">
                  {g.group}
                </h3>
                <span className="shrink-0 font-mono text-xs text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    className="rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-xs text-slate-300 transition-colors duration-300 hover:border-sky/50 hover:text-sky"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
const ProductLines = () => (
  <section
    data-testid="product-lines-section"
    className="bg-mist py-24 text-slate-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="Our Products"
        title="Six product verticals"
        description="From micro-scale research quantities to macro-scale commercial supply — every product made to your specification."
        testid="product-lines-heading"
      />
      <div className="mt-14 border-t border-slate-200">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <FadeUp delay={i * 0.04} key={c.name}>
            <Link
              to="/contact"
              data-testid={`product-line-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group grid items-center gap-4 border-b border-slate-200 py-7 transition-colors duration-300 hover:bg-white sm:grid-cols-[64px_1fr_auto] lg:grid-cols-[80px_1.2fr_1.6fr_auto]"
            >
              <span className="font-mono text-sm text-slate-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink lg:text-2xl">
                {c.name}
              </h3>
              <p className="hidden text-sm text-slate-600 lg:block">
                {c.blurb}
              </p>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-ink transition-[background-color,color,border-color] duration-300 group-hover:border-brick group-hover:bg-brick group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.15}>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-600">
          <span className="font-display font-bold text-ink">
            {"Natural Products spotlight:"}
          </span>
          {
            " DSR PHARMACHEM specialises in the isolation and synthesis of natural products and is one of the leading suppliers in gram to multi-kilogram scale. Popular products include Harmine, Piperlongumine, Picrotoxin and Coumestrol."
          }
        </p>
      </FadeUp>
    </div>
  </section>
);
const Packaging = () => (
  <section
    data-testid="packaging-section"
    className="relative overflow-hidden bg-deep py-24"
  >
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[auto_1fr_auto]">
      <FadeUp>
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-ink text-sky">
          <PackageCheck className="h-9 w-9" />
        </span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {"Custom packaging & bulk supply"}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          {
            "Custom pack sizes from 1 g to 50 kg, shipped with COA & MSDS documentation. Robust quality control and packaging facilities ensure every order is delivered safely."
          }
        </p>
      </FadeUp>
      <FadeUp delay={0.2}>
        <Link
          to="/contact"
          data-testid="packaging-quote-btn"
          className="group inline-flex items-center gap-2 rounded-full bg-brick px-7 py-3.5 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
        >
          {"Request a Quote"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </FadeUp>
    </div>
  </section>
);
function Products() {
  return (
    <React.Fragment>
      <PageHero
        testid="products-hero"
        eyebrow="Products · R&D Grade · mg to kg"
        titleLines={["Molecules engineered", "to specification."]}
        description="An expansive portfolio of high-purity compounds and advanced functional materials — from core building blocks to OLED materials."
      />
      <Innovation />
      <ProductLines />
      <Packaging />
    </React.Fragment>
  );
}
export default Products;
