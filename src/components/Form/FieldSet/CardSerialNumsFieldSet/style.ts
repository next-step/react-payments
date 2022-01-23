import styled, { css } from 'styled-components'
import { MINT, CARD_INPUT_BACKGROUND as BACKGROUND } from 'style/colors'

export const Box = styled.div`
  padding: 12px 0;
`

const COLOR = css`
  background: ${BACKGROUND};
  color: ${MINT};
`

export const Container = styled.div`
  width: 100%;
  padding: 8px 0px;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  ${COLOR}
`

export const Input = styled.input`
  border: 0;
  width: 13%;
  padding: 4px 0;
  text-align: center;
  font-size: 18px;
  ${COLOR}
`

export const Divider = styled.span`
  font-size: 18px;
  padding: 2px 4px 0;
`
