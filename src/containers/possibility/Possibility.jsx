import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="escm__possibility section__padding" id='possibility'>
      <div className="escm__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="escm__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <div className="escm__possibility-content__text">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility
