import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import './WorkPage.css';

const CDN = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/projects/';

const works = [
  {
    name: 'JCB',
    img: CDN + 'project-5.png',
    href: 'https://medianetinfo.com/work/jcb/',
  },
  {
    name: 'Francis Alukkas',
    img: CDN + 'project-2.png',
    href: 'https://medianetinfo.com/work/francis-alukkas/',
  },
  {
    name: 'M Lounge',
    img: CDN + 'project-1.png',
    href: 'https://medianetinfo.com/work/mlounge/',
  },
  {
    name: 'EVM Nissan',
    img: CDN + 'project-6.png',
    href: 'https://medianetinfo.com/work/evm-nissan/',
  },
  {
    name: 'Landmark Maple',
    img: CDN + 'project-3.png',
    href: 'https://medianetinfo.com/work/landmark-maple/',
  },
  {
    name: 'Yamaha',
    img: CDN + 'project-5.png',
    href: 'https://medianetinfo.com/work/yamaha/',
  },
  {
    name: 'Natural',
    img: CDN + 'project-4.png',
    href: 'https://medianetinfo.com/work/natural/',
  },
  {
    name: 'Lamit',
    img: CDN + 'project-3.png',
    href: 'https://medianetinfo.com/work/lamit/',
  },
  {
    name: 'Mesmera',
    img: CDN + 'project-4.png',
    href: 'https://medianetinfo.com/work/mesmera/',
  },
  {
    name: 'Mend',
    img: CDN + 'project-2.png',
    href: 'https://medianetinfo.com/work/mend/',
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="work-page">

        {/* ── Page Header ── */}
        <div className="work-page-header">
          <div className="work-page-header-inner">
            <h1>
              Our <span className="work-page-blue">Work</span>
            </h1>
            <p>
              Promptness and accuracy in delivering quality service is our iconic
              history. Internationalism in the work culture and lot many MNC clients
              are our bookmarks in the decades long business career.
            </p>
          </div>
        </div>

        {/* ── Works Grid ── */}
        <section className="work-page-grid-section">
          <div className="work-page-container">
            <div id="works" className="works-page-grid">
              {works.map((w) => (
                <a
                  key={w.name}
                  href={w.href}
                  className="work"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project: ${w.name}`}
                >
                  <img src={w.img} alt={w.name} loading="lazy" />
                  <div className="work-info" aria-hidden="true">
                    <h1>{w.name}</h1>
                    <span className="work-view">View Project</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
