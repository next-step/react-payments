import styled, { css } from 'styled-components'

interface Props {
  big?: boolean
  type?: string
}

export const Card = styled.div<Props>`
  margin: 12px 0;
  width: 208px;
  height: 130px;
  color: #575757;
  background: #e5e5e5;
  border-radius: 5px;
  ${({ big }) =>
    big &&
    css`
      width: 290px;
      height: 180px;
    `}
  ${({ type }) =>
    type &&
    css`
      background: CARD[type];
    `}
`
