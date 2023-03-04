import React, { PropsWithChildren } from 'react'
import './Modal.css'

type LayerProps = {
  isOpen: boolean
}

const Modal: React.FC<PropsWithChildren<LayerProps>> = ({
  children,
  isOpen,
}) => {
  if (!isOpen) return null
  return (
    <div className='modal-wrap'>
      <div className='modal-content'>{children}</div>
    </div>
  )
}

export default Modal
