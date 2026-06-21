import React, { useEffect, useState } from "react";
import { GitHub, LinkedIn, Menu, Close } from "./Icons";
import { socials } from "../data/portfolio";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto max-w-container px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass py-2.5 px-4 sm:px-5" : ""
        }`}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <a
          href="#home"
          onClick={(e) => go(e, "home")}
          className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
        >
          <span className="grid place-items-center h-9 w-9 rounded-xl btn-gold text-black font-bold">
            A
          </span>
          <span className="hidden sm:inline">
            Aharsh<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  active === l.id
                    ? "text-gold"
                    : "text-[#b8b8c2] hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:grid place-items-center h-9 w-9 rounded-lg chip text-[#cfcfd6]"
            aria-label="GitHub"
          >
            <GitHub width={18} height={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:grid place-items-center h-9 w-9 rounded-lg chip text-[#cfcfd6]"
            aria-label="LinkedIn"
          >
            <LinkedIn width={18} height={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="hidden sm:inline-flex btn-gold rounded-lg px-4 py-2 text-sm"
          >
            Let's talk
          </a>
          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-lg chip text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 mx-4 ${
          open ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass rounded-2xl p-3 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                className={`block px-4 py-3 rounded-xl text-sm ${
                  active === l.id
                    ? "text-gold bg-white/5"
                    : "text-[#cfcfd6] hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="btn-gold rounded-xl px-4 py-3 text-sm text-center mt-1"
          >
            Let's talk
          </a>
        </ul>
      </div>
    </header>
  );
}
