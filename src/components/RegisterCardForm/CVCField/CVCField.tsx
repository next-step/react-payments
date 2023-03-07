import { UI_VARIANT } from 'constants/ui.constant'
import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import { REGEX } from 'constants/regex'
import './CVCField.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

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
      <div className='cvc-container'>
        <Input
          type='password'
          name='cardPinCode'
          value={cardPinCode.state}
          variant={UI_VARIANT.GHOST}
          onChange={onChangeCVC}
          maxLength={3}
        />
        <span className='cvc-input-icon'>
          <AiOutlineQuestionCircle />
        </span>
      </div>
    </FormGroup>
  )
}

export default CVCField
