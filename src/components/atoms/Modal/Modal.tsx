import React from 'react'
import './Modal.css'

type LayerProps = {
  children: React.ReactNode
  isOpen: boolean
}

const Modal: React.FC<LayerProps> = ({ children, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className='modal-wrap'>
      <div className='modal-content'>{children}</div>
    </div>
  )
}

export default Modal
