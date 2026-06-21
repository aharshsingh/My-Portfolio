import React from "react";
import SectionHeading from "../components/SectionHeading";
import { professionalProjects, personalProjects } from "../data/portfolio";
import { ArrowUpRight, GitHub } from "../components/Icons";

import fashion from "../public/Untitled design.png";
import task from "../public/Screenshot 2024-12-29 163402.png";
import exam from "../public/Screenshot 2024-12-30 133515.png";
import crypto from "../public/1675801227-cryptowallet.jpg";
import ims from "../public/11Screenshot 2024-12-31 095542.png";
import calculator from "../public/Screenshot 2025-02-21 134727.png";

const images = {
  fashion,
  manageit: task,
  examlynk: exam,
  tensight: ims,
  crypto,
  calculator,
};

function SubHeading({ children, note }) {
  return (
    <div className="reveal flex items-center gap-4 mb-8 mt-4">
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white whitespace-nowrap">
        {children}
      </h3>
      {note && <span className="text-sm text-[#8a8a94]">{note}</span>}
      <span className="hairline flex-1" />
    </div>
  );
}

/* Text-driven card for enterprise / professional work (no public demo) */
function ProCard({ p }) {
  return (
    <article className="reveal group glass glass-hover rounded-3xl overflow-hidden flex flex-col">
      <div className="relative p-6 sm:p-7 border-b border-white/5 overflow-hidden">
        <div className="absolute -top-16 -right-10 w-44 h-44 bg-gold/15 blur-3xl rounded-full pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <span className="section-eyebrow">{p.category}</span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mt-1.5">
              {p.title}
            </h3>
          </div>
          <span className="grid place-items-center h-12 w-12 rounded-2xl btn-gold text-black font-display font-bold shrink-0">
            {p.monogram}
          </span>
        </div>
        <div className="relative flex flex-wrap gap-2 mt-4">
          {p.stack.map((s) => (
            <span
              key={s}
              className="chip rounded-md px-2.5 py-1 text-xs text-[#c9c9d2]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1">
        <ul className="space-y-3">
          {p.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-[#9a9aa4] leading-relaxed"
            >
              <span className="text-gold mt-0.5 shrink-0">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 sm:px-7 pb-6">
        <span className="chip rounded-lg px-3 py-2 text-xs text-[#8a8a94] inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Enterprise · Private
        </span>
      </div>
    </article>
  );
}

/* Image card for personal projects with live demos */
function PersonalCard({ p, large }) {
  return (
    <article
      className={`reveal group glass glass-hover rounded-3xl overflow-hidden flex flex-col ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <div
          className={`relative ${large ? "aspect-[16/8]" : "aspect-[16/10]"} overflow-hidden`}
        >
          <img
            src={images[p.key]}
            alt={p.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/30 to-transparent" />
        </div>
        {p.featured && (
          <span className="absolute top-4 left-4 chip rounded-full px-3 py-1 text-xs text-gold backdrop-blur">
            Featured
          </span>
        )}
        {p.note && (
          <span className="absolute top-4 right-4 chip rounded-full px-3 py-1 text-xs text-[#cfcfd6] backdrop-blur">
            {p.note}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-white">
          {p.title}
        </h3>
        <p className="text-[#9a9aa4] text-sm leading-relaxed mt-2.5 flex-1">
          {p.blurb}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="chip rounded-md px-2.5 py-1 text-xs text-[#c9c9d2]"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-6">
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="btn-gold rounded-lg px-4 py-2.5 text-sm inline-flex items-center gap-2"
          >
            Live demo <ArrowUpRight width={16} height={16} />
          </a>
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost rounded-lg px-4 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <GitHub width={16} height={16} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured"
          accent="Projects"
        />

        <SubHeading note="Enterprise & client products">
          Professional Work
        </SubHeading>
        <div className="grid lg:grid-cols-2 gap-6">
          {professionalProjects.map((p) => (
            <ProCard key={p.key} p={p} />
          ))}
        </div>

        <SubHeading note="Built & shipped solo · live demos">
          Personal Projects
        </SubHeading>
        <div className="grid lg:grid-cols-2 gap-6">
          {personalProjects.map((p, i) => (
            <PersonalCard key={p.key} p={p} large={i === 0} />
          ))}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/aharshsingh?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost rounded-xl px-6 py-3.5 inline-flex items-center gap-2"
          >
            <GitHub width={18} height={18} /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
