import React, { useEffect, useState } from "react";
import "./Blog.css";

type ArticleInfo = {
  title: string;
  avatar: string;
};

export const Blog = () => {
  const [articles, setArticles] = useState<ArticleInfo[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);

  const getArticles = (page: number) => {
    fetch("https://dc.lafox.net/api/articles?count=4&page=" + page)
      .then((r) => r.json())
      .then((r) => setArticles((prev) => prev.concat(r.articles)));
  };

  const loadNewArticles = () => {
    getArticles(nextPage);
    setNextPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    getArticles(0);
  }, []);

  return (
    <div className={"blog"}>
      <h2 className={"title"}>Blog</h2>
      <div className={"article-wrapper"}>
        {articles.map((article, index) => (
          <div key={"article-" + index} className={"article-card"}>
            <a href={"#asdas"} className={"article-card-link"}>
              <img
                src={article.avatar}
                alt={"Article"}
                className={"article-image"}
              />
              <p className={"article-title"}>{article.title}</p>
            </a>
          </div>
        ))}
      </div>
      <div className={"read-more-wrapper"}>
        <button className={"read-more"} onClick={loadNewArticles}>
          Show more
        </button>
      </div>
    </div>
  );
};
