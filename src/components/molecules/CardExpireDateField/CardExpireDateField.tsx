import { Input } from 'components/atoms/Input'
import { UI_VARIANT } from 'constants/ui.constant'
import { useFormContext } from 'context/FormContext'
import React, { ChangeEvent } from 'react'
import { FormGroup } from '../FormGroup'
import './CardExpireDateField.css'

const CARD_EXPIRE_DATE_TEXT = {
  LABEL: '만료일',
}

// const validateCardExpireDate = () => {}

const CardExpireDateField: React.FC = () => {
  const { state, handleChange } = useFormContext()
  const { cardExpireDate } = state

  const onChangeExpireDate = (e: ChangeEvent) => {
    console.log(e)
  }

  return (
    <FormGroup label={CARD_EXPIRE_DATE_TEXT.LABEL}>
      <div className='card-expire-date-container'>
        <Input
          type='text'
          name='month'
          value={cardExpireDate.month.value}
          variant={UI_VARIANT.GHOST}
          onChange={onChangeExpireDate}
        />
        <span>/</span>
        <Input
          type='text'
          name='year'
          value={cardExpireDate.year.value}
          variant={UI_VARIANT.GHOST}
          onChange={onChangeExpireDate}
        />
      </div>
    </FormGroup>
  )
}

export default CardExpireDateField
