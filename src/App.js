import './App.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import AboutSection from './AboutSection';
import SkillsCard from './SkillsCard';
import ProjectsPage from './ProjectsPage';

function App() {

  const [isActive, setIsActive] = useState("home");

  useEffect(()=>{
		if (window.matchMedia("(max-width: 640px)").matches) {
      setIsActive("phone");
    }
    
    window.addEventListener("resize", function() {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setIsActive("phone");
      }
      if (window.matchMedia("(min-width: 640px)").matches) {
        setIsActive("home");
      }
    });
	}, [])
  

  return (
    <div className="App">
      <div className='navbar-component'>
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
      </div>
      <div className='about-section-componenet'>
        <AboutSection/>
      </div>
      { isActive === 'phone' && 
        <>
          <div className='image-componenet'>
              <img src="https://i.imgur.com/N0WbdFP.png" alt="hero"/>
            </div>
            <div className='skills-componenet'>
              <SkillsCard/>
            </div>
            <div className='projects-page-component'>
              <ProjectsPage/>
          </div>
        </>
      }
      { isActive === 'home' && 
          <>
            <div className='image-componenet'>
              <img src="https://i.imgur.com/N0WbdFP.png" alt="hero"/>
            </div>
            <div className='skills-componenet'>
              <SkillsCard/>
            </div>
          </> 
      }
      { isActive === 'projects' &&
        <div className='projects-page-component'>
          <ProjectsPage/>
        </div>

      }
      
    </div>
  );
}

export default App;
