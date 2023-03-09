import React, { ChangeEvent } from 'react'
import { UI_VARIANT } from 'constants/ui'
import { FormGroup } from '../../ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import { REGEX } from 'constants/regex'
import './PasswordField.css'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'

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
      value: convertValue,
      key: PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD,
      // error: validatePassword(convertValue),
      name,
    })
  }

  return (
    <FormGroup label='카드비밀번호'>
      <div className='password-container'>
        <Input
          type='password'
          name='firstPassword'
          value={cardPassword.firstPassword}
          variant={UI_VARIANT.GHOST}
          onChange={onChangePassword}
          maxLength={1}
        />
        <Input
          type='password'
          name='secondPassword'
          value={cardPassword.secondPassword}
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
