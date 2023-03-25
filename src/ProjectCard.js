import React from 'react'
import './ProjectCard.css'

function ProjectCard({ProjectName, ProjectPhoto, ProjectCode, ProjectDemo, ProjectDescription, ProjectTech}) {
  return (
    <div className='project-card'>
        <div className='project-name'>
            <h4>{ProjectName}</h4>
        </div>
        <div className='project-card-image'>
            <img src={ProjectPhoto} alt="taskwave project screenshot"/>
        </div>
        <div className='project-links'>
            <a href={ProjectCode} target="_blank" rel="noreferrer">Code</a>
            <a href={ProjectDemo} target="_blank" rel="noreferrer">Demo</a>
        </div>
        <div className='project-description'>
            <p>{ProjectDescription}</p>
        </div>
        <div className='project-technologies'>
            <h5>Technologies Used</h5>
            <p>{ProjectTech}</p>
        </div>
    </div>
  )
}

export default ProjectCard