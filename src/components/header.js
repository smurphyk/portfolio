import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/components/header.scss';

import Resume from '../images/sean_murphy_junior_developer.pdf';

let logo = require('../images/logo.png');

const Header = () => {

  return (
    <header id="header">
      <img src={logo} className="logo" alt="SM logo"></img>
      <nav className="nav">
        <button className="nav__item" onClick={() => scrollTo('#portfolio')}><span data-hover="Portfolio">Portfolio</span></button>
        <button className="nav__item" onClick={() => scrollTo('#about')}><span data-hover="About">About</span></button>
        <a href={Resume} target="_blank" className="nav__item"><span data-hover="Resume">Resum&eacute;</span></a>
      </nav>
    </header>
  )
}

export default Header