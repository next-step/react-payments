import styled from 'styled-components'

export type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center'
const Input = styled.input<{ backgroundColor?: string; textAlign: TextAlign }>`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  ${({ textAlign }) => ({ textAlign: textAlign })}
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  color: #04c09e;
  font-size: 16px;
  padding: 0 12px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${({ backgroundColor }) => backgroundColor && { backgroundColor }}
`
const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`

const InputDivider = styled.span<{ color: 'black' | 'green' }>`
  color: black;
  height: 100%;
  font-size: 14px;
  color: ${({ color }) => (color === 'green' ? '#04c09e' : 'black')};
  font-size: 16px;
`
export default {
  Input,
  InputBox,
  InputDivider,
}
