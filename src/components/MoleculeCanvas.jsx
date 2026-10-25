"use client";

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
const MoleculeCanvas = ({ className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let raf;
    let w = 0;
    let h = 0;
    let nodes = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = {
      x: 0.5,
      y: 0.5,
    };
    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(64, Math.floor((w * h) / 20000));
      nodes = Array.from(
        {
          length: count,
        },
        () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          r: Math.random() * 1.7 + 0.8,
          red: Math.random() < 0.12,
        }),
      );
    };
    const onMouse = (e) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const px = (mouse.x - 0.5) * 20;
      const py = (mouse.y - 0.5) * 20;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -24) n.x = w + 24;
        if (n.x > w + 24) n.x = -24;
        if (n.y < -24) n.y = h + 24;
        if (n.y > h + 24) n.y = -24;
      }
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(56,189,248,${(1 - d / 130) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + px * (a.r / 2.5), a.y + py * (a.r / 2.5));
            ctx.lineTo(b.x + px * (b.r / 2.5), b.y + py * (b.r / 2.5));
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.red ? "rgba(184,50,52,0.85)" : "rgba(56,189,248,0.5)";
        ctx.beginPath();
        ctx.arc(
          n.x + px * (n.r / 2.5),
          n.y + py * (n.r / 2.5),
          n.r,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);
  return <canvas ref={ref} className={className} aria-hidden="true" />;
};
export { MoleculeCanvas };
