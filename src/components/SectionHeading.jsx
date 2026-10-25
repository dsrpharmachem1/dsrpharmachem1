"use client";

import React from "react";
import { FadeUp } from "@/components/Reveal";
const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = true,
  testid,
  titleClassName = "max-w-2xl text-4xl sm:text-5xl",
}) => (
  <FadeUp>
    <p
      className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? "text-sky" : "text-brick"}`}
    >
      {eyebrow}
    </p>
    <h2
      data-testid={testid}
      className={`mt-4 font-display font-extrabold tracking-tight ${titleClassName} ${dark ? "text-white" : "text-ink"}`}
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
