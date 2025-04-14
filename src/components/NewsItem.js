import React from 'react';

const NewsItem = ({ title, description, imgUrl, newsUrl }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgUrl || "https://via.placeholder.com/150"} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

