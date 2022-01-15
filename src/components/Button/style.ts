import styled, { css } from 'styled-components'
import { MINT } from 'style/colors'
import { Props } from './Button'

export const Box = styled.button<Props>`
  border: 0;
  padding: 8px 12px;
  font-size: 16px;
  color: ${MINT};
  background: #fff;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`
