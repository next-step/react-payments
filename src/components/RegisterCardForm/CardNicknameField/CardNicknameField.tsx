import { UI_VARIANT } from 'constants/ui'
import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import './CardNicknameField.css'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'

const CardNicknameField = () => {
  const { state, handleChange } = useFormContext()

  const onChangeCardNickname = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    handleChange({
      value: value,
      key: PAYMENT_CARD_FORM_KEYS.CARD_NICKNAME,
      // error: validateCardOwner(convertValue),
    })
  }

  return (
    <FormGroup>
      <div className='card-nickname-field-container'>
        <Input
          type='text'
          name='cardNickname'
          value={state.cardNickname}
          variant={UI_VARIANT.OUTLINE}
          maxLength={10}
          onChange={onChangeCardNickname}
          placeholder='카드 별칭 (선택)'
        />
      </div>
    </FormGroup>
  )
}

export default CardNicknameField
