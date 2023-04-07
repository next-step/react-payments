import { Input, InputTitle, InputBox, InputContainer } from '@/components/input'
import { useCardExpiredDate } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardExpiredDateProps } from '@/pages/CardAdd/components/CardForm/types'

const CardExpiredDate = ({ expiredDateRef, handleChange }: CardExpiredDateProps) => {
  const { handleInputChange } = useCardExpiredDate({ handleChange })

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox addtionalClassName="w-50">
        <Input ref={expiredDateRef.first} placeholder="MM" data-name="MM" onInput={handleInputChange} />
        <Input ref={expiredDateRef.second} placeholder="YY" data-name="YY" onInput={handleInputChange} />
      </InputBox>
    </InputContainer>
  )
}

export default CardExpiredDate
