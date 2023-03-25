import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectsPage.css'

function ProjectsPage() {
  return (
    <div className='projects-page'>
        <h1>Projects</h1>
        <div className='project-page-projects'>
            <div className='project-1'>
                <ProjectCard
                    ProjectName="TaskWave"
                    ProjectPhoto="https://i.imgur.com/T2CHAGM.png"
                    ProjectCode="https://github.com/Sah3j/taskwave"
                    ProjectDemo="https://unrivaled-starburst-959d4f.netlify.app/"
                    ProjectDescription="Project management web app developed using the MERN stack"
                    ProjectTech="React, Node, Express, MongoDB"
                />
            </div>
            <div className='project-2'>
                <ProjectCard
                    ProjectName="Streetwear-BC"
                    ProjectPhoto="https://i.imgur.com/tfuTVSd.png"
                    ProjectCode="https://github.com/Sah3j/streetwear-bc"
                    ProjectDemo="https://sah3j.github.io/streetwear-bc/"
                    ProjectDescription="Full stack website for advertising, buying and selling streetwear "
                    ProjectTech="React, Firebase, TailwindCSS"
                />
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage