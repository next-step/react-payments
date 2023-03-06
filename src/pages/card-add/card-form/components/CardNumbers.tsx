import { RefObject } from 'react'

import { Input, InputTitle, InputBox, InputContainer } from '@/components/input'
import { useCardNumbers } from '@/pages/card-add/card-form/hooks'

interface HandleChangeProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}
interface CardNumbersProps {
  numbersRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
    third: RefObject<HTMLInputElement>
    fourth: RefObject<HTMLInputElement>
  }
  handleChange({ value, order }: HandleChangeProps): void
}

const CardNumbers = ({ numbersRef, handleChange }: CardNumbersProps) => {
  const { handleInputChange } = useCardNumbers({ handleChange })

  console.log('check')

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <Input ref={numbersRef.first} data-name="first" onInput={handleInputChange} />
        <span>-</span>
        <Input ref={numbersRef.second} data-name="second" onInput={handleInputChange} />
        <span>-</span>
        <Input ref={numbersRef.third} data-name="third" onInput={handleInputChange} />
        <span>-</span>
        <Input ref={numbersRef.fourth} data-name="fourth" onInput={handleInputChange} />
      </InputBox>
    </InputContainer>
  )
}

export default CardNumbers
