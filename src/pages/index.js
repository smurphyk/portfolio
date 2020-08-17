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
