import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { experience, education } from "../data/portfolio";

function Timeline({ items, render }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      // Fill grows as the viewport "reading line" (55% down the screen)
      // travels through the list.
      const passed = window.innerHeight * 0.55 - rect.top;
      const p = Math.max(0, Math.min(1, passed / rect.height));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={ref} className="relative ml-3">
      {/* faint static track */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px bg-white/10"
      />
      {/* gold line that draws as you scroll */}
      <span
        aria-hidden
        className="absolute left-0 top-0 w-px bg-gradient-to-b from-goldsoft to-gold"
        style={{
          height: `${progress * 100}%`,
          boxShadow: "0 0 12px rgba(255,180,0,0.65)",
          transition: "height 0.15s ease-out",
        }}
      />
      {items.map((it, i) => {
        const active = progress * items.length >= i + 0.4;
        return (
          <li
            key={i}
            className="reveal mb-8 last:mb-0 pl-7"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[#07070a] transition-all duration-300 ${
                active
                  ? "btn-gold scale-110"
                  : "bg-white/15"
              }`}
              style={
                active
                  ? { boxShadow: "0 0 14px rgba(255,180,0,0.8)" }
                  : undefined
              }
            />
            {render(it)}
          </li>
        );
      })}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <SectionHeading
          eyebrow="My journey"
          title="Experience &"
          accent="Education"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-gold">●</span> Professional Experience
            </h3>
            <Timeline
              items={experience}
              render={(it) => (
                <div className="glass glass-hover rounded-2xl p-5">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-xs chip rounded-full px-3 py-1 text-gold">
                      {it.tag}
                    </span>
                    <span className="text-xs text-[#8a8a94]">{it.period}</span>
                  </div>
                  <h4 className="font-semibold text-white">{it.role}</h4>
                  <div className="text-gold text-sm">{it.org}</div>
                  {it.bullets ? (
                    <ul className="mt-3 space-y-1.5">
                      {it.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2 text-[#9a9aa4] text-sm leading-relaxed"
                        >
                          <span className="text-gold mt-0.5 shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#9a9aa4] text-sm mt-2 leading-relaxed">
                      {it.detail}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-gold">●</span> Education
            </h3>
            <Timeline
              items={education}
              render={(it) => (
                <div className="glass glass-hover rounded-2xl p-5">
                  <span className="text-xs text-[#8a8a94]">{it.period}</span>
                  <h4 className="font-semibold text-white mt-1.5">
                    {it.title}
                  </h4>
                  <div className="text-gold text-sm">{it.org}</div>
                  <p className="text-[#9a9aa4] text-sm mt-1">{it.note}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
