import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const links = [
  { key: 1, title: 'Главная', url: '/' },
  { key: 2, title: 'Каталог', url: '/catalog' },
  { key: 3, title: 'О нас', url: '/about' },
  { key: 4, title: 'Контакты', url: '/contact' },
];

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.key}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
