import React from 'react'
import Styled from './index.style'

interface CardExpireProps {
  month: string
  year: string
}

const CardExpire = ({ month, year }: CardExpireProps) => (
  <Styled.CardExpireContainer>
    <Styled.CardTextContainer>{month}</Styled.CardTextContainer>/
    <Styled.CardTextContainer>{year}</Styled.CardTextContainer>
  </Styled.CardExpireContainer>
)

export default React.memo(CardExpire)
