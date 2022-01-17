import { useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputTitle } from '$components/common/Input'

interface CardHolderNameInputProps {
  cardHolderName: Card['holderName']
  setCardHolderName: (cardHolderName: Card['holderName']) => void
}

function CardHolderNameInput({ cardHolderName, setCardHolderName }: CardHolderNameInputProps) {
  const [holderName, setHolderName] = useState(cardHolderName)

  const isValidInput = useCallback((value) => {
    if (value.length <= 30) return true
    return false
  }, [])

  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setHolderName(value)
    },
    [isValidInput],
  )

  useEffect(() => {
    setCardHolderName(holderName)
  }, [holderName, setCardHolderName])

  return (
    <Input>
      <InputTitle>카드 소유자 이름(선택) ({holderName?.length ?? 0}/30)</InputTitle>
      <BasicInput
        type="text"
        value={holderName}
        onChange={handleChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Input>
  )
}

export default CardHolderNameInput
