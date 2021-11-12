import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './components/Blog';
import AddArticle from './components/AddArticle';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/contact" element={<h1>Страница контакты</h1>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/add-article" element={<AddArticle />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
