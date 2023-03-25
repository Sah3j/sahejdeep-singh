import React from 'react'
import './SkillsCard.css'

function SkillsCard() {
  return (
    <div className='skills-card-container'>
        <div className='skills-card-content'>
            <ul>
                <li>
                    <h3>Front-end</h3>
                    <ul className='skills-list'>
                    <li><div className='line'></div></li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </li>
                <li>
                    <h3>Back-end</h3>
                    <ul className='skills-list'>
                        <li><div className='line'></div></li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </li>
                <li>
                    <h3>Languages</h3>
                    <ul className='skills-list'>
                    <li><div className='line'></div></li>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>C++</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SkillsCard