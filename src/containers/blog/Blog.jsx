import React from 'react';
import './blog.css';

import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import';

const articlesData = [
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog01
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog02
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog03
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog04
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog05
  },
]

const Blog = () => {
  return (
    <div className="escm__blog section__padding" id='blog'>
      <div className="escm__blog-heading ">
        <h2 className='gradient__text'>A lot is happening, 
            We are blogging about it.</h2>
      </div>
      <div className="escm__blog-container">
        <div className="escm__blog-container__groupA">
          <Article title={articlesData[0].title} image= {articlesData[0].image} date= {articlesData[0].date} />
        </div>
        <div className="escm__blog-container__groupB">
            <Article title={articlesData[1].title} image= {articlesData[1].image} date= {articlesData[1].date}/>
            <Article title={articlesData[2].title} image= {articlesData[2].image} date= {articlesData[2].date}/>   
            <Article title={articlesData[3].title} image= {articlesData[3].image} date= {articlesData[3].date}/>
            <Article title={articlesData[4].title} image= {articlesData[4].image} date= {articlesData[4].date}/>
        </div>
      </div>
    </div>
  )
}

export default Blog
