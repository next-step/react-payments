import styled from 'styled-components'
import { cardTextStyle } from '../../../../css/card'

const CardExpireContainer = styled.div`
  display: flex;
  width: 40px;
  margin-right: 14px;
`

const CardTextContainer = styled.div`
  width: 17px;
`

const CardText = styled.span`
  ${cardTextStyle}
`

export default { CardExpireContainer, CardTextContainer, CardText }
