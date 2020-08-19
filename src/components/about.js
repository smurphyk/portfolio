import React from "react"
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import '../styles/components/about.scss';

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`);

  return (
    <section id="about">
      <div className="about-container">
        <div className="picture-container">
          <Image className="profile-pic" fluid={data.portrait.childImageSharp.fluid} alt="Sean Murphy" />
        </div>
      </div>
      <hr></hr>
      <div className="text-container">
        <p className="content">
          My name is Sean Murphy.  I am currently shifting from a career in the service and hospitality industry
          to the tech industry.  I chose this career path because it provides me the ability to help others by
          solving problems and utilizing my creativity.
        </p>
        <p className="content">
          My past experiences in the service industry have helped me to develop vital skills, such as efficient and
          creative problem solving in order to help people of all backgrounds.
        </p>
        <p className="content">
          I am pursuing a role as a full stack web developer because I believe it gives me the best opportunity to
          help the most people.  My ideal job involves an environment that values and fosters my desire to incorporate
          creativity, individuality, and personality into every project.
        </p>
      </div>
    </section>
  )
}

export default About
