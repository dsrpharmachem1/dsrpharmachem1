"use client";

import React from "react";
import { FadeUp } from "@/components/Reveal";
const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = true,
  testid,
}) => (
  <FadeUp>
    <p
      className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? "text-sky" : "text-brick"}`}
    >
      {eyebrow}
    </p>
    <h2
      data-testid={testid}
      className={`mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}
      >
        {description}
      </p>
    )}
  </FadeUp>
);
export { SectionHeading };
