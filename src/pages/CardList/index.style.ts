import styled from 'styled-components'
import { CardStyle } from '../../css/card'
import { verticalCenterContainer } from '../../css/layout'

const CardListContainer = styled.div`
  ${verticalCenterContainer}
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`

const EmptyCard = styled.div`
  ${CardStyle}
  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: #e5e5e5;

  user-select: none;
`

export default { CardListContainer, CardContainer, EmptyCard }
