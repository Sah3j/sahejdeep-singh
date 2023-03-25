import React from 'react'
import './ResumeModal.css'

function ResumeModal({showModal, toggleModal}) {
  return (
    <div>
        {showModal && (
        <div className="modal-background">
          <div className="modal">
          </div>
        </div>
      )}

      {showModal && (
        <div className="overlay" onClick={toggleModal}></div>
      )}
    </div>
  )
}

export default ResumeModal