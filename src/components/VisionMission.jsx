"use client";

import { FadeUp } from "@/components/Reveal";
import { VISION, MISSION } from "@/data/content";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const VisionMission = () => (
  <section data-testid="vision-mission-section" className="purpose-section" aria-labelledby="purpose-heading">
    <div className="mx-auto max-w-7xl px-6">
      <FadeUp className="purpose-section__intro">
        <div>
          <p className="purpose-section__eyebrow">The purpose behind our chemistry</p>
          <h2 id="purpose-heading">Better chemistry. <span>Greater possibilities.</span></h2>
        </div>
      </FadeUp>
      <div className="purpose-section__cards">
        <FadeUp className="purpose-card purpose-card--vision">
          <img src="/assets/vision-mission-target.webp" alt="" loading="lazy" aria-hidden="true" className="purpose-card__background" />
          <div className="purpose-card__top">
            <h3 className="purpose-card__label">Our Vision</h3>
            <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
          </div>
          <div data-testid="vision-card" className="purpose-card__content">
            <p className="purpose-card__caption">Where we aspire to go</p>
            <p className="purpose-card__statement">{VISION}</p>
          </div>
          <div className="purpose-card__footer"><span>Innovation</span><span>Quality</span><span>Sustainability</span></div>
        </FadeUp>
        <FadeUp delay={0.12} className="purpose-card purpose-card--mission">
          <img src="/assets/vision-mission-target.webp" alt="" loading="lazy" aria-hidden="true" className="purpose-card__background" />
          <div className="purpose-card__top">
            <h3 className="purpose-card__label">Our Mission</h3>
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <div data-testid="mission-card" className="purpose-card__content">
            <p className="purpose-card__caption">How we make it happen</p>
            <p className="purpose-card__statement">{MISSION}</p>
          </div>
          <div className="purpose-card__footer"><span>Precision</span><span>Partnership</span><span>Customer focus</span></div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export { VisionMission };
