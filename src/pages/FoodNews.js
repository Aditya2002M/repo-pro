// src/components/News.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?apiKey=6c4a846fa8dd443f878361eacba102f4',
          {
            params: {
              q: 'food health',
              apiKey: 'YOUR_NEWS_API_KEY', // Replace with your API key
            },
          }
        );

        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div>hello jiii</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Food and Health News</h2>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodNews;
