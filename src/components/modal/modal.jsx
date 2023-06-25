import React from 'react'
import "./modal.css"

function Modal({ active, handleModal, text }) {
  return (
    <>
      {
        active ?

          <div className={active ? 'modal active' : 'modal'}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>

              <p>{text ? text : ''}</p>
              <button className='modal__button' onClick={()=>handleModal()}>Ok!</button>
            </div>
          </div> : <></>
      }

    </>
  )
}

export default Modal