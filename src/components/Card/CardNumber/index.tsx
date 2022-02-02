import React from 'react'
import Styled from './index.style'

const CardNumber = ({
  number1,
  number2,
  number3,
  number4,
}: CardNumberProps) => {
  return (
    <Styled.CardNumberContainer>
      <Styled.CardTextContainer>{number1}</Styled.CardTextContainer>
      <Styled.CardTextContainer>{number2}</Styled.CardTextContainer>
      <Styled.CardTextContainer>
        {(number3 ?? '').replace(/[0-9]/g, '*')}
      </Styled.CardTextContainer>
      <Styled.CardTextContainer>
        {(number4 ?? '').replace(/[0-9]/g, '*')}
      </Styled.CardTextContainer>
    </Styled.CardNumberContainer>
  )
}

export default React.memo(CardNumber)

interface CardNumberProps {
  number1: string
  number2: string
  number3: string
  number4: string
}
