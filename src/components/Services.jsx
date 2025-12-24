import React from 'react';

const Services = ({ id, onView }) => {
  React.useEffect(() => { onView(); }, [onView]);
  const products = [
    { name: 'Овощи', price: 'от 150₽/кг' },
    { name: 'Молочка', price: 'от 120₽' },
    { name: 'Мясо', price: 'от 450₽/кг' },
    { name: 'Мёд', price: 'от 300₽' }
  ];
  
  return (
    <section className="services-section" id={id}>
      <div className="container">
        <h2>Каталог продуктов</h2>
        <div className="services-grid">
          {products.map((product, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
