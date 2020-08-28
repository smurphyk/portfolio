import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/components/header.scss';

import Resume from '../images/sean_murphy_junior_developer.pdf';

let logo = require('../images/logo.png');

const Header = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div class="topnav" id="myTopnav">
      <button onClick={() => scrollTo("#header")} className="logo__button">
        <img src={logo} alt="Sean Murphy Logo" className="logo"></img>
      </button>
      <a onClick={() => scrollTo("#portfolio")} className="nav__item">Portfolio</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div >
  )
}

export default Header