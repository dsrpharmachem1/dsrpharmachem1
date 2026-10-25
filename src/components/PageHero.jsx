"use client";

import React from "react";
import { FadeUp } from "@/components/Reveal";
import { MaskedLines } from "@/components/Reveal";
const PageHero = ({ eyebrow, titleLines, description, testid, inlineTitle = false, descriptionClassName = "max-w-2xl", compact = false }) => (
  <section
    data-testid={testid}
    className={`relative overflow-hidden bg-ink ${compact ? "pb-[26px] pt-28 lg:pb-[34px] lg:pt-32" : "pb-16 pt-36 lg:pb-24 lg:pt-48"}`}
  >
    <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.10),transparent_50%)]"
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-7xl px-6">
      {eyebrow && <FadeUp>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
          {eyebrow}
        </p>
      </FadeUp>}
      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {inlineTitle ? (
          <span className="lg:whitespace-nowrap">
            {titleLines.map((line, index) => <React.Fragment key={line}>{index > 0 && " "}<span className={index === titleLines.length - 1 ? "text-sky" : ""}>{line}</span></React.Fragment>)}
          </span>
        ) : <MaskedLines
          lines={titleLines}
          accentIndex={titleLines.length - 1}
          delay={0.1}
        />}
      </h1>
      {description && (
        <FadeUp delay={0.4}>
          <p className={`mt-6 ${descriptionClassName} text-base leading-relaxed text-slate-400 md:text-lg`}>
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  </section>
);
export { PageHero };
