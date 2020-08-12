import React from 'react'
import Header from './header'
import Footer from './footer'
import Banner from './banner'

const Layout = props => {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default Layout