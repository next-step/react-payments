import React from 'react'
import styled, { css } from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  big?: boolean
}

export function Card({ children, ...props }: Props) {
  return <Box {...props}>{children}</Box>
}

export const Box = styled.div<{ big?: boolean }>`
  margin: 12px 0;
  width: 208px;
  min-height: 130px;
  height: 130px;
  color: #575757;
  background: #e5e5e5;
  border-radius: 5px;
  ${({ big }) =>
    big &&
    css`
      width: 290px;
      height: 180px;
      min-height: 180px;
    `}
`
