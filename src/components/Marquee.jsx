"use client";

import React from "react";
import { MARQUEE_ITEMS } from "@/data/content";
import { Hexagon } from "lucide-react";
const Row = () => (
  <div className="flex shrink-0 items-center">
    {MARQUEE_ITEMS.map((item) => (
      <span
        className="flex items-center font-mono text-xs uppercase tracking-[0.3em] text-slate-400"
        key={item}
      >
        <span className="px-8">{item}</span>
        <Hexagon className="h-2.5 w-2.5 fill-brick/50 text-brickh" />
      </span>
    ))}
  </div>
);
const Marquee = () => (
  <div
    data-testid="marquee-strip"
    className="relative overflow-hidden border-y border-white/10 bg-deep py-4"
  >
    <div className="flex w-max animate-marquee">
      <Row />
      <Row />
    </div>
  </div>
);
export { Marquee };
