import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/styles.scss"

const Header = () => (
  <header>
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="../images/logo.png" alt="Sean Murphy logo" />
          </Link>
        </div>
        <div className="navbar">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
