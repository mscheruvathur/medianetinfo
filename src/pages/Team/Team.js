import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './Team.css';

const CDN = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/team/';

const members = [
  {
    slug: 'thahir',
    name: 'Thahir Kalari',
    designation: 'Founder | Managing Partner',
  },
  {
    slug: 'raees',
    name: 'Raees Kotai',
    designation: 'Co-founder | Partner',
  },
  {
    slug: 'anwar',
    name: 'Anwar Sadiq',
    designation: 'Technical Head',
  },
  {
    slug: 'vincy',
    name: 'Vincy Suhas',
    designation: 'Accounts Manager',
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <main id="team-page">

        {/* ── INTRO ── */}
        <section className="team-intro">
          <div className="team-container">
            <h1 className="team-intro-heading">
              <span className="team-blue">Team Medianet</span>
              <br />
              with an artistic perfection
              <br />
              to tune up wonders.
            </h1>
            <p className="team-intro-sub">
              A best trained and well equipped work force with high technical know how and
              fire to win make wonders happen in our team.
            </p>
          </div>
        </section>

        {/* ── TWO VIDEOS ── */}
        <section className="team-videos">
          <div className="team-videos-grid">
            <div className="team-video-wrap">
              <iframe
                src="https://www.youtube.com/embed/tRibZ7bk5Qc?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=tRibZ7bk5Qc"
                title="Medianet team video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="team-video-iframe"
              />
            </div>
            <div className="team-video-wrap">
              <iframe
                src="https://www.youtube.com/embed/qQW2gIYavBo?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=qQW2gIYavBo"
                title="Medianet team video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="team-video-iframe"
              />
            </div>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="team-grid-section">
          <div className="team-container">
            <div className="team-grid">
              {members.map((m) => (
                <div className="team-player" key={m.slug}>
                  <div className="team-player-img-wrap">
                    <img
                      src={`${CDN}${m.slug}.jpg`}
                      alt={m.name}
                      className="team-player-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="team-player-info">
                    <h5 className="team-player-name">{m.name}</h5>
                    <span className="team-player-designation">{m.designation}</span>
                  </div>
                </div>
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
