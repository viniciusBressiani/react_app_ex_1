import React, {useState} from 'react';
import {RiMenuLine, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wescm">Whats is ESCM</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='escm__navbar'>
      <div className="escm__navbar-links">
        <div className="escm__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="escm__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="escm__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="escm__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="escm__navbar-menu_container scale-up-ver-top ">
            <div className="escm__navbar-menu_container-links">
              <Menu />
            </div>
              <div className="escm__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar