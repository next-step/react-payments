import { ChangeEvent, RefObject } from 'react'

import { Input, InputTitle, InputContainer } from '@/components/input'
import { useCardInfo } from '@/pages/hooks'

type HandleOwnerProps = {
  value: string
}
interface CardOwnerProps {
  ownerRef: RefObject<HTMLInputElement>
  handleChange({ value }: HandleOwnerProps): void
}

const CardOwner = ({ ownerRef, handleChange }: CardOwnerProps) => {
  const {
    cardInfo: { owner },
  } = useCardInfo()
  const handleCardOwnerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    handleChange({ value })
  }

  return (
    <InputContainer>
      <InputTitle>
        <span>카드 소유자 이름(선택)</span>
        <span>{`${owner.length}`}/30</span>
      </InputTitle>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ref={ownerRef}
        onInput={handleCardOwnerInputChange}
      />
    </InputContainer>
  )
}

export default CardOwner
