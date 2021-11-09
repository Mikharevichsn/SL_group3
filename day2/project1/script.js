import faker from 'faker';
import cowsay from 'cowsay';

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(randomName);
console.log(randomEmail);
console.log(randomCard);

console.log(
  cowsay.say({
    text: 'Мой текст',
    e: 'oO',
    T: 'U ',
  })
);
