import { Input } from 'components/atoms/Input'
import { REGEX } from 'constants/regex'
import { CardTypeKeys } from 'models/card.model'
import React, { ChangeEvent, useState } from 'react'
import { getConvertAddStrFormat } from 'utils/formats'
import { InputBox } from '../InputBox'
import './PasswordFormGroup.css'

type PasswordFormGroupProps = {
  onChange: (value: string, name: CardTypeKeys) => void
}

const PasswordFormGroup: React.FC<PasswordFormGroupProps> = ({ onChange }) => {
  const [password, setPassword] = useState<string[]>(['', ''])

  const onConvertValue = (e: ChangeEvent, idx: number) => {
    const { value } = e.target as HTMLInputElement
    const currentValue = getConvertAddStrFormat(value, REGEX.NOT_NUMBER)
    const currentPassword = [
      ...password.slice(0, idx),
      currentValue,
      ...password.slice(idx + 1),
    ]
    setPassword(currentPassword)
    onChange(currentPassword.join(''), 'password')
  }

  return (
    <InputBox label='카드비밀번호'>
      <div className='passwork-box'>
        <Input
          key='password0'
          type='password'
          width='15%'
          isRequire
          onChange={(e: ChangeEvent) => onConvertValue(e, 0)}
          name='password'
          value={password[0]}
          maxLength={1}
        />
        <Input
          key='password1'
          type='password'
          width='15%'
          isRequire
          onChange={(e: ChangeEvent) => onConvertValue(e, 1)}
          name='password'
          value={password[1]}
          maxLength={1}
        />
        <span>⦁</span>
        <span>⦁</span>
      </div>
    </InputBox>
  )
}

export default PasswordFormGroup
