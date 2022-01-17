import { useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputTitle } from '$components/common/Input'

interface CardCvcInputProps {
  cardCvc: Card['cvc']
  setCardCvc: (cvc: Card['cvc']) => void
}

function CardCvcInput({ cardCvc, setCardCvc }: CardCvcInputProps) {
  const [cvc, setCvc] = useState<Card['cvc']>(cardCvc)

  const isValidInput = useCallback((value) => {
    if (/^\d{0,3}$/g.test(value)) return true
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
      <BasicInput className="w-25" type="password" value={cvc} onChange={handleChange} />
    </Input>
  )
}

export default CardCvcInput
