import React, { useState } from 'react';

const Advantages = ({ id, onView }) => {
  const [openIndex, setOpenIndex] = useState(null);
  React.useEffect(() => { onView(); }, [onView]);

  const advantages = [
    { id: 0, title: 'Доставка 2 часа', desc: 'От фермы до вашей двери за 120 минут' },
    { id: 1, title: '100% натурально', desc: 'Без химикатов и ГМО. Проверено сертификатами' },
    { id: 2, title: 'Подписка', desc: 'Еженедельная коробка со скидкой 15%' }
  ];

  return (
    <section className="advantages-section" id={id}>
      <div className="container">
        <h2>Почему фермерские продукты?</h2>
        <div className="accordion">
          {advantages.map(adv => (
            <div key={adv.id} className="accordion-item">
              <button onClick={() => setOpenIndex(openIndex === adv.id ? null : adv.id)}>
                {adv.icon} {adv.title}
              </button>
              {openIndex === adv.id && <p>{adv.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Advantages;
