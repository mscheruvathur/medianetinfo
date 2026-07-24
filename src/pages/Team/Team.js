import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './Team.css';

const IMG = '/images/ourteam/';

const members = [
  { file: '1-Thahir.jpg', caption: '1-Thahir' },
  { file: '2-Rahees.jpg', caption: '2-Rahees' },
  { file: '3-Anwar%20Sadiq-Technical%20Head.JPG', caption: '3-Anwar Sadiq-Technical Head' },
  { file: '4-%20Shafi%20-%20Technical%20Head.jpg', caption: '4- Shafi - Technical Head' },
  { file: '5-Suhana-%20Operation%20Head.jpg', caption: '5-Suhana- Operation Head' },
  { file: '6-Unais-%20Site%20Supervisor.JPG', caption: '6-Unais- Site Supervisor' },
  { file: '7-Faiz-%20Creative%20Head.PNG', caption: '7-Faiz- Creative Head' },
  { file: '8-Priyatha-%20Content%20Creator.jpg', caption: '8-Priyatha- Content Creator' },
  { file: '9-Vincy-%20Office%20Administrator.jpg', caption: '9-Vincy- Office Administrator' },
  { file: '10-Haritha-Sales%20Assistant.jpg', caption: '10-Haritha-Sales Assistant' },
  { file: '11-Sreelakshmi-%20Accounts%20Assistant.jpg', caption: '11-Sreelakshmi- Accounts Assistant' },
  { file: '12-%20Navya%20-%20Graphic%20designer.jpg', caption: '12- Navya - Graphic designer' },
  { file: '13-Ameen%20Junaid%20-Video%20Editor.jpg', caption: '13-Ameen Junaid -Video Editor' },
  { file: '14-Athulya-%20Accounts%20Assistant.jpg', caption: '14-Athulya- Accounts Assistant' },
  { file: '15-Arsha-Sales%20Assistant.jpg', caption: '15-Arsha-Sales Assistant' },
  { file: '15-Rauf-%20Supervisor.jpg', caption: '15-Rauf- Supervisor' },
  { file: '16-Rahul-Supervisor.jpg', caption: '16-Rahul-Supervisor' },
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
                <div className="team-player" key={m.file}>
                  <div className="team-player-img-wrap">
                    <img
                      src={`${IMG}${m.file}`}
                      alt={m.caption}
                      className="team-player-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="team-player-caption">{m.caption}</span>
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
