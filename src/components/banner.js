import React from 'react'
import Link from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <svg viewBox="0 0 600 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">Sean Murphy</text>
        </symbol>
        <use class="text" xlinkHref="#s-text"></use>
        <use class="text" xlinkHref="#s-text"></use>
        <use class="text" xlinkHref="#s-text"></use>
        <use class="text" xlinkHref="#s-text"></use>
        <use class="text" xlinkHref="#s-text"></use>
      </svg >
      <button className="scroll" onClick={() => scrollTo('#about')}><span></span>Still Not Impressed?</button>
    </div >
  )
}

export default Banner