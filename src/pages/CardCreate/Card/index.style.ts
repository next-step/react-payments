import styled from 'styled-components'
import {
  cardBottomInfoStyle,
  cardBottomNumberStyle,
  cardBottomStyle,
  CardMiddleStyle,
  CardStyle,
  cardTextStyle,
  cardTopStyle,
  smallCardStyle,
  smallChipStyle,
} from '../../../css/card'

const Card = styled.div`
  ${smallCardStyle}
  ${CardStyle}
  margin-bottom: 25px;
`

const CardTop = styled.div`
  ${cardTopStyle}
`

const CardMiddle = styled.div`
  ${CardMiddleStyle}
`

const CardBottom = styled.div`
  ${cardBottomStyle}
`

const CardBottomNumber = styled.div`
  ${cardBottomNumberStyle}
`

const CardBottomInfo = styled.div`
  ${cardBottomInfoStyle}
`

const CardText = styled.span`
  ${cardTextStyle}
`

const CardSmallChip = styled.div`
  ${smallChipStyle}
`

export default {
  Card,
  CardTop,
  CardMiddle,
  CardBottom,
  CardBottomInfo,
  CardText,
  CardSmallChip,
  CardBottomNumber,
}
