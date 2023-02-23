import { UI_TEXT_ALIGN, UI_VARIANT } from 'constants/ui.constant'
import { UiVariant, UiTextAlign } from 'models/ui.model'
import React, { ChangeEvent } from 'react'
import './Input.css'

// 정리필요
type InputProps = {
  placeholder?: string
  onChange: (e: ChangeEvent) => void
  /** Input width 값으로 단위도 함께 설정가능 */
  width?: string
  /** Input 타입으로 html attribute 타입 호환 */
  type: string
  /** 컨트롤할 input의 값 */
  value: string
  /** 컨트롤할 input의 이름*/
  name: string
  /** 최대 글자수 */
  maxLength?: number
  /** 필수값 유무 */
  isRequire?: boolean
  /** Input 종류 */
  variant?: UiVariant
  /** Input text 정렬 */
  textAlign?: UiTextAlign
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  onChange,
  width,
  type,
  value,
  name,
  maxLength,
  variant = UI_VARIANT.FILL,
  textAlign = UI_TEXT_ALIGN.CENTER,
}) => {
  return (
    <input
      className={`input-basic ${variant}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent) => onChange(e)}
      name={name}
      maxLength={maxLength}
      style={{ width, textAlign }}
    />
  )
}

export default Input
