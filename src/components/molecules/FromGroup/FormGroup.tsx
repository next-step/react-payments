import React, { ChangeEvent } from 'react'
import { InputBox } from 'components/molecules/InputBox'
import { Input } from 'components/atoms/Input'
import { CardType } from 'models/card.model'
import './FormGroup.css'
import { UiVariant } from 'models/ui.model'

type FormGroupProps = {
  label: string
  name: keyof CardType
  type: string
  maxLength: number
  isRequire: boolean
  onChange: (e: ChangeEvent) => void
  width?: string
  placeholder?: string
  isMarkValueLength?: boolean
  value: string
  variant?: UiVariant
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <InputBox label={props.label}>
      {props.isMarkValueLength && (
        <span className='value-length-box'>
          {props.value.length}/{props.maxLength}
        </span>
      )}
      <Input {...props} />
    </InputBox>
  )
}

export default FormGroup
