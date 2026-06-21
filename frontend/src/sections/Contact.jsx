import React from "react";
import SectionHeading from "../components/SectionHeading";
import { profile, socials } from "../data/portfolio";
import {
  Mail,
  Phone,
  Pin,
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
} from "../components/Icons";

const details = [
  { I: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { I: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { I: Pin, label: "Location", value: "Ayodhya / Delhi, India" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <SectionHeading eyebrow="Let's build something" title="Get in" accent="Touch" />

        <div className="reveal relative glass rounded-3xl overflow-hidden p-8 sm:p-14 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="text-[#9a9aa4] mt-4 max-w-xl mx-auto leading-relaxed">
              Don't be shy! I'm always open to discussing new projects, creative
              ideas or opportunities to be part of your vision. Drop me a line
              and let's make it happen.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn-gold rounded-xl px-7 py-3.5 inline-flex items-center gap-2 mt-8"
            >
              Say hello <ArrowUpRight width={18} height={18} />
            </a>

            <div className="grid sm:grid-cols-3 gap-4 mt-12 text-left">
              {details.map(({ I, label, value, href }) => {
                const inner = (
                  <div className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 h-full">
                    <span className="grid place-items-center h-11 w-11 rounded-xl btn-gold text-black shrink-0">
                      <I width={20} height={20} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs text-[#8a8a94] uppercase tracking-wide">
                        {label}
                      </div>
                      <div className="text-white text-sm font-medium truncate">
                        {value}
                      </div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-3 mt-10">
              {[
                { I: GitHub, href: socials.github },
                { I: LinkedIn, href: socials.linkedin },
                { I: Twitter, href: socials.twitter },
                { I: Instagram, href: socials.instagram },
              ].map(({ I, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center h-11 w-11 rounded-xl chip text-[#cfcfd6]"
                >
                  <I width={19} height={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
