import React, { useState } from 'react';

const Cat = () => {
  const [isLoadind, setIsLoading] = useState(false);
  const [catUrl, setCatUrl] = useState(null);
  const [error, setError] = useState('');

  const getCat = async () => {
    try {
      setError('');
      setIsLoading(true);
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();
      console.log(data);
      setCatUrl(data[0].url);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError('Ошибка загрузки кота. Попробуйте позже');
    }
  };

  return (
    <div>
      <button onClick={getCat} disabled={isLoadind}>
        Показать кота
      </button>

      {isLoadind && <p>Загружаю...</p>}

      {catUrl && !isLoadind && !error && (
        <div>
          <img src={catUrl} alt="Картинка кота" width="400" />
        </div>
      )}
      <p>{error}</p>

      {/* {catUrl ? (
        <div>
          <img src={catUrl} alt="Картинка кота" width="400" />
        </div>
      ) : (
        <p>Пок картинки нет</p>
      )} */}
    </div>
  );
};

export default Cat;
