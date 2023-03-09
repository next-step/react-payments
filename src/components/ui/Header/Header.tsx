import React from 'react'
import './Header.css'

type HeaderProps = {
  /** 제목 앞 icon 추가 유무 */
  icon?: React.ReactNode
  /** 아이콘 클릭 이벤트 */
  onClickIcon?: () => void
  /** 헤더 타이틀 */
  title: string
}

const Header: React.FC<HeaderProps> = ({ icon, onClickIcon, title }) => {
  return (
    <header className='header'>
      {icon && (
        <button type='button' className='icon' onClick={onClickIcon}>
          {icon}
        </button>
      )}
      <h2 className='title'>{title}</h2>
    </header>
  )
}

export default Header
