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
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `sean`, `murphy`]} />
      <Header />
      <Banner />
      <Portfolio />
      <About />
      <Footer />
    </>
  )
}

export default IndexPage
