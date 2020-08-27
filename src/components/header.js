import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Container from 'react-bootstrap/Container';
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';

import Resume from '../images/sean_murphy_junior_developer.pdf';

var logo = require('../images/logo.png');

const Header = () => {

  return (
    <div id="header" fluid="true">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand className="logo" onClick={() => scrollTo('#header')}>
          <img src={logo} className="logo" alt="SM logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic__navbar-nav" />
        <Navbar.Collapse id="basic__navbar-nav">
          <Nav className="nav">
            <Button className="nav__item" onClick={() => scrollTo('#portfolio')}><span data-hover="Portfolio">Portfolio</span></Button>
            <Button className="nav__item" onClick={() => scrollTo('#about')}><span data-hover="About">About</span></Button>
            <Nav.Link as={Link} to={Resume} target="_blank" className="nav__item"><span data-hover="Resume">Resum&eacute;</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
