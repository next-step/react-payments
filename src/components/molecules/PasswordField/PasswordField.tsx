import React from 'react'
import { UI_VARIANT } from 'constants/ui.constant'
import { FormGroup } from '../FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/atoms/Input'

const PasswordField = () => {
  const { state, handleChange } = useFormContext()
  return (
    <FormGroup label='카드비밀번호'>
      <Input
        type='text'
        name='firstPassword'
        value={state.cardOwner.state}
        variant={UI_VARIANT.GHOST}
        onChange={handleChange}
      />
      <Input
        type='text'
        name='secondPassword'
        value={state.cardOwner.state}
        variant={UI_VARIANT.GHOST}
        onChange={handleChange}
      />
      <span>⦁</span>
      <span>⦁</span>
    </FormGroup>
  )
}

export default PasswordField
