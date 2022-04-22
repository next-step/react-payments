import styled from 'styled-components'
import { MINT, CARD_INPUT_BACKGROUND as BACKGROUND } from 'controlled/styles/colors'

export const Box = styled.div`
  margin-top: 4px;
`

export const Input = styled.input`
  border: 0;
  width: 13%;
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  margin: 0px 4px;
  font-size: 18px;
  :first-of-type {
    margin-left: 0px;
  }
  :last-of-type {
    margin-right: 0px;
  }
  background: ${BACKGROUND};
  color: ${MINT};
`

export const Dot = styled.div`
  height: 5px;
  width: 5px;
  margin: 4px 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  background-color: ${MINT};
`
