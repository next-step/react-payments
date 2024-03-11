import React from 'react'
import { StyledInput } from './DateInput.tsx'
import styled from 'styled-components'

const CARD_ONE_SECTION_NUMBER_LENGTH = 4

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
        maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
      />
      {one.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <StyledInput
        type="text"
        value={two}
        onChange={onChangeTwo}
        maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
      />
      {two.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <StyledInput
        type="password"
        value={three}
        onChange={onChangeThree}
        maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
      />
      {three.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <StyledInput
        type="password"
        value={four}
        onChange={onChangeFour}
        maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
      />
    </div>
  )
}
export default CardNumberInput
