import { UI_VARIANT } from 'constants/ui.constant'
import React from 'react'
import { FormGroup } from '../FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/atoms/Input'

const CVCField = () => {
  const { state, handleChange } = useFormContext()
  return (
    <FormGroup label='카드 소유자(선택)'>
      <Input
        type='text'
        name='cardOwner'
        value={state.cardOwner.state}
        variant={UI_VARIANT.GHOST}
        onChange={handleChange}
      />
    </FormGroup>
  )
}

export default CVCField
