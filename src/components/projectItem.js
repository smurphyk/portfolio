import React from 'react'
import Image from 'gatsby-image'
import { Row, Col } from 'react-simple-flex-grid'

import '../styles/components/projectItem.scss'

const ProjectItem = ({ project }) => {

  return (
    <Row>
      <Col span={1}>
        <Col span={3} className={`project-item ${project.name}`}>
          <div className="item-wrapper">
            <div className="image-container">
              <Image className="image" fluid={project.image.childImageSharp.fluid} alt={`${project.header} visual`} />
            </div>
            <div className="text-container">
              <div className="info-wrapper">
                <div className="header">
                  <h2 className="item-name">{project.header}</h2>
                  <p className="item-description">{project.description}</p>
                </div>
                <div className="button-wrapper">
                  <a href={project.code} target="_blank" rel="noreferrer" className="item-button">Code</a>
                  {project.app ?
                    <a href={project.app} target="_blank" rel="noreferrer" className="item-button">App</a>
                    :
                    null}
                  {/* Add modal to display demo vid */}
                  <button className="item-button">Demo</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default ProjectItem