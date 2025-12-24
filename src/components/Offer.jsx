import React from 'react';

const Offer = ({ id, onView }) => {
  React.useEffect(() => { onView(); }, [onView]);
  return (
    <section className="offer-section" id={id}>
      <div className="container">
        <div className="offer-badge"> Доставка за 2 часа</div>
        <h1>Фермерские продукты<br/>с доставкой в Екатеринбург</h1>
        <p>Свежие овощи • Домашняя молочка • Эко-мясо • 50+ ферм</p>
        <button className="cta-btn" onClick={() => document.getElementById('form-order').scrollIntoView({behavior: 'smooth'})}>
          Первая коробка -20%
        </button>
      </div>
    </section>
  );
};
export default Offer;
