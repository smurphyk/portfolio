import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <div className="row">
        <div className="title">S</div>
        <div className="title">e</div>
        <div className="title">a</div>
        <div className="title">n</div>
        <div className="title-space"></div>
        <div className="title">M</div>
        <div className="title">u</div>
        <div className="title">r</div>
        <div className="title">p</div>
        <div className="title">h</div>
        <div className="title">y</div>
      </div>
      <button className="scroll" onClick={() => scrollTo('#about')}><span></span>Still Not Impressed?</button>
    </div>
  )
}

export default Banner