import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineSimCardDownload } from 'react-icons/md';
import ResumeModal from './ResumeModal';
import resume from './Sahejdeep-FullStackDeveloper.pdf'

function Navbar({isActive, setIsActive}) {

    const handleTransition = (e) => {
        const aboutPanel = document.querySelector(".about-section-componenet");
        const aboutText = document.querySelector(".about-section-text");

        if(e.target.innerHTML === 'Projects'){
            aboutText.classList.add('fade');
            aboutPanel.classList.add('slide');
        } else {
            aboutText.classList.remove('fade');
            aboutPanel.classList.remove('slide');
        }

    }

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    
  return (
    <div>
        <ul className='navbar-list'>
            <div className='navbar-logo'>
                <h1>Sd.</h1>
            </div>
            <div className='navbar-list-navigation'>
                <li onClick={(e) => {setIsActive('home'); handleTransition(e);}} className={isActive === 'home' && 'active'}>Home</li>
                <li onClick={(e) => {setIsActive('projects'); handleTransition(e);}} className={isActive === 'projects' && 'active'}>Projects</li>
            </div>
            <div className='navbar-contact'> 
                <a href={resume} download>
                    <div className='navbar-contact-content'>
                        <div className='resume-icon'>
                            <MdOutlineSimCardDownload/>
                        </div>
                        
                        Resume
                    </div>
                </a>
            </div>
        </ul>
        <ResumeModal showModal={showModal} toggleModal={toggleModal}/>
    </div>
  )
}

export default Navbar