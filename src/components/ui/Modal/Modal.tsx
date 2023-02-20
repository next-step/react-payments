import React from 'react'
import ContextPortal from 'hooks/use-contextPortal'

type LayerProps = {
  children: React.ReactNode
  wrapperId: string
}

const Modal: React.FC<LayerProps> = ({ children, wrapperId }) => {
  return (
    <ContextPortal wrapperId={wrapperId}>
      <div className='modal-wrap'>
        <div className='modal-content'>{children}</div>
      </div>
    </ContextPortal>
  )
}

export default Modal
