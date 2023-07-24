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
                    ProjectName="Dayflow"
                    ProjectPhoto="https://i.imgur.com/8AhrewF.png"
                    ProjectCode="https://github.com/Sah3j/dayflow-app"
                    ProjectDemo="https://dayflow-app.vercel.app"
                    ProjectDescription="Routine building app that adds a splash of fun to your daily goals with emojis!"
                    ProjectTech="Next.js, NextAuth, Prisma, Planet Scale, Tailwind"
                />
            </div>
            <div className='project-2'>
                <ProjectCard
                    ProjectName="TaskWave"
                    ProjectPhoto="https://i.imgur.com/T2CHAGM.png"
                    ProjectCode="https://github.com/Sah3j/taskwave"
                    ProjectDemo="https://unrivaled-starburst-959d4f.netlify.app/"
                    ProjectDescription="Project management web app developed using the MERN stack"
                    ProjectTech="React, Node, Express, MongoDB"
                />
            </div>
            <div className='project-3'>
                <ProjectCard
                    ProjectName="Streetwear-BC"
                    ProjectPhoto="https://i.imgur.com/tfuTVSd.png"
                    ProjectCode="https://github.com/Sah3j/streetwear-bc"
                    ProjectDemo="https://sah3j.github.io/streetwear-bc/"
                    ProjectDescription="Full stack website for advertising, buying and selling streetwear "
                    ProjectTech="React, Firebase, Tailwind"
                />
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage