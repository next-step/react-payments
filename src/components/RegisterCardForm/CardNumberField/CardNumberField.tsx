import { Input } from 'components/ui/Input'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'
import { REGEX } from 'constants/regex'
import { UI_VARIANT } from 'constants/ui'

import { useFormContext } from 'context/FormContext'
import React, { ChangeEvent } from 'react'
import { FormGroup } from '../../ui/FormGroup'
import './CardNumberField.css'

const CARD_NUMBER_FORM_TEXT = {
  LABEL: '카드 번호',
}

const validateCardNumber = (cardNumber: string) => {
  return cardNumber.length !== 4
}

const CardNumberField: React.FC = () => {
  const { state, handleChange } = useFormContext()

  const onChangeCardNumber = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_NUMBER, '')

    handleChange({
      key: PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS,
      name,
      value: convertValue,
    })
  }

  return (
    <FormGroup label={CARD_NUMBER_FORM_TEXT.LABEL}>
      <div className='card-number-container'>
        <Input
          type='text'
          name='firstNumber'
          value={state.cardNumbers.firstNumber}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.firstNumber?.length === 4 && <span>-</span>}
        <Input
          type='text'
          name='secondNumber'
          value={state.cardNumbers.secondNumber}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.secondNumber?.length === 4 && <span>-</span>}
        <Input
          type='password'
          name='thridNumber'
          value={state.cardNumbers.thridNumber}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.thridNumber?.length === 4 && <span>-</span>}
        <Input
          type='password'
          name='fourthNumber'
          value={state.cardNumbers.fourthNumber}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
      </div>
    </FormGroup>
  )
}

export default CardNumberField
