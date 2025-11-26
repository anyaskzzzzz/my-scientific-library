import React from "react";
import "./Articles.css";

export const ArticleItem = ({ article, onSelect }) => {
  return (
    <div
      className="article-card"
      onClick={() => onSelect(article.id)}
    >
      <h3 className="article-title">{article.title}</h3>
      <p className="article-author">Автор: {article.author}</p>
      <p className="article-description">{article.description}</p>

      <div className="article-meta">
        <span className="article-category">{article.category}</span>
        <div className="article-access">
          {article.access === "free" ? (
            <span className="access-free"> Открытый доступ</span>
          ) : (
            <span className="access-premium">По подписке</span>
          )}
        </div>
      </div>
    </div>
  );
};


export const ArticleList = ({ articles, onSelect }) => {
  return (
    <div>
      <div className="articles-count">
        Найдено {articles.length} статей
      </div>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export const ArticleDetail = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <div className="article-detail">
      <button className="back-button" onClick={onBack}>
        Х
      </button>

      <h2 className="detail-title">{article.title}</h2>
      <p className="detail-author">Автор: {article.author}</p>
      <p className="detail-date">Опубликовано: {new Date(article.publishDate).toLocaleDateString('ru-RU')}</p>
      <p className="detail-category">Категория: {article.category}</p>

      <div className="tags-container">
        {article.tags?.map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>

      <div className="article-content">
        <p>{article.fullText}</p>
      </div>

      {article.access === "subscription" ? (
        <div className="subscription-notice">
          <p> Эта статья доступна только по подписке</p>
          <button className="subscribe-btn">Оформить подписку</button>
        </div>
      ) : (
        <button className="read-btn"> Читать статью</button>
      )}
    </div>
  );
};