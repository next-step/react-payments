import React, { ReactNode } from 'react'

import styled from 'styled-components'

const StyledButtonWrapper = styled.button`
  width: 100%;
  text-align: right;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledButtonText = styled.span`
  margin-right: 10px;
  font-size: 14px;
  color: #04c09e;
  font-weight: 700;
`

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: ReactNode
}) => {
  return (
    <StyledButtonWrapper type="button" onClick={onClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButtonWrapper>
  )
}
export default Button
