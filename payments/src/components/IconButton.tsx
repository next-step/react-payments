import React, { ReactNode } from 'react'

import styled from 'styled-components'

const StyledIconButtonWrapper = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledIconButton = styled.span<{ $name: string; $color?: string }>`
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
  background-color: ${(props) => (props.$color ? props.$color : 'black')};
  background-image: ${(props) => props.$name};
`

const IconButton = ({
  onClick,
  name
}: {
  onClick: () => void
  name:string
}) => {
  return (
    <StyledIconButtonWrapper type="button" onClick={onClick}>
      <StyledIconButton $name={`/icons/${name}.svg`}/>
    </StyledIconButtonWrapper>
  )
}
export default IconButton
