import { Input, InputTitle, InputBox, InputContainer } from '@/components/input'
import { useCardNumbers } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardNumbersOrder, CardNumbersProps } from '@/pages/CardAdd/components/CardForm/types'

const CardNumbers = ({ numbersRef, nextRef, handleChange }: CardNumbersProps) => {
  const onFocusChange = (order: CardNumbersOrder) => {
    numbersRef[order].current?.focus()
  }

  const { handleInputChange, openVirtualKeyboard } = useCardNumbers({
    numbersRef,
    nextRef,
    onFocusChange,
    handleChange,
  })

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <Input ref={numbersRef.first} data-name="first" onInput={handleInputChange} maxLength={4} />
        <span>-</span>
        <Input ref={numbersRef.second} data-name="second" onInput={handleInputChange} maxLength={4} />
        <span>-</span>
        <Input
          ref={numbersRef.third}
          data-name="third"
          onInput={handleInputChange}
          maxLength={4}
          onFocus={() => openVirtualKeyboard('third')}
        />
        <span>-</span>
        <Input
          ref={numbersRef.fourth}
          data-name="fourth"
          onInput={handleInputChange}
          maxLength={4}
          onFocus={() => openVirtualKeyboard('fourth')}
        />
      </InputBox>
    </InputContainer>
  )
}

CardNumbers.displayName = 'CardNumbers'

export default CardNumbers
