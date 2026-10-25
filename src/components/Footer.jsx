"use client";

import React from "react";
import { CERTS } from "@/data/content";
import { NAV_LINKS } from "@/data/content";
import { Link } from "@/components/navigation";
import { PRODUCT_CATEGORIES } from "@/data/content";
import { MapPin } from "lucide-react";
import { CONTACT } from "@/data/content";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
const Footer = () => (
  <footer
    data-testid="site-footer"
    className="border-t border-white/10 bg-[#080E1F]"
  >
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <img
          src="/logo.png"
          alt="DSR PHARMACHEM logo"
          className="h-12 w-auto rounded-lg bg-white/95 p-1"
        />
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
          {
            "Architects of precision molecular synthesis. R&D-grade fine chemicals, building blocks and API intermediates from Hyderabad, India."
          }
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {CERTS.map((c) => (
            <span
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400"
              key={c.name}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
          {"Explore"}
        </p>
        <ul className="mt-5 space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
          {"Products"}
        </p>
        <ul className="mt-5 space-y-3">
          {PRODUCT_CATEGORIES.map((c) => (
            <li key={c.name}>
              <Link
                to="/products"
                data-testid={`footer-product-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
          {"Contact"}
        </p>
        <ul className="mt-5 space-y-4 text-sm text-slate-400">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brickh" />
            <span>{CONTACT.corporate}</span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brickh" />
            <span>{CONTACT.phones.join(" · ")}</span>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brickh" />
            <a
              href={`mailto:${CONTACT.emails[0]}`}
              data-testid="footer-email-link"
              className="transition-colors duration-300 hover:text-white"
            >
              {CONTACT.emails[0]}
            </a>
          </li>
          <li className="flex gap-3">
            <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brickh" />
            <span>{CONTACT.website}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>{"© 2026 DSR PHARMACHEM (DSRPC PRIVATE LIMITED)"}</span>
        <span>{"Hyderabad · Telangana · India"}</span>
      </div>
    </div>
  </footer>
);
export { Footer };
