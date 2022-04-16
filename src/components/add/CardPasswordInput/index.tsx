import { useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputTitle, InputWarning } from '$components/common/Input'
import { PASSWORD_EACH_LENGTH } from '$constants/card'
import { checkLength, checkNumberString } from '$utils/validate'

interface CardPasswordInputProps {
  cardPassword: Card['password']
  setCardPassword: (cardPassword: Card['password']) => void
}

function CardPasswordInput({ cardPassword, setCardPassword }: CardPasswordInputProps) {
  const [password1, setPassword1] = useState(cardPassword[0])
  const [password2, setPassword2] = useState(cardPassword[1])
  const [showsWarning, setWarning] = useState(false)

  const isValidInput = useCallback((value) => {
    if (checkLength(value, PASSWORD_EACH_LENGTH.MIN, PASSWORD_EACH_LENGTH.MAX) && checkNumberString(value)) {
      setWarning(false)
      return true
    }

    !checkNumberString(value) && setWarning(true)
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

  return (
    <Input>
      <InputTitle>카드 비밀번호</InputTitle>
      <BasicInput className="w-15" type="password" value={password1} onChange={handlePassword1Change} />
      <BasicInput className="w-15" type="password" value={password2} onChange={handlePassword2Change} />
      <BasicInput className="w-15" type="password" value="*" disabled />
      <BasicInput className="w-15" type="password" value="*" disabled />
      {showsWarning && <InputWarning>숫자만 입력가능해요</InputWarning>}
    </Input>
  )
}

export default CardPasswordInput
