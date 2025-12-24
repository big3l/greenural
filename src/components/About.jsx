import React from 'react';

const About = ({ id, onView }) => {
  React.useEffect(() => { onView(); }, [onView]);
  return (
    <section className="about-section" id={id}>
      <div className="container">
        <h2>О GreenUral</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>🌾 50+ ферм</h3>
            <p>Свердловская область и УрФО</p>
          </div>
          <div className="about-card">
            <h3>🚛 500+ доставок</h3>
            <p>Каждую неделю по Екб</p>
          </div>
          <div className="about-card">
            <h3>🥬 100% эко</h3>
            <p>Без химии и ГМО</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
