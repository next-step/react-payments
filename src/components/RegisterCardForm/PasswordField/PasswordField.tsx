import React, { ChangeEvent } from 'react'
import { UI_VARIANT } from 'constants/ui'
import { FormGroup } from '../../ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import { REGEX } from 'constants/regex'
import './PasswordField.css'

const validatePassword = (password: string) => {
  return password.length !== 1
}

const PasswordField = () => {
  const { state, handleChange } = useFormContext()
  const { cardPassword } = state
  const onChangePassword = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_NUMBER, '')

    handleChange({
      newValue: convertValue,
      key: 'cardPassword',
      error: validatePassword(convertValue),
      innerKey: name,
    })
  }

  return (
    <FormGroup label='카드비밀번호'>
      <div className='password-container'>
        <Input
          type='password'
          name='firstPassword'
          value={cardPassword.firstPassword.value}
          variant={UI_VARIANT.GHOST}
          onChange={onChangePassword}
          maxLength={1}
        />
        <Input
          type='password'
          name='secondPassword'
          value={cardPassword.secondPassword.value}
          variant={UI_VARIANT.GHOST}
          onChange={onChangePassword}
          maxLength={1}
        />
        <span>⦁</span>
        <span>⦁</span>
      </div>
    </FormGroup>
  )
}

export default PasswordField
