import React from 'react';
import { StyledInput } from './DateInput.tsx';
import styled from 'styled-components';

const Slash = styled.span`
  color: #94dacd;
  font-weight: 700;
`
const CardNumberInput = ({
  one,
  two,
  three,
  four,
  onChangeOne,
  onChangeTwo,
  onChangeThree,
  onChangeFour,
}: {
  one: string
  two: string
  three: string
  four: string
  onChangeOne: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTwo: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeThree: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeFour: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="input-box">
      <StyledInput
        type="text"
        value={one}
        onChange={onChangeOne}
        maxLength={4}
      />
      {one.length === 4 && <Slash>-</Slash>}
      <StyledInput
        type="text"
        value={two}
        onChange={onChangeTwo}
        maxLength={4}
      />
      {two.length === 4 && <Slash>-</Slash>}
      <StyledInput
        type="password"
        value={three}
        onChange={onChangeThree}
        maxLength={4}
      />
      {three.length === 4 && <Slash>-</Slash>}
      <StyledInput
        type="password"
        value={four}
        onChange={onChangeFour}
        maxLength={4}
      />
    </div>
  )
}
export default CardNumberInput;