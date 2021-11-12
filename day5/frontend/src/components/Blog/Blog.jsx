import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  console.log('articles = ', articles);

  const getArticles = async () => {
    try {
      const response = await fetch('/posts');
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const deleteArticle = async (id) => {
    try {
      const response = await fetch(`/posts/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result) {
        // getArticles();
        const filteredArticles = articles.filter((art) => art.id !== id);
        setArticles(filteredArticles);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Статьи нашего блога</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.text}</p>
            <button onClick={() => deleteArticle(article.id)}>
              Удлить статью
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
