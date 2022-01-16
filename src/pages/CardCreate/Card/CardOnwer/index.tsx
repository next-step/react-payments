import React from 'react'
import Styled from './index.style'

interface CardOwnerProps {
  name: string
}

const CardOwner = ({ name }: CardOwnerProps) => (
  <Styled.CardTextContainer>{name || 'NAME'}</Styled.CardTextContainer>
)

export default React.memo(CardOwner)
