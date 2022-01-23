import styled from 'styled-components'
import { MINT, CARD_INPUT_BACKGROUND as BACKGROUND } from 'style/colors'

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`
export const Input = styled.input`
  border: 0;
  padding: 12px 12px;
  margin-top: 4px;
  border-radius: 6px;
  font-size: 18px;
  background: ${BACKGROUND};
  color: ${MINT};
`
