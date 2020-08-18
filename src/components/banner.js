import React from 'react'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <svg viewBox="0 0 600 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">Sean Murphy</text>
          </symbol>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
        </svg >
      </div>
    </div >
  )
}

export default Banner