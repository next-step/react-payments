import { UI_VARIANT } from 'constants/ui.constant'
import React, { ChangeEvent } from 'react'
import { FormGroup } from '../FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/atoms/Input'
import { REGEX } from 'constants/regex'

const validateCVC = (cvc: string) => {
  return cvc.length !== 3
}

const CVCField = () => {
  const { state, handleChange } = useFormContext()
  const { cardPinCode } = state
  const onChangeCVC = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_NUMBER, '')

    handleChange({
      newValue: convertValue,
      key: name,
      error: validateCVC(convertValue),
    })
  }

  return (
    <FormGroup label='보안코드(CVC/CVV)'>
      <Input
        type='password'
        name='cardPinCode'
        value={cardPinCode.state}
        variant={UI_VARIANT.GHOST}
        onChange={onChangeCVC}
        maxLength={3}
      />
    </FormGroup>
  )
}

export default CVCField
