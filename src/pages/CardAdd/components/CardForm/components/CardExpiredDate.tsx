import { Input, InputTitle, InputBox, InputContainer } from '@/components/input'
import { useCardExpiredDate } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardExpiredDateProps } from '@/pages/CardAdd/components/CardForm/types'

const CardExpiredDate = ({ expiredDateRef }: CardExpiredDateProps) => {
  const { handleInputChange } = useCardExpiredDate()

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox addtionalClassName="w-50">
        <Input ref={expiredDateRef.first} placeholder="MM" data-name="MM" onInput={handleInputChange} maxLength={2} />
        <Input ref={expiredDateRef.second} placeholder="YY" data-name="YY" onInput={handleInputChange} maxLength={2} />
      </InputBox>
    </InputContainer>
  )
}

export default CardExpiredDate
