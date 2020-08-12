import React from 'react'
import { Link } from 'gatsby'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <h4>
          Still Want More Murphy? Find me:
        </h4>
        <div className="social-links">
          <a href="https://www.github.com/smurphyk" target="_blank" rel="noreferrer"><img src={Github} alt="Github icon" className="footer-icon" width="32px" /></a>
          <a href="https://www.linkedin.com/in/seankmurphy131/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin icon" className="footer-icon" width="32px" /></a>
          <a href="https://https://www.twitter.com/SeanMur03395506" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter icon" className="footer-icon" width="32px" /></a>
        </div>
      </div>
      <nav></nav>
    </footer >
  )
}

export default Footer