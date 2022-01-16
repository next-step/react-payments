import styled from 'styled-components'
import { cardTextStyle } from '../../../css/card'

const CardTextContainer = styled.div`
  padding-left: 18px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardText = styled.span`
  ${cardTextStyle}
`

export default { CardTextContainer, CardText }
