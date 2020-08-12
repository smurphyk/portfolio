import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <div className="row">
        <div className="title-first">
          <span className="s">S</span>
          <span>e</span>
          <span>a</span>
          <span>n</span>
        </div>
        <div className="title-last">
          <span className="m">M</span>
          <span>u</span>
          <span>r</span>
          <span>p</span>
          <span>h</span>
          <span>y</span>
        </div>
      </div>
      <button className="scroll" onClick={() => scrollTo('#about')}><span></span>Still Not Impressed?</button>
    </div>
  )
}

export default Banner