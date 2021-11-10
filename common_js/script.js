// const num = 100; // Number
// console.log(typeof num); // number

// const str = 'Petr'; // String
// console.log(typeof str); // string

// const bool = true; // Boolean
// console.log(typeof bool); // boolean

// const arr = [1, 2, 3, 4]; // Array
// // console.log(Array.isArray(arr));
// console.log(typeof arr); // object

// const obj = { a: 100, b: 100 }; // Object
// console.log(typeof obj); // object

// undefined // udefined
// null // object

// ---------------
// Массивы

const arr = [1000, 2000, 3000, 4000, 5000];
// console.log(arr);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for (let i = 0; i <= arr.length - 1; i += 1) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// console.log(arr);
// arr.push(6000); // добавить в конец
// // arr.push(6000, 7000);
// console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// arr.unshift(11111);
// console.log(arr);

// arr.shift();
// console.log(arr);

// -----------
// FUNCTIONS

// есть контекст (this)
// глобальная
// можно вызвать до объявления
// function print(text) {
//   console.log('------------');
//   console.log(text);
//   console.log('------------');
// }

// print('Serjo');

// нет контекста (this)
// локальная
// нельзя вызвать до объявления
// const print = (text, num, x) => {
//   console.log('------------');
//   console.log(text);
//   console.log(num);
//   console.log(x);
//   console.log('------------');
// };

// print('Serjo', 100);

// -----------
// CALLBACK

// const myFunc = (callback) => {
//   console.log(111);
//   callback();
//   console.log(222);
// };

// myFunc(() => {
//   console.log(555);
// });

//-------------
// Перебирающие методы массивов

// console.log(arr);

// FOREACH
// проход по массиву
// ничего не возвращает
// не меняет исходный массив

// arr.forEach((element, index) => {
//   console.log(index);
//   console.log(element);
// });

// let sum = 0;
// arr.forEach((element, index) => {
//   console.log(index);
//   console.log(element);
//   sum += element;
// });

// console.log(sum);

// -----------
// MAP
// возвращает новый массив
// не меняет исходный массив

// const newArr = arr.map((elem) => {
//   return elem + 1;
// });

// console.log(newArr);
// console.log(arr);

// ------------
// FILTER
// возвращает новый массив
// не меняет исходный массив

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const words = ['sssd', 'sdfsdfsdfsdf', 'dfdfd'];
// console.log(words);

// const longWords = words.filter((word) => {
//   if (word.length > 5) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(longWords);

// console.log(filteredArr);

// -----------
// рефакторинг

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) {
//     return true;
//   }

//   return false;
// });

// const filteredArr = arr.filter((elem) => {
//   return elem > 2000;
// });

// const filteredArr = arr.filter((elem) => elem > 2000);

// console.log(filteredArr);

// ------------
// явный возврат / неявный возврат
// только стрелочные фции

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// const result = sum(100, 200);
// console.log(result);

// ------
// Тернарный оператор

// const a = 1000;

// if (a === 1000) {
//   console.log('Равно');
// } else {
//   console.log('Не равно');
// }

// // условие ? код если истина : код если ложь

// a === 1000 ? console.log('Равно') : console.log('Не равно'); // Неправильно

// const res = a === 1000 ? 'Равно' : 'Не равно'; // Правильно
// console.log(res);

// console.log(a === 1000 ? 'Равно' : 'Не равно'); // Тоже правильно

// ----------
// Литеральная строка / литеральный оператор

// const name = 'Serjo';
// const age = 20;
// const hobby = 'Snowboard';

// Пользователь: Serjo. Возраст: 20. Хобби: Snowboard!

// const str1 = 'qqqq';
// const str2 = 'zzzz';

// const strBig = str1 + str2; // конкатенация
// console.log(strBig);
// console.log(str1 + str2); // конкатенация

// const resultStr =
//   'Пользователь: ' + name + '. Возраст: ' + age + '. Хобби: ' + hobby + '!';
// console.log(resultStr);

// const resultStr = `Пользователь: ${name}. Возраст: ${age}. Хобби: ${hobby}!`;
// console.log(resultStr);

// console.log(`Пользователь: ${name}. Возраст: ${age}. Хобби: ${hobby}!`);

// console.log(`a: 100, b: 200, a + b: ${100 + 200}`);

// ---------
// console.log(a);

// var a = 5000;
// console.log(a);

// const a = 1000;

// a = 2000;
// console.log(a);

// const numbers = [1, 2, 3];
// console.log(numbers);
// numbers[0] = 10000;
// console.log(numbers);

// numbers = [1, 2, 3];

// let a = 1000;
// console.log(a);

// a = 2000;
// console.log(a);

// const a = 1000;
// if (a === 1000) {
//   const b = 5000;
//   console.log(b);
// }

// console.log(a);
// console.log(b);

// console.log(arr);

// ----------
// SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// arr2[1] = 22222222;

// console.log(arr2);
// console.log(arr1);

// const obj1 = { a: 100 };
// const obj2 = { ...obj1 };

// console.log(obj1);
// console.log(obj2);

// obj2.a = 222222;
// console.log(obj2);
// console.log(obj1);

//----------
// Объекты

// const obj = {
//   a: 100,
//   b: 200,
//   name: 'Petr!',
//   userName: 'Petr',
//   'user-name': 'Petr111',
// };

// console.log(obj);
// console.log(obj.a);
// console.log(obj.userName);
// console.log(obj.zzz);
// console.log(obj['user-name']);
// console.log(obj['a']);

// const key = 'name';
// console.log(obj[key]);

//--------
// Асинхронность

// Promise

// let promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     reject('Ошибка !!!!');
//   } else {
//     setTimeout(() => {
//       // переведёт промис в состояние fulfilled с результатом "result"
//       resolve('result');
//     }, 3000);
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     alert('Ошибка: ' + err);
//   });

// fetch('https://api.thecatapi.com/v1/images/search')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       'https://api.111thecatapi.com/v1/images/search'
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData();

// ------------
// try catch

// console.log(1);
// console.log(2);

// try {
//   console.log(x);
// } catch (err) {
//   console.log(err);
// }

// console.log(3);
// console.log(4);

//-----------
// localStorage

//localStorage.setItem('myData', '123');

localStorage.setItem('myData', JSON.stringify({ a: 100, b: 200 }));

const data = localStorage.getItem('myData');
console.log('data = ', data);

const parsedData = JSON.parse(data);
console.log('parsedData = ', parsedData);
