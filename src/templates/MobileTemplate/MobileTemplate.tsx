import React from 'react'
import './MobileTemplate.css'

type MobileTeamplteProps = {
  children: React.ReactNode
}

const MobileTemplate: React.FC<MobileTeamplteProps> = ({ children }) => {
  return (
    <div className='mobile-wrap'>
      <div className='mobile-container'>{children}</div>
    </div>
  )
}

export default MobileTemplate
