import React from 'react'

// Styling Imports
import gsap from 'gsap'
import '../styles/index.scss'

// Component Imports
import Header from '../components/header'
import Banner from '../components/banner'
import Work from '../components/work'
import About from '../components/about'
import Footer from '../components/footer'
import SEO from '../components/seo'

/* let tl = gsap.timeline();

tl.from('.title', {
  duration: 2, opacity: 0, x: () => Math.random()
    * 800 - 500, y: () => Math.random()
      * -200 - 200, stagger: 0.2, ease: 'elastic', rotation: 5000
});

tl.from('.greeting', { duration: 3.5, x: -200, opacity: 0, stagger: 0.5, ease: 'elastic' });
*/

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div className="container">
        <div className="content">
          <Header />
          <Banner />
          <About />
          <Work />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
