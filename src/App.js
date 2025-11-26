import React, { useState } from 'react';
import { ArticleList, ArticleDetail } from './components/Articles';
import { mockArticles } from './data/mockData';
import './App.css';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectArticle = (articleId) => {
    const article = mockArticles.find(a => a.id === articleId);
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="title-container">
            <h1 className="title">Библиотека научных статей</h1>
          </div>
        </header>

        <main>
          {selectedArticle ? (
            <ArticleDetail
              article={selectedArticle}
              onBack={handleBackToList}
            />
          ) : (
            <ArticleList
              articles={mockArticles}
              onSelect={handleSelectArticle}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;