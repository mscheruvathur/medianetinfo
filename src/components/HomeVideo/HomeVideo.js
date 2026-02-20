import React from 'react';
import './HomeVideo.css';

export default function HomeVideo() {
  return (
    <section id="the-best-part" className="home-video-section">
      <div className="home-video-container">
        <div className="home-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/tRibZ7bk5Qc?autoplay=1&mute=1&controls=0&loop=1&rel=0&modestbranding=1&start=5&playlist=tRibZ7bk5Qc"
            title="Medianet showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="home-video-iframe"
          />
        </div>
      </div>
    </section>
  );
}
