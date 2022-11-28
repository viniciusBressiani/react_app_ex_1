import React from 'react';
import './feature.css';

const Feature = ({text,title}) => {
  return (
    <div className="escm__features-container__feature">
       <div className="escm__features-container__feature-title">
          <div />
          <h2>{title}</h2>
       </div>
       <div className="escm__features-container__feature-text">
        <p>{text}</p>
       </div>
    </div>
  )
}

export default Feature