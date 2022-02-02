import { Link } from 'react-router-dom'
import Styled from './index.style'

interface HeaderProps {
  linkTo?: string
  title: string
}

const Header = ({ title, linkTo }: HeaderProps) => {
  return (
    <>
      <Styled.Header>
        {linkTo && <Link to={linkTo}>{'< '}</Link>}
        {title}
      </Styled.Header>
    </>
  )
}

export default Header
