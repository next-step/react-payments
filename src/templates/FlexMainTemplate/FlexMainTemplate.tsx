import React, { PropsWithChildren } from 'react'
import './FlexMainTemplate.css'

const FlexMainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className='main-container'>{children}</main>
}

export default FlexMainTemplate
