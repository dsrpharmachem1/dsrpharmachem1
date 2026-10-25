"use client";

import React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { INTEREST_OPTIONS } from "@/data/content";
import { LoaderCircle } from "lucide-react";
import { Send } from "lucide-react";
import { MapPin } from "lucide-react";
import { CONTACT } from "@/data/content";
import { FadeUp } from "@/components/Reveal";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
const EMPTY = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "General Enquiry",
  message: "",
};
const inputCls =
  "w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,box-shadow] duration-300 focus:border-sky focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]";
const Field = ({ label, htmlFor, children }) => (
  <div>
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400"
    >
      {label}
    </label>
    {children}
  </div>
);
const EnquiryForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.value,
    }));
  const submit = async (e) => {
    e.preventDefault();
    toast.info(
      "Preview only: enquiry delivery is not connected. Please use the email link to contact the company.",
    );
  };
  return (
    <form
      data-testid="enquiry-form"
      onSubmit={submit}
      className="rounded-3xl border border-white/10 bg-panel p-8 lg:p-10"
    >
      <h2 className="font-display text-2xl font-extrabold text-white">
        {"Send an enquiry"}
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        {
          "Preview only: enquiry delivery is not connected. Share your molecule, CAS number or project brief — we respond swiftly with the exact information you need."
        }
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *" htmlFor="name">
          <input
            id="name"
            data-testid="contact-name-input"
            required={true}
            value={form.name}
            onChange={update("name")}
            placeholder="Dr. Jane Doe"
            className={inputCls}
          />
        </Field>
        <Field label="Work Email *" htmlFor="email">
          <input
            id="email"
            data-testid="contact-email-input"
            type="email"
            required={true}
            value={form.email}
            onChange={update("email")}
            placeholder="jane@pharma.com"
            className={inputCls}
          />
        </Field>
        <Field label="Company / Institute" htmlFor="company">
          <input
            id="company"
            data-testid="contact-company-input"
            value={form.company}
            onChange={update("company")}
            placeholder="Acme Pharma Ltd."
            className={inputCls}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            data-testid="contact-phone-input"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 555 000 1234"
            className={inputCls}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="I'm interested in" htmlFor="interest">
            <select
              id="interest"
              data-testid="contact-interest-select"
              value={form.interest}
              onChange={update("interest")}
              className={`${inputCls} appearance-none`}
            >
              {INTEREST_OPTIONS.map((o) => (
                <option value={o} className="bg-ink text-white" key={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Project Details *" htmlFor="message">
            <textarea
              id="message"
              data-testid="contact-message-input"
              required={true}
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="CAS number, target quantity, purity requirements, timeline…"
              className={`${inputCls} resize-none`}
            />
          </Field>
        </div>
      </div>
      <button
        type="submit"
        data-testid="contact-submit-button"
        disabled={sending}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-brickh disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? (
          <React.Fragment>
            {"Sending "}
            <LoaderCircle className="h-4 w-4 animate-spin" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {"Submit Enquiry "}
            <Send className="h-4 w-4" />
          </React.Fragment>
        )}
      </button>
    </form>
  );
};
const InfoCards = () => (
  <div className="space-y-5">
    {[
      {
        icon: MapPin,
        label: "Corporate Office",
        value: CONTACT.corporate,
        testid: "contact-corporate-address",
      },
      {
        icon: MapPin,
        label: "Export Office",
        value: CONTACT.exportOffice,
        testid: "contact-export-address",
      },
    ].map((c) => (
      <FadeUp key={c.label}>
        <div
          data-testid={c.testid}
          className="rounded-2xl border border-white/10 bg-panel p-7"
        >
          <div className="flex items-center gap-3">
            <c.icon className="h-5 w-5 text-brickh" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
              {c.label}
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {c.value}
          </p>
        </div>
      </FadeUp>
    ))}
    <FadeUp>
      <div
        data-testid="contact-phones-card"
        className="rounded-2xl border border-white/10 bg-panel p-7"
      >
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-brickh" />
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
            {"Phone"}
          </p>
        </div>
        <div className="mt-4 space-y-1.5">
          {CONTACT.phones.map((p) => (
            <a
              href={`tel:${p.replace(/\s+/g, "")}`}
              data-testid={`contact-phone-${p.replace(/[^0-9]/g, "")}`}
              className="block text-sm text-slate-300 transition-colors duration-300 hover:text-sky"
              key={p}
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </FadeUp>
    <FadeUp>
      <div
        data-testid="contact-emails-card"
        className="rounded-2xl border border-white/10 bg-panel p-7"
      >
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-brickh" />
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
            {"Email"}
          </p>
        </div>
        <div className="mt-4 space-y-1.5">
          {CONTACT.emails.map((em) => (
            <a
              href={`mailto:${em}`}
              data-testid={`contact-email-${em.split("@")[0]}`}
              className="block text-sm text-slate-300 transition-colors duration-300 hover:text-sky"
              key={em}
            >
              {em}
            </a>
          ))}
        </div>
      </div>
    </FadeUp>
    <FadeUp>
      <div className="grid gap-5 sm:grid-cols-2">
        <div
          data-testid="contact-website-card"
          className="rounded-2xl border border-white/10 bg-panel p-7"
        >
          <Globe className="h-5 w-5 text-brickh" />
          <p className="mt-4 text-sm text-slate-300">{CONTACT.website}</p>
        </div>
        <div
          data-testid="contact-hours-card"
          className="rounded-2xl border border-white/10 bg-panel p-7"
        >
          <Clock className="h-5 w-5 text-brickh" />
          <p className="mt-4 text-sm text-slate-300">
            {"Response within 24 hours"}
          </p>
        </div>
      </div>
    </FadeUp>
  </div>
);
function Contact() {
  return (
    <React.Fragment>
      <PageHero
        testid="contact-hero"
        eyebrow="Contact Us · Hyderabad, India"
        titleLines={["Let's talk", "chemistry."]}
        description="Every enquiry gets a swift, precise response — tell us about your product or project requirements."
      />
      <section data-testid="contact-section" className="bg-ink py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeUp>
            <EnquiryForm />
          </FadeUp>
          <InfoCards />
        </div>
      </section>
    </React.Fragment>
  );
}
export default Contact;
