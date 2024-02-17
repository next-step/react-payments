import { ChangeEvent, RefObject, useContext } from 'react'

import { Input, InputTitle, InputContainer } from '@/components/input'
import { CardStateContext } from '@/contexts/card'
import { useCardInfo } from '@/pages/hooks'

interface CardOwnerProps {
  ownerRef: RefObject<HTMLInputElement>
}

const CardOwner = ({ ownerRef }: CardOwnerProps) => {
  // Todo: useContext 커스텀 훅으로 숨기기
  const { handleOwner } = useCardInfo()
  const { owner } = useContext(CardStateContext)
  const handleCardOwnerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    handleOwner({ value })
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
