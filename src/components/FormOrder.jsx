import React, { useState, useEffect } from 'react';

const FormOrder = ({ id, onView }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', product: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    onView();
    const saved = localStorage.getItem('greenUralForm');
    if (saved) setFormData(JSON.parse(saved));
  }, [onView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Имя обязательно';
    if (!formData.phone) newErrors.phone = 'Телефон обязателен';
    if (!formData.product) newErrors.product = 'Выберите продукт';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      localStorage.setItem('greenUralForm', JSON.stringify(formData));
      setSuccess(true);
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
      alert('Заявка отправлена! Скидка -20% на первую коробку.');
      
      setFormData({ name: '', phone: '', email: '', product: '' });
      setErrors({});
    }
  };

  return (
    <section className="form-section" id={id}>
      <div className="container">
        <h2>Заказать первую коробку</h2>
        {success && <div className="success-alert">Заявка принята! Скидка -20%</div>}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
          
          <input
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <select
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          >
            <option value="">Выберите продукт</option>
            <option value="vegetables">Овощи</option>
            <option value="milk">Молочка</option>
            <option value="meat">Мясо</option>
            <option value="honey">Мёд</option>
          </select>
          {errors.product && <span className="error">{errors.product}</span>}

          <button type="submit" className="cta-btn">Получить -20% бесплатно</button>
        </form>
      </div>
    </section>
  );
};
export default FormOrder;
