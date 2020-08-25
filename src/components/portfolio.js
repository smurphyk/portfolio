import React from 'react'
import Collection from './collection'

import '../styles/components/portfolio.scss'

const Portfolio = () => {

  const emphasize = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Comfortaa'
  };

  return (
    <section id="portfolio">
      <div className="portfolio">
        <div className="portfolio__summary">
          <h3 className="portfolio__title">Development Projects</h3>
          <hr></hr>
          <p className="portfolio__intro">
            I am new to development, but I've caught the bug. Building web applications takes a wonderful
            mix of knowledge, creativity, and...well, an incredible amount of patience and drive. My projects
            display all of these (except the patience sometimes). I tend to live in the wacky world of
            JavaScript and its frameworks, but hey, I'm up for anything. We may fight a lot, but React.js and
            I have <span style={emphasize}>developed </span>
            a lasting bond.
          </p>
          <hr></hr>
        </div>
        <div className="portfolio__grid">
          <Collection />
        </div>
      </div>
    </section>
  )
}

export default Portfolio