import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 4px 0;
  padding: 10px 8px;
  border-radius: 6px;
  display: flex;
  width: 35%;
  font-size: 18px;
  background: #ecebf1;
`

export const Divider = styled.span<{ color: any }>`
  padding: 2px 2px 0;
  color: ${(props) => (props.color ? '#04c09e' : '#717171')};
`

export const Input = styled.input`
  display: inline-block;
  font-size: 18px;
  border: none;
  width: 25%;
  background: none;
  color: #04c09e;
  &:focus {
    outline: none;
  }
  &:nth-of-type(1) {
    text-align: right;
  }
  &:nth-of-type(2) {
    text-align: left;
  }
`
