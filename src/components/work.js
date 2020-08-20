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
        <div className="portfolio-summary">
          <h3>The Goods</h3>
          <hr></hr>
          <p>
            I am new to development, but I've caught the bug. I thoroughly enjoy the
            process of creating web applications with nothing but a computer, some know-how,
            and creativity (and let's not forget...a godly amount of patience and persistence).
            I tend to live in the wacky world of JavaScript and its frameworks, but hey, I'm up
            for anything. We may fight a lot, but React.js and I have <span style={emphasize}>developed </span>
            a lasting bond.
          </p>
        </div>
        <div className="portfolio-grid">
          <Collection />
        </div>
      </div>
    </section>
  )
}

export default Portfolio