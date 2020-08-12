import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="about">
      <p>
        My name is Sean Murphy.  I am currently shifting from a career in the service and hospitality industry
        to the tech industry.  I chose this career path because it provides me the ability to help others by
        solving problems and utilizing my creativity.
        </p>
      <p>
        My past experiences in the service industry have helped me to develop vital skills, such as efficient and
        creative problem solving in order to help people of all backgrounds.
        </p>
      <p>
        I am pursuing a role as a full stack web developer because I believe it gives me the best opportunity to
        help the most people.  My ideal job involves an environment that values and fosters my desire to incorporate
        creativity, individuality, and personality into every project.
        </p>
    </div>
  )
}

export default About
