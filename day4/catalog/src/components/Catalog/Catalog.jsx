import React, { useState, useEffect } from 'react';
import CatalogItem from '../CatalogItem';
import './Catalog.scss';

const Catalog = () => {
  const [list, setList] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(1);
  const [pages, setPages] = useState([]);

  console.log('pagesTotal = ', pagesTotal);
  console.log('pages = ', pages);

  const getCharacters = async (page = 1) => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?page=' + page
      );
      const data = await response.json();
      console.log(data);
      setList(data.results);
      setPagesTotal(data.info.pages);
    } catch (err) {
      console.log('ERROR: ', err);
    }
  };

  const getPagesArr = (total = 1) => {
    const arr = [];

    for (let i = 1; i <= total; i += 1) {
      arr.push(i);
    }

    return arr;
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const newPages = getPagesArr(pagesTotal);
    setPages(newPages);
  }, [pagesTotal]);

  return (
    <div className="catalog">
      <h1>Каталог персонажей</h1>

      <div className="pagination">
        {pages.map((pageNum) => {
          return (
            <button key={pageNum} onClick={() => getCharacters(pageNum)}>
              {pageNum}
            </button>
          );
        })}
      </div>

      <ul>
        {list.map((character) => {
          return (
            <CatalogItem
              key={character.id}
              name={character.name}
              avatar={character.image}
              status={character.status}
              species={character.species}
              place={character.location.name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Catalog;
