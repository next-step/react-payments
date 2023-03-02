import React, { PropsWithChildren } from 'react'
import './MobileTemplate.css'

const MobileTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mobile-wrap'>
      <div className='mobile-container'>{children}</div>
    </div>
  )
}

export default MobileTemplate
