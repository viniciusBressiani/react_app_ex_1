import React from 'react';
import './brand.css';
import {google,shopify,slack,dropbox,atlassian} from './import.js';

const Brand = () => {
  return (
    <div className='escm__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
    </div>
  )
}

export default Brand