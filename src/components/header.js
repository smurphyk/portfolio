import React from 'react'
import { scrollTo } from 'gatsby'
import '../styles/components/header.scss'

const Header = () => {

  return (
    <section id="header">
      <header>
        <div className="main-header">
          <div className="logo">
            <button onClick={() => scrollTo('#header-container')}>SM</button>
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
