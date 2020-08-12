import React from 'react'
import { scrollTo } from 'gatsby'
import '../styles/components/header.scss'

var logo = require('../images/logo.png');

const Header = () => {

  return (
    <section id="header">
      <header>
        <div className="header-content">
          <div className="logo">
            <img src={logo} className="logo" alt="SM logo"></img>
          </div>
          <div className="navbar">
            <nav>
              <button onClick={() => scrollTo('#about')}><span data-hover="About">About</span></button>
              <button onClick={() => scrollTo('#Work')}><span data-hover="Work">Work</span></button>
              <button onClick={() => scrollTo('#Contact')}><span data-hover="Contact">Contact</span></button>
            </nav>
          </div>
          <div className="dropdown-container">
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header
