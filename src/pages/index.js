import React from 'react'

// Styling Imports
import '../styles/index.scss'

// Component Imports
import Header from '../components/header'
import Banner from '../components/banner'
import Portfolio from '../components/portfolio'
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
          <Portfolio />
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
