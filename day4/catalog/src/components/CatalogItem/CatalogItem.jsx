import React from 'react';
import './CatalogItem.scss';

const CatalogItem = (props) => {
  return (
    <li className="catalog-item">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={`аватар персонажа ${props.name}`} />
      <p>Статус: {props.status}</p>
      <p>Расса: {props.species}</p>
      <p>Местонахождение: {props.place}</p>
    </li>
  );
};

export default CatalogItem;
