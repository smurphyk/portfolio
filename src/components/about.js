import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import '../styles/components/about.scss';

let profilePic = require('../images/profile.png');

const About = () => {
  return (
    <section className="about-container">
      <div className="picture-container">
        <div className="greeting">Meet</div>
        <img className="profile-pic" src={profilePic} alt="Picture of Sean Murphy"></img>
        <div className="greeting">Sean</div>
      </div>
      <hr></hr>
      <div className="about">
        <p className="about1">
          My name is Sean Murphy.  I am currently shifting from a career in the service and hospitality industry
          to the tech industry.  I chose this career path because it provides me the ability to help others by
          solving problems and utilizing my creativity.
        </p>
        <p className="about2">
          My past experiences in the service industry have helped me to develop vital skills, such as efficient and
          creative problem solving in order to help people of all backgrounds.
        </p>
        <p className="about3">
          I am pursuing a role as a full stack web developer because I believe it gives me the best opportunity to
          help the most people.  My ideal job involves an environment that values and fosters my desire to incorporate
          creativity, individuality, and personality into every project.
        </p>
      </div>
    </section>
  )
}

export default About
