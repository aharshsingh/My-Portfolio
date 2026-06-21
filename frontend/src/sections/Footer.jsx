import React from "react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-container px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8a8a94]">
        <div className="flex items-center gap-2 font-display font-semibold text-white">
          <span className="grid place-items-center h-7 w-7 rounded-lg btn-gold text-black text-xs">
            A
          </span>
          {profile.name}
        </div>
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built with{" "}
          <span className="text-gold">React</span> &{" "}
          <span className="text-gold">Tailwind</span>.
        </p>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hover:text-gold transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
