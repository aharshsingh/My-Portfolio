import React from "react";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/portfolio";

import cpp from "../public/c.png";
import js from "../public/js.png";
import html from "../public/html.png";
import css from "../public/css.png";
import mongodb from "../public/mongodb.png";
import react from "../public/react.png";
import figma from "../public/download__4_-removebg-preview.png";
import github from "../public/25231.png";
import postman from "../public/postman.png";
import nodejs from "../public/nodejs.png";
import nextjs from "../public/nextjs.png";
import netlify from "../public/netlify.png";
import mysql from "../public/mysql.png";
import express from "../public/express.png";
import redux from "../public/redux.png";

const logos = [
  { src: cpp, name: "C++" },
  { src: js, name: "JavaScript" },
  { src: react, name: "React" },
  { src: nextjs, name: "Next.js" },
  { src: nodejs, name: "Node.js" },
  { src: express, name: "Express" },
  { src: mongodb, name: "MongoDB" },
  { src: mysql, name: "MySQL" },
  { src: html, name: "HTML5" },
  { src: css, name: "CSS3" },
  { src: redux, name: "Redux" },
  { src: github, name: "GitHub" },
  { src: postman, name: "Postman" },
  { src: figma, name: "Figma" },
  { src: netlify, name: "Netlify" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <SectionHeading
          eyebrow="What I work with"
          title="My"
          accent="Skills"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className="reveal glass glass-hover rounded-2xl p-7"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg btn-gold text-black font-display font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-white text-lg">
                  {g.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="chip rounded-full px-3.5 py-1.5 text-sm text-[#c9c9d2]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="mt-16 relative overflow-hidden py-6 border-y border-white/5">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: "linear-gradient(90deg,var(--bg),transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: "linear-gradient(270deg,var(--bg),transparent)" }}
        />
        <div className="marquee-track gap-14 items-center">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={l.src}
                alt={l.name}
                className="h-9 w-9 object-contain"
              />
              <span className="text-sm text-[#9a9aa4] font-medium whitespace-nowrap">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
