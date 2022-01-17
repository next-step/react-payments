import { useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputTitle } from '$components/common/Input'

interface CardPasswordInputProps {
  cardPassword: Card['password']
  setCardPassword: (cardPassword: Card['password']) => void
}

function CardPasswordInput({ cardPassword, setCardPassword }: CardPasswordInputProps) {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const isValidInput = useCallback((value) => {
    if (/^\d{0,1}$/g.test(value)) return true
    return false
  }, [])

  const handlePassword1Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setPassword1(value)
    },
    [isValidInput],
  )
  const handlePassword2Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setPassword2(value)
    },
    [isValidInput],
  )

  useEffect(() => {
    setCardPassword([password1, password2])
  }, [password1, password2, setCardPassword])

  useEffect(() => {
    const [cardPassword1, cardPassword2] = cardPassword
    setPassword1(cardPassword1)
    setPassword2(cardPassword2)
  }, [setPassword1, cardPassword])

  return (
    <Input>
      <InputTitle>카드 비밀번호</InputTitle>
      <BasicInput className="w-15" type="password" value={password1} onChange={handlePassword1Change} />
      <BasicInput className="w-15" type="password" value={password2} onChange={handlePassword2Change} />
      <BasicInput className="w-15" type="password" value="*" disabled />
      <BasicInput className="w-15" type="password" value="*" disabled />
    </Input>
  )
}

export default CardPasswordInput
