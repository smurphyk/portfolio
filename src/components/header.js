import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/components/header.scss';

import Resume from '../images/sean_murphy_junior_developer.pdf';

let logo = require('../images/logo.png');

const Header = () => {

  function dropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <section id="header">
      <button onClick={() => scrollTo("#banner")} className="logo__button">
        <img src={logo} alt="Sean Murphy Logo" className="logo"></img>
      </button>
      <div className="topnav" id="myTopnav">
        <a href={Resume} target="_blank">Resum&eacute;</a>
        <a onClick={() => scrollTo("#about")} className="nav__item">About</a>
        <a onClick={() => scrollTo("#portfolio")} className="nav__item">Portfolio</a>
        <div className="icon__container">
          <a href="#!" className="icon" onClick={dropdown}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div >
    </section>
  )
}

export default Header