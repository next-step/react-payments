import { memo, RefObject } from 'react'

import { Input, InputTitle, InputBox, InputContainer } from '@/components/input'
import { VirtualKeyboard } from '@/components/modal'
import { useCardNumbers } from '@/pages/CardAdd/components/CardForm/hooks'

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
  handleChange: ({ value, order }: HandleChangeProps) => void
}

const CardNumbers = memo(({ numbersRef, handleChange }: CardNumbersProps) => {
  const onFocusThirdInput = () => {
    numbersRef.third.current?.focus()
  }

  const { handleInputChange } = useCardNumbers({ onFocusChange: onFocusThirdInput, handleChange })

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <Input ref={numbersRef.first} data-name="first" onInput={handleInputChange} maxLength={4} />
        <span>-</span>
        <Input ref={numbersRef.second} data-name="second" onInput={handleInputChange} maxLength={4} />
        <span>-</span>
        <Input ref={numbersRef.third} data-name="third" onInput={handleInputChange} maxLength={4} />
        <span>-</span>
        <Input ref={numbersRef.fourth} data-name="fourth" onInput={handleInputChange} maxLength={4} />
      </InputBox>
      <VirtualKeyboard />
    </InputContainer>
  )
})

CardNumbers.displayName = 'CardNumbers'

export default CardNumbers
