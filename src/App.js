import React from 'react';
import './app.css';

import {Footer, Blog, Possibility, Features, WhatESCM, Header} from './containers';
import {Cta, Brand, Navbar} from './components';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatESCM />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
