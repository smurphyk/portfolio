import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/components/header.scss';

var logo = require('../images/logo.png');

const Header = () => {

  return (
    <div id="header">
      <header>
        <div className="header-content">
          <div className="logo">
            <img src={logo} className="logo" alt="SM logo"></img>
          </div>
          <div className="navbar">
            <nav>
              <button className="nav-item" onClick={() => scrollTo('#portfolio')}><span data-hover="Portfolio">Portfolio</span></button>
              <button className="nav-item" onClick={() => scrollTo('#about')}><span data-hover="About">About</span></button>
              <a href="" target="_blank" className="nav-item"><span data-hover="Resume">Resume</span></a>
            </nav>
          </div>
          <div className="dropdown-container">
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
