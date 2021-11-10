import React, { useEffect, useState } from 'react';

const Example = () => {
  const [rnd, setRnd] = useState(0);
  const [rnd2, setRnd2] = useState(0);

  // useEffect(() => {
  //   console.log('Every render');
  // }); // Every render

  useEffect(() => {
    console.log('First render');
  }, []); // 1 render

  useEffect(() => {
    console.log('rnd changed');
  }, [rnd]); // выполняется когда изменился rnd

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []); // 1 render

  return (
    <div>
      <h1>{rnd}</h1>
      <button onClick={() => setRnd(Math.round(Math.random() * 1000))}>
        Получить рандом число
      </button>

      <h1>{rnd2}</h1>
      <button onClick={() => setRnd2(Math.round(Math.random() * 1000))}>
        Получить рандом число
      </button>
    </div>
  );
};

export default Example;
