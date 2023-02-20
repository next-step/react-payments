import React, { ChangeEvent } from 'react'
import { InputBox } from 'components/ui/InputBox'
import { Input } from 'components/ui/Input'
import { CardType } from 'models/card.model'
import './FormGroup.css'
import { kMaxLength } from 'buffer'

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
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <InputBox label={props.label}>
      {props.isMarkValueLength && (
        <span className='value-length-box'>
          {props.value.length}/{props.maxLength}
        </span>
      )}
      {props.name !== 'password' ? (
        <Input {...props} />
      ) : (
        <div>
          <Input {...props} />
          <Input {...props} />
          <span>o</span>
          <span>o</span>
        </div>
      )}

      {/* {props.name === 'password' && <Input {...props} />} */}
    </InputBox>
  )
}

export default FormGroup
