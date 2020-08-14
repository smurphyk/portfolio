import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectItem from './projectItem'

const Collection = () => {

  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            header
            image {
              relativePath
              childImageSharp {
                fluid(quality:100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            description
            code
            app
          }
        }
      }
    }`);

  const projects = data.allProjectsJson.edges.map(
    (project) => project.node
  );
  return (
    projects.map(
      (project) => (
        <ProjectItem project={project} key={project.name}
        />
      )
    )
  )
}

export default Collection