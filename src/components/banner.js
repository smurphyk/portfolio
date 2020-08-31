import React from 'react'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <section id="banner">
      <svg viewBox="0 0 600 300" className="banner__title">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="banner-text">Sean Murphy</text>
        </symbol>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
      </svg >
    </section>
  )
}

export default Banner