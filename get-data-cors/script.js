const axios = require('axios').default;
const cheerio = require('cheerio');

const fetchData = async () => {
  const result = await axios.get('https://habr.com/ru/all/');

  const $ = cheerio.load(result);
  console.log(result);

  const articles = $('.tm-article-snippet__title-link');
  console.log('><>>>>>>>>>>>');
  console.log(articles.text());
};

fetchData();
