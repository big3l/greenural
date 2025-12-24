import React from 'react';

const Reviews = ({ id, onView }) => {
  React.useEffect(() => { onView(); }, [onView]);
  const reviews = [
    { name: 'Анна К.', text: 'Продукты свежие, как у бабушки! Доставка быстрая.' },
    { name: 'Михаил П.', text: 'Мясо отличное, молочка натуральная. Рекомендую!' }
  ];
  
  return (
    <section className="reviews-section" id={id}>
      <div className="container">
        <h2>Что говорят клиенты</h2>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <p>"{review.text}"</p>
              <strong>{review.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
