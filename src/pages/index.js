import React from "react"
import { Link } from "gatsby"

// Styling Imports
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/styles.scss"

// Component Imports
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Home" />
    <h1>SEAN MURPHY</h1>
    <p>Introducing Development with a Sense of Humor</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
