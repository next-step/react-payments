import Styled from './index.style'

const Card = () => {
  return (
    <Styled.Card>
      <Styled.CardTop>
        <Styled.CardText>클린카드</Styled.CardText>
      </Styled.CardTop>
      <Styled.CardMiddle>
        <Styled.CardSmallChip />
      </Styled.CardMiddle>
      <Styled.CardBottom>
        <Styled.CardBottomNumber>
          <Styled.CardText>1111 - 2222 - oooo - oooo</Styled.CardText>
        </Styled.CardBottomNumber>
        <Styled.CardBottomInfo>
          <Styled.CardText>NAME</Styled.CardText>
          <Styled.CardText>MM / YY</Styled.CardText>
        </Styled.CardBottomInfo>
      </Styled.CardBottom>
    </Styled.Card>
  )
}

export default Card
