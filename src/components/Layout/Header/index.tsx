import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Styled from './index.style'

interface HeaderProps {
  lintTo?: string
  title: string
}

const Header = ({ title, lintTo }: HeaderProps) => {
  return (
    <>
      <Styled.Header>
        {lintTo && <Link to={lintTo}>{'< '}</Link>}
        {title}
      </Styled.Header>
    </>
  )
}

export default Header
