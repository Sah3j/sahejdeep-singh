import React from 'react'
import Navbar from './Navbar'
import SkillsCard from './SkillsCard'
import './ImageSection.css'

function ImageSection({isActive, setIsActive}) {
  return (
    <div className='image-section-container'>
        <div>
            <Navbar isActive={isActive} setIsActive={setIsActive}/>
        </div>
        <div>
            <img src="https://i.imgur.com/N0WbdFP.png" alt="hero"/>
        </div>
        <div>
            <SkillsCard/>
        </div>
    </div>
  )
}

export default ImageSection