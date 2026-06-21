import React from "react";
import Typewriter from "typewriter-effect";
import { profile, socials, stats } from "../data/portfolio";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  ArrowDown,
  ArrowUpRight,
  Doc,
} from "../components/Icons";
import me from "../public/WhatsApp_Image_2024-05-09_at_22.45.39_fda983ee-Photoroom.png-Photoroom-removebg-preview.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="mx-auto max-w-container w-full px-5 sm:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: copy */}
        <div>
          <div className="reveal in inline-flex items-center gap-2 chip rounded-full px-4 py-1.5 text-xs text-[#cfcfd6] mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            {profile.resumeNote}
          </div>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-7xl">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gold-gradient">{profile.name}</span>
          </h1>

          <div className="mt-4 text-xl sm:text-3xl font-display font-medium text-[#c9c9d2] flex flex-wrap items-center gap-2">
            <span className="text-[#7a7a86]">{"//"}</span>
            <span className="gold-only-gradient">
              <Typewriter
                options={{
                  strings: profile.roles,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-[#9a9aa4] text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold rounded-xl px-6 py-3.5 inline-flex items-center gap-2"
            >
              View my work <ArrowUpRight width={18} height={18} />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="btn-ghost rounded-xl px-6 py-3.5 inline-flex items-center gap-2"
            >
              <Doc width={18} height={18} /> Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost rounded-xl px-6 py-3.5 inline-flex items-center gap-2"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {[
              { I: GitHub, href: socials.github, label: "GitHub" },
              { I: LinkedIn, href: socials.linkedin, label: "LinkedIn" },
              { I: Twitter, href: socials.twitter, label: "Twitter" },
              { I: Instagram, href: socials.instagram, label: "Instagram" },
            ].map(({ I, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid place-items-center h-11 w-11 rounded-xl chip text-[#cfcfd6]"
              >
                <I width={19} height={19} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: avatar */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 float-slow">
            {/* spinning conic ring */}
            <div
              className="absolute -inset-3 rounded-full spin-slow opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #ffb400, transparent 55%)",
                filter: "blur(2px)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full overflow-hidden glass border-white/10">
              <img
                src={me}
                alt="Aharsh Singh"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-6 inset-x-0 hidden md:block">
        <div className="mx-auto max-w-container px-6">
          <div className="glass rounded-2xl grid grid-cols-4 divide-x divide-white/5">
            {stats.map((s) => (
              <div key={s.label} className="py-5 text-center">
                <div className="font-display text-2xl font-bold gold-only-gradient">
                  {s.value}
                </div>
                <div className="text-xs text-[#8a8a94] mt-1 tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden text-[#8a8a94]"
        aria-label="Scroll down"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
