import React from 'react'
import { Link } from 'gatsby'

// Styling Imports
import Layout from '../components/layout'
import SEO from '../components/seo'
import gsap from 'gsap'
import { css } from '@emotion/core'
import '../styles/constants.scss'

// Component Imports
import Header from '../components/header'
import Banner from '../components/banner'
import Work from '../components/work'
import About from '../components/about'
import Footer from '../components/footer'

gsap.from('main-title', { duration: 5, opacity: 0, stagger: 0.5 });
gsap.to('.main-title', { duration: 2, x: 500, fontColor: '#067b9c' });

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <div className="container">
        <div className="content">
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
