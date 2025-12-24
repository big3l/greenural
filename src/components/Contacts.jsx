import React from 'react';

const Contacts = ({ id, onView }) => {
  React.useEffect(() => { onView(); }, [onView]);
  return (
    <section className="contacts-section" id={id}>
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-info">
          <p>greenural@delivery.ru</p>
          <p>+7 (343) 123-45-67</p>
          <p>Екатеринбург, ул. Фермерская, 10</p>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
