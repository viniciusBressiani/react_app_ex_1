import React from 'react';
import './article.css';

const Article = ({title, image,date}) => {

  
  
  return (
    <div className="escm__article">
      <div className="escm__article-image">
        <img src={image} alt="" />
      </div>
      <div className="escm__article-content">
        <div >
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
