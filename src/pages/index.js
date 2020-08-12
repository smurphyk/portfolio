import React from 'react'
import { Link } from 'gatsby'

// Styling Imports
import gsap from 'gsap'
import { css } from '@emotion/core'
import '../styles/index.scss'

// Component Imports
import Header from '../components/header'
import Banner from '../components/banner'
import Work from '../components/work'
import About from '../components/about'
import Footer from '../components/footer'
import SEO from '../components/seo'

let tl = gsap.timeline();

tl.from('.s', { duration: 1, x: 100, opacity: 0, });
tl.from('.title-last', { duration: 1, x: -100, opacity: 0, });
tl.from('.stagger-title', {
  duration: 1, opacity: 0, y: () => Math.random()
    * 500 - 200, stagger: .5
});

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div className="container">
        <div className="content">
          <Header />
          <Banner />
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
