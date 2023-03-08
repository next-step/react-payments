import React, { PropsWithChildren } from 'react'
import './DialogLayout.css'

const DialogLayout: React.FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <div className='modal-wrap'>
      <div className='modal-content'>{children}</div>
    </div>
  )
}

export default DialogLayout
