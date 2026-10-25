"use client";

import React from "react";

import { Atom, Waves, FlaskConical, Hexagon, Zap, Leaf, Layers } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_GROUPS } from "@/data/content";
import { FadeUp } from "@/components/Reveal";
import { PRODUCT_CATEGORIES } from "@/data/content";
import { Link } from "@/components/navigation";
import { ArrowUpRight } from "lucide-react";


import { PageHero } from "@/components/PageHero";
const PORTFOLIO_ICONS = [FlaskConical, Waves, Atom, Hexagon, Zap, Leaf, Layers];
const Innovation = () => {
  const groups = PORTFOLIO_GROUPS.map((group, index) => ({ ...group, index }));
  return (
  <section id="portfolio" data-testid="products-intro-section" className="products-portfolio">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="Redefining Chemical Innovation"
        title="Core capabilities & scientific portfolio"
        titleClassName="max-w-none text-3xl sm:text-4xl lg:text-5xl"
        description="DSR PHARMACHEM stands at the vanguard of chemical innovation — a pioneering force in the synthesis of R&D-grade organic specialty chemicals. Distinguished by an unyielding commitment to purity, technical rigor and reproducibility, we are a strategic partner and preferred global vendor for leading scientific catalogue firms."
        testid="products-intro-heading"
      />
      <div className="products-portfolio__grid">
        {groups.map((g) => {
          const Icon = PORTFOLIO_ICONS[g.index];
          return (
          <div key={g.group}>
            <article
              data-testid={`portfolio-group-${g.index + 1}`}
              className="products-portfolio__card"
            >
              <div className="portfolio-card__header">
                <span className="portfolio-card__icon"><Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="products-portfolio__number">
                  {String(g.index + 1).padStart(2, "0")}
                </span>
              </div>
                <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                  {g.group}
                </h3>
              <ul className="portfolio-card__compounds">
                {g.items.map((item) => (
                  <li
                    className="products-portfolio__compound"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="portfolio-card__footer">
                <span>{g.items.length} compound classes</span>
                <Link to="/contact">Discuss requirements <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        );})}
        <div className="portfolio-help">
          <span className="portfolio-help__eyebrow">Custom requirements</span>
          <h3>Looking for a<br />specific molecule?</h3>
          <p>Share your CAS number, target quantity and purity requirements with our chemists.</p>
          <Link to="/contact">Discuss your requirements <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  </section>
);};
const ProductLines = () => (
  <section
    data-testid="product-lines-section"
    id="product-verticals"
    className="products-verticals"
  >
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        dark={false}
        eyebrow="Our Products"
        title="Six product verticals"
        description="From micro-scale research quantities to macro-scale commercial supply — every product made to your specification."
        testid="product-lines-heading"
      />
      <div className="products-verticals__grid">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <FadeUp delay={i * 0.04} key={c.name}>
            <Link
              to="/contact"
              data-testid={`product-line-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="products-verticals__card group"
            >
              <div className="products-verticals__photo">
                <img src={c.image} alt="" loading="lazy" width="960" height="540" />
                <span className="products-verticals__number">
                {String(i + 1).padStart(2, "0")}
              </span>
              </div>
              <div className="products-verticals__body">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2d388a]">{c.tag}</p>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {c.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {c.blurb}
              </p>
              <span className="products-verticals__enquire">
                Enquire about this product
                <ArrowUpRight className="h-4 w-4" />
              </span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
function Products() {
  return (
    <div className="products-page">
      <PageHero
        testid="products-hero"
        compact
        inlineTitle
        descriptionClassName="max-w-none xl:whitespace-nowrap xl:text-base"
        titleLines={["Molecules engineered", "to specification."]}
        description="An expansive portfolio of high-purity compounds and advanced functional materials — from core building blocks to OLED materials."
      />
      <Innovation />
      <ProductLines />

    </div>
  );
}
export default Products;
