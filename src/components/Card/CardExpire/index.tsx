import React from 'react'
import Styled from './index.style'

interface CardExpireProps {
  month: string
  year: string
}

const CardExpire = ({ month, year }: CardExpireProps) => (
  <Styled.CardExpireContainer>
    <Styled.CardTextContainer>
      <Styled.CardText>{month.slice(0, 2)}</Styled.CardText>
      <Styled.CardText>/</Styled.CardText>
      <Styled.CardText>{year.slice(0, 2)}</Styled.CardText>
    </Styled.CardTextContainer>
  </Styled.CardExpireContainer>
)

export default React.memo(CardExpire)
