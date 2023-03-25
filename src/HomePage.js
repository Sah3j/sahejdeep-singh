import React from 'react'
import ImageSection from './ImageSection'
import AboutSection from './AboutSection'
import './HomePage.css'

function HomePage({isActive, setIsActive}) {
  return (
    <div>
        <div className="website-layout">
            <div className="about-section">
            <AboutSection/>
            </div>
            <div className="image-section">
            <ImageSection isActive={isActive} setIsActive={setIsActive}/>
            </div>
      </div>
    </div>
  )
}

export default HomePage