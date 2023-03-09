import { UI_VARIANT, UiVariant } from 'constants/ui'
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react'
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
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({
  placeholder = '',
  onChange,
  type,
  value,
  name,
  variant = UI_VARIANT.FILL,
  ...props
}) => {
  return (
    <input
      className={`input-basic ${variant}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      {...props}
    />
  )
}

export default Input
