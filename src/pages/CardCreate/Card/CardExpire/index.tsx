import React, { useEffect } from 'react'
import Styled from './index.style'

interface CardExpireProps {
  month: string
  year: string
}

const CardExpire = ({ month, year }: CardExpireProps) => {
  useEffect(() => {
    console.log(month)
    console.log(year)
  }, [month, year])
  return (
    <Styled.CardExpireContainer>
      <Styled.CardTextContainer>{month}</Styled.CardTextContainer>/
      <Styled.CardTextContainer>{year}</Styled.CardTextContainer>
    </Styled.CardExpireContainer>
  )
}

export default React.memo(CardExpire)
