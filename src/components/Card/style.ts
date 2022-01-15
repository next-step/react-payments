import styled, { css } from 'styled-components'

export const Card = styled.div<{ big?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  width: 208px;
  height: 130px;
  color: #575757;
  background: #e5e5e5;
  border-radius: 5px;
  ${(props) =>
    props.big &&
    css`
      width: 290px;
      height: 180px;
    `}
`
