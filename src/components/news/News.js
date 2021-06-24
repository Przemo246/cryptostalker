import { useState, useEffect } from 'react';
import { ArticleBig } from './ArticleBig';

const getTodayAndYesterdayDate = () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const today = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  const yesterday = `${yesterdayDate.getFullYear()}-${
    yesterdayDate.getMonth() + 1
  }-${yesterdayDate.getDate()}`;
  return [yesterday, today];
};

export const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const [yesterday, today] = getTodayAndYesterdayDate();
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=cryptocurrency&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=715d79a01d574143b994a0dbd3346b9d`
      );
      const JSON = await response.json();
      const articles = JSON.articles.slice(0, 6);
      setNews(articles);
    };
    getNews();
  }, []);
  return (
    <div className="articles">
      <div className="articles__heading">
        <h2 className="heading-secondary">
          What's currently moving the prices? 📰
        </h2>
      </div>
      <div className="articles__top">
        <h3 className="heading-tertiary">TOP READS</h3>
        {news.map((data, i) => {
          if (i < 3) {
            return <ArticleBig key={i} data={data} />;
          }
        })}
      </div>
      <div className="articles__list">
        <h3 className="heading-tertiary">LATEST</h3>
      </div>
    </div>
  );
};
