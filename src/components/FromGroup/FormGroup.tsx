import React, { ChangeEvent } from 'react'
import { InputBox } from 'components/ui/InputBox'
import { Input } from 'components/ui/Input'
import { CardType } from 'models/card.model'

type FormGroupProps = {
  label: string
  name: keyof CardType
  type: string
  maxLength: number
  isRequire: boolean
  onChange: (e: ChangeEvent, key: keyof CardType) => void
  width?: string
  placeholder?: string
  value: string
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <InputBox label={props.label}>
      <Input {...props} />
    </InputBox>
  )
}

export default FormGroup
