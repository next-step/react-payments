import { UI_VARIANT } from 'constants/ui.constant'
import React, { ChangeEvent } from 'react'
import { FormGroup } from '../FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/atoms/Input'
import { REGEX } from 'constants/regex'

const validateCardOwner = (cardOwner: string) => {
  return cardOwner.length !== 30
}

export const CardOwnerField = () => {
  const { state, handleChange } = useFormContext()
  const onChangeCardOwner = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_ENG, '')

    handleChange({
      newValue: convertValue,
      key: 'cardOwner',
      innerKey: name,
      error: validateCardOwner(convertValue),
    })
  }
  return (
    <FormGroup label='카드 소유자(선택)'>
      <Input
        type='text'
        name='cardOwner'
        value={state.cardOwner.value}
        variant={UI_VARIANT.GHOST}
        maxLength={30}
        onChange={onChangeCardOwner}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요'
      />
    </FormGroup>
  )
}

export default CardOwnerField
