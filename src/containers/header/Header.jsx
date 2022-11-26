import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div>
      <div className="escm__header section__padding" id='home'>
        <div className="escm__header-content">
          <h1 className="gradient__text">
            Let's Build Something amazing with ESCM
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque id molestias reprehenderit laborum suscipit, amet natus doloribus alias eum quibusdam iusto! Voluptates odit vel autem dolorum sint quisquam recusandae sapiente, aperiam molestiae exercitationem nobis eligendi quam mollitia delectus saepe?</p>
          <div className="escm__header-content__input">
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>
          <div className="escm__header-content__people">
            <img src={people} alt="clients" />
            <p>1,600 request access</p>
          </div>
        </div>
          <div className="escm__header-image">
            <img src={ai} alt="ai" />
          </div>
      </div>
    </div>
  )
}

export default Header
