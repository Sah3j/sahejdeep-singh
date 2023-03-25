import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <div className='about-section-container'>
        <div className='about-section-text'>
            <h3>
                Hi there, I'm<span className='about-name'> Sahejdeep Singh - </span><span className='about-title'>fullstack developer </span>with a passion for creating innovative and user-friendly web applications.
            </h3>
            <h4>
                From <span className='about-text-highlight'>front-end</span> to <span className='about-text-highlight'>back-end</span> development, I thrive on tackling complex challenges and bringing ideas to life.
            </h4>
            <div className='about-section-socials'>
                <h4>Connect on my socials<br/>
                <a href='https://www.linkedin.com/in/sahejdeep-singh-599839144/' target='_blank' rel="noreferrer" className='linkedin'>-linkedin</a><br/>
                <a href='https://github.com/Sah3j?tab=repositories' target='_blank' rel="noreferrer" className='github'>-github</a></h4>
            </div>
        </div>
    </div>
  )
}

export default AboutSection