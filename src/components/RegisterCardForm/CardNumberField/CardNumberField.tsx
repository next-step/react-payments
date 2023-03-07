import { Input } from 'components/ui/Input'
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
      newValue: convertValue,
      key: 'cardNumbers',
      innerKey: name,
      error: validateCardNumber(convertValue),
    })
  }

  return (
    <FormGroup label={CARD_NUMBER_FORM_TEXT.LABEL}>
      <div className='card-number-container'>
        <Input
          type='text'
          name='firstNumber'
          value={state.cardNumbers.firstNumber.value}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.firstNumber.error === false && <span>-</span>}
        <Input
          type='text'
          name='secondNumber'
          value={state.cardNumbers.secondNumber.value}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.secondNumber.error === false && <span>-</span>}
        <Input
          type='password'
          name='thridNumber'
          value={state.cardNumbers.thridNumber.value}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
        {state.cardNumbers.thridNumber.error === false && <span>-</span>}
        <Input
          type='password'
          name='fourthNumber'
          value={state.cardNumbers.fourthNumber.value}
          variant={UI_VARIANT.GHOST}
          maxLength={4}
          onChange={onChangeCardNumber}
        />
      </div>
    </FormGroup>
  )
}

export default CardNumberField
