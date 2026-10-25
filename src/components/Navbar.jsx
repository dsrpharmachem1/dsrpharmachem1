"use client";

import React from "react";
import { useState } from "react";
import { useLocation } from "@/components/navigation";
import { useEffect } from "react";
import { Link } from "@/components/navigation";
import { NAV_LINKS } from "@/data/content";
import { NavLink } from "@/components/navigation";
import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white border-slate-200 transition-shadow duration-300 ${scrolled || open ? "shadow-md shadow-slate-900/10" : "shadow-sm"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link to="/" data-testid="nav-logo" className="flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600">
          <img
            src="/DSRPC2.svg"
            alt="DSR PHARMACHEM logo"
            width="500"
            height="183"
            className="h-auto w-40 object-contain sm:w-48"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              to={link.path}
              data-testid={link.testid}
              className={({ isActive }) =>
                `font-display text-sm font-semibold transition-colors duration-300 ${isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"}`
              }
              key={link.path}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-quote-btn"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brick px-5 py-2.5 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh"
          >
            {"Request Quote"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>
        <button
          type="button"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-800 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav
          data-testid="nav-mobile-menu"
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                to={link.path}
                data-testid={`${link.testid}-mobile`}
                className={({ isActive }) =>
                  `font-display text-lg font-bold ${isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"}`
                }
                key={link.path}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="nav-quote-btn-mobile"
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brick px-6 py-3 font-display text-sm font-bold text-white"
            >
              {"Request Quote "}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
export { Navbar };
