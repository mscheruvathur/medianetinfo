import React from 'react';
import './Hero.css';

const smileySvg = process.env.PUBLIC_URL + '/assets/smiley.svg';
const shadowSvg = process.env.PUBLIC_URL + '/assets/shadow.svg';

/* ── Character-level line data ── */
const LINE_1 = 'We turned';
const LINE_2 = 'many worries';
const LINE_3 = 'to smile';

function AnimLine({ text }) {
  const chars = text.split('');
  return (
    <span className="line">
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${0.6 - i * 0.05}s`,
            animationDuration: `${0.86 - i * 0.03}s`,
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home-banner2" aria-label="Hero — We turned many worries to smile">
      <div className="hero-inner">
        {/* Left: animated heading */}
        <div className="hero-title">
          <h1>
            <AnimLine text={LINE_1} />
            <AnimLine text={LINE_2} />
            <AnimLine text={LINE_3} />
          </h1>
        </div>

        {/* Right: smiley ball animation */}
        <div className="anim-box" aria-hidden="true">
          <div className="smiley-box">
            {/* Inline SVG for smiley face */}
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="150" cy="150" r="140" fill="#fff" />
              {/* Eyes */}
              <ellipse cx="110" cy="125" rx="16" ry="20" fill="#1D93D1" />
              <ellipse cx="190" cy="125" rx="16" ry="20" fill="#1D93D1" />
              {/* Smile */}
              <path d="M95 180 Q150 235 205 180" stroke="#1D93D1" strokeWidth="12" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          {/* Inline SVG for shadow */}
          <svg className="smiley-shadow" width="320" height="60" viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="160" cy="30" rx="120" ry="22" fill="#000" fillOpacity="0.18" />
          </svg>
        </div>
      </div>
    </section>
  );
}
