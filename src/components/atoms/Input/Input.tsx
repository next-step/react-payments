import { UI_VARIANT } from 'constants/ui.constant'
import { UiVariant } from 'models/ui.model'
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import './Input.css'

type InputProps = {
  placeholder?: string
  onChange: (e: ChangeEvent) => void
  /** Input 타입으로 html attribute 타입 호환 */
  type: HTMLInputTypeAttribute
  /** 컨트롤할 input의 값 */
  value: string
  /** 컨트롤할 input의 이름*/
  name: string
  /** Input 종류 */
  variant?: UiVariant
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  onChange,
  type,
  value,
  name,
  variant = UI_VARIANT.FILL,
}) => {
  return (
    <input
      className={`input-basic ${variant}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  )
}

export default Input
