import { UI_VARIANT } from 'constants/ui'
import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import { REGEX } from 'constants/regex'
import './CVCField.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'

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
      value: convertValue,
      key: PAYMENT_CARD_FORM_KEYS.CARD_PINCODE,
      // error: validateCVC(convertValue),
    })
  }

  return (
    <FormGroup label='보안코드(CVC/CVV)'>
      <div className='cvc-container'>
        <Input
          type='password'
          name='cardPinCode'
          value={cardPinCode}
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
