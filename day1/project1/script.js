const h1 = document.querySelector('h1');
const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');

const changeCounter = (type) => {
  let counter = h1.innerText;
  counter = Number(counter);

  if (type === 'increment') {
    counter += 1;
  }

  if (type === 'decrement') {
    counter -= 1;
  }

  h1.innerText = counter;
};

// const incrementFunc = () => {
//   let counter = h1.innerText;
//   counter = Number(counter);

//   //   counter = counter + 1;
//   counter += 1;
//   //   counter++;

//   h1.innerText = counter;
// };

// const decrementFunc = () => {
//   let counter = h1.innerText;
//   counter = Number(counter);

//   //   counter = counter + 1;
//   counter -= 1;
//   //   counter++;

//   h1.innerText = counter;
// };

plusBtn.addEventListener('click', () => changeCounter('increment'));
minusBtn.addEventListener('click', () => changeCounter('decrement'));
