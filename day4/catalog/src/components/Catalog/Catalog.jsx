import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [list, setList] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data);
      setList(data.results);
    } catch (err) {
      console.log('ERROR: ', err);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Каталог персонажей</h1>
      <ul>
        {list.map((character) => {
          return <li>{character.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Catalog;
