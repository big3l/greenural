import React, { useState } from 'react';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'offer', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'advantages', label: 'Преимущества' },
    { id: 'services', label: 'Каталог' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'form-order', label: 'Заказать' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">GreenUral</div>
        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {menuItems.map(item => (
              <a 
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
               }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
         </div>
      </div>
    </header>
  );
};

export default Header;
