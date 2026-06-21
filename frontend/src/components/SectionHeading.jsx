import React from "react";

export default function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="reveal mb-12 text-center">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl mt-3">
        <span className="text-white">{title} </span>
        <span className="gold-only-gradient">{accent}</span>
      </h2>
      <div className="hairline w-28 mx-auto mt-5" />
    </div>
  );
}
