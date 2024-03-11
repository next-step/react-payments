import React from 'react'
import { InputStyle } from './DateInput.tsx'
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
      <InputStyle>
        <input
          type="text"
          value={one}
          onChange={onChangeOne}
          maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
        />
      </InputStyle>
      {one.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <InputStyle>
        <input
          type="text"
          value={two}
          onChange={onChangeTwo}
          maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
        />
      </InputStyle>
      {two.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <InputStyle>
        <input
          type="password"
          value={three}
          onChange={onChangeThree}
          maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
        />
      </InputStyle>
      {three.length === CARD_ONE_SECTION_NUMBER_LENGTH && <Slash>-</Slash>}
      <InputStyle>
        <input
          type="password"
          value={four}
          onChange={onChangeFour}
          maxLength={CARD_ONE_SECTION_NUMBER_LENGTH}
        />
      </InputStyle>
    </div>
  )
}
export default CardNumberInput
