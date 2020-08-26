import React, { useState } from 'react';
import Image from 'gatsby-image';
import Modal from 'react-modal';

import '../styles/components/projectItem.scss';

const ProjectItem = ({ project }) => {

  return (
    <div className={`project__item ${project.name}`}>
      <div className="item__wrapper">
        <div className="image__container">
          <Image loading="eager" className="image" fluid={project.image.childImageSharp.fluid} alt={`${project.header} visual`} />
        </div>
        <div className="info__container">
          <div className="item__info">
            <div className="info__wrapper">
              <div className="header">
                <h2 className="item__name">{project.header}</h2>
                <p className="item__description">{project.description}</p>
              </div>
              <div className="button__wrapper">
                <a href={project.code} target="_blank" rel="noreferrer" className="item__button">Code</a>
                {project.app ?
                  <a href={project.app} target="_blank" rel="noreferrer" className="item__button">App</a>
                  :
                  null}
                {/* Add modal to display demo vid */}
                <button className="demo__button">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem