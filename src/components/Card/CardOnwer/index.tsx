import React from 'react'
import Styled from './index.style'

const CardOwner = ({ name }: CardOwnerProps) => (
  <Styled.CardTextContainer>{name || 'NAME'}</Styled.CardTextContainer>
)

export default React.memo(CardOwner)

interface CardOwnerProps {
  name: string
}
