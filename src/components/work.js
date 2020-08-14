import React from 'react'
import Collection from './collection'

import '../styles/components/work.scss'

const Work = () => {

  const emphisize = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Comfortaa;'
  };

  return (
    <section id="work">
      <div className="portfolio">
        <h2 className="summary-title">The Legacy</h2>
        <div className="summary-container">
          <p className="summary">
            I am new to development, but I've caught the bug. I thoroughly enjoy the
            process of creating web applications with nothing but a computer, some know-how,
            and creativity. I tend to live in the wacky world of JavaScript and its frameworks.
            We may fight a lot, but React.js and I have <span style={emphisize}>developed </span>a lasting bond.
          </p>
        </div>
        <div clasName="collection-grid">
          <Collection />
        </div>
      </div>
    </section>
  )
}

export default Work