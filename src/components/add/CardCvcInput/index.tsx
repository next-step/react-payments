import { useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputTitle, InputWarning } from '$components/common/Input'
import { CVC_LENGTH } from '$constants/card'
import { checkLength, checkNumberString } from '$utils/validate'

interface CardCvcInputProps {
  cardCvc: Card['cvc']
  setCardCvc: (cvc: Card['cvc']) => void
}

function CardCvcInput({ cardCvc, setCardCvc }: CardCvcInputProps) {
  const [cvc, setCvc] = useState<Card['cvc']>(cardCvc)
  const [showsWarning, setWarning] = useState(false)

  const isValidInput = useCallback((value) => {
    if (checkLength(value, CVC_LENGTH.MIN, CVC_LENGTH.MAX) && checkNumberString(value)) {
      setWarning(false)
      return true
    }

    !checkNumberString(value) && setWarning(true)
    return false
  }, [])

  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setCvc(value)
    },
    [isValidInput],
  )

  useEffect(() => {
    setCardCvc(cvc)
  }, [cvc, setCardCvc])

  return (
    <Input>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <BasicInput className="w-25" type="password" value={cvc} onChange={handleChange} data-testid="cvc" />
      {showsWarning && <InputWarning>숫자만 입력가능해요</InputWarning>}
    </Input>
  )
}

export default CardCvcInput
