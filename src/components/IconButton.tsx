import React, { ReactNode } from 'react'

import styled from 'styled-components'

const StyledIconButtonWrapper = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledIconButton = styled.span<{ $file: string; $color?: string }>`
  display: block;
  background-color: ${(props) => (props.$color ? props.$color : 'black')};
  mask-image: ${(props) => `url(${props.$file})`};
  mask-repeat: no-repeat;
  mask-position: center left;
  mask-size: contain;
  width: 12px;
  height: 12px;
`

const IconButton = ({
  onClick,
  file,
}: {
  onClick: () => void
  file: string
}) => {
  return (
    <StyledIconButtonWrapper type="button" onClick={onClick}>
      <StyledIconButton $file={file} />
    </StyledIconButtonWrapper>
  )
}
export default IconButton
