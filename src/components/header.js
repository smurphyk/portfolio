import React from 'react';
import { Link } from 'gatsby';
import { scrollTo } from 'gatsby-plugin-smoothscroll';
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
              <Link to="#about" className="nav-item"><span data-hover="About">About</span></Link>
              <Link to="#portfolio" className="nav-item"><span data-hover="Portfolio">Portfolio</span></Link>
              <Link to="" target="_blank" className="nav-item"><span data-hover="Resume">Resume</span></Link>
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
