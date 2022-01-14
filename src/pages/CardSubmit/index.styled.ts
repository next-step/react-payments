import styled from 'styled-components'
import { verticalCenterContainer } from '../../css/layout'

const CardList = styled.div``

const Container = styled.div`
  ${verticalCenterContainer}
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
export default { CardList, Container, HeaderContainer }
