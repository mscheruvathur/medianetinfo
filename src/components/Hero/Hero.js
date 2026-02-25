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
              {/* Exact smile + eyes from public/assets/smile.svg */}
              <g transform="scale(0.2777778)">
                <path d="m541.95,852.56c-148.13-1.58-264.76-96.26-304.66-221.18-1.5-4.68-3.24-9.29-2.32-14.43,1.97-10.99,10.49-19.21,21.17-20.21,10.37-.96,20.26,5.42,24.01,16.55,7.81,23.18,17.09,45.71,30.53,66.19,48.75,74.31,117.23,116.92,205.99,124.4,90.11,7.59,165.89-23.22,226.81-89.92,25.97-28.43,43.63-61.84,55.36-98.44,3.95-12.32,13.4-19.5,24.39-18.82,10.68.66,19.3,8.65,21.67,19.64.97,4.5-.01,8.67-1.42,12.69-41.99,120.3-125.16,193.47-250.31,218.55-17.61,3.53-35.53,3.63-51.22,4.96Z" fill="#2090CD" />
                <path d="m479.29,393.48c-1.01,22.93-6,48.95-21.97,71.79-3.89,5.56-8.15,10.76-13.52,15.07-23.38,18.77-48.23,17.76-69.7-3.32-17.94-17.62-26.28-40.01-29.76-64.23-5-34.8-.72-68.14,18.48-98.52,3.97-6.29,8.78-11.89,14.48-16.7,25.82-21.78,57.16-16.54,78.9,13.15,14.49,19.79,23.15,49.23,23.1,82.75Z" fill="#2090CD" />
                <path d="m600.69,383.41c1.6-27.62,7.89-58.66,32.35-82.91,21.9-21.72,50.09-21.91,72.4-.35,18.11,17.5,26.54,39.89,30.11,64.16,5.07,34.51,1.38,67.86-17.76,97.89-26.96,42.27-71.54,41.5-98-1.25-12.14-19.62-19.13-46.13-19.09-77.53Z" fill="#2090CD" />
              </g>
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
