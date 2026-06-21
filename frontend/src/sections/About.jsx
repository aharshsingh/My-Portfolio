import React from "react";
import SectionHeading from "../components/SectionHeading";
import { about, socials } from "../data/portfolio";
import { ArrowUpRight } from "../components/Icons";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <SectionHeading eyebrow="Get to know me" title="About" accent="Me" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="reveal glass rounded-3xl p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-white mb-5">
              Developer, designer & lifelong learner.
            </h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[#9a9aa4] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost rounded-xl px-5 py-2.5 text-sm inline-flex items-center gap-2"
              >
                GitHub <ArrowUpRight width={16} height={16} />
              </a>
              <a
                href={socials.blog}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost rounded-xl px-5 py-2.5 text-sm inline-flex items-center gap-2"
              >
                Read my blog <ArrowUpRight width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="reveal glass rounded-3xl p-8 sm:p-10">
            <div className="section-eyebrow mb-6">Quick facts</div>
            <ul className="divide-y divide-white/5">
              {about.facts.map((f) => (
                <li
                  key={f.k}
                  className="flex items-center justify-between py-3.5 text-sm"
                >
                  <span className="text-[#8a8a94]">{f.k}</span>
                  <span className="text-white font-medium text-right">
                    {f.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
