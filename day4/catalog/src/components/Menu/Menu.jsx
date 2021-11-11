import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
        <li>
          <Link to="/catalog">Каталог</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
