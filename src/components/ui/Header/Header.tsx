import React from 'react'
import './Header.css'

type HeaderProps = {
  icon?: React.ReactNode
  onClickIcon?: () => void
  title: string
}

const Header: React.FC<HeaderProps> = ({ icon, onClickIcon, title }) => {
  return (
    <header className='header'>
      {icon && <span className={`icon ${icon}`} onClick={onClickIcon}></span>}
      <span className='title'>{title}</span>
    </header>
  )
}

export default Header
