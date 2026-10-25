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
    className="site-footer"
  >
    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.1fr_0.65fr_0.9fr_1.2fr]">
      <div>
        <img
          src="/DSRPC2-footer.svg"
          alt="DSR PHARMACHEM logo"
          width="500" height="183" className="h-auto w-64 max-w-full"
        />
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
          {
            "Architects of precision molecular synthesis. R&D-grade fine chemicals, building blocks and API intermediates from Hyderabad, India."
          }
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {CERTS.map((c) => (
            <span
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-slate-300"
              key={c.name}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="footer-column-heading">
          {"Explore"}
        </p>
        <ul className="mt-5 space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-300 transition-colors duration-300 hover:text-sky-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="footer-column-heading">
          {"Products"}
        </p>
        <ul className="mt-5 space-y-3">
          {PRODUCT_CATEGORIES.map((c) => (
            <li key={c.name}>
              <Link
                to="/products"
                data-testid={`footer-product-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-300 transition-colors duration-300 hover:text-sky-300"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="footer-column-heading">
          {"Contact"}
        </p>
        <ul className="mt-5 space-y-4 text-sm text-slate-300">
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
              className="transition-colors duration-300 hover:text-sky-300"
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
    <div className="relative border-t border-white/10 bg-black/15">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[11px] tracking-wide text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>{"© 2026 DSR PHARMACHEM (DSRPC PRIVATE LIMITED)"}</span>
        <span>{"Hyderabad · Telangana · India"}</span>
      </div>
    </div>
  </footer>
);
export { Footer };
