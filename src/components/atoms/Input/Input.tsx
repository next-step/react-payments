import React, { ChangeEvent } from 'react'
import './Input.css'

// 정리필요
type InputProps = {
  placeholder?: string
  onChange: (e: ChangeEvent) => void
  width?: string
  type: string
  value: string
  name: string
  maxLength?: number
  isRequire?: boolean
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  onChange,
  width,
  type,
  value,
  name,
  maxLength,
}) => {
  return (
    <input
      className='input-basic'
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent) => onChange(e)}
      name={name}
      maxLength={maxLength}
      style={{ width }}
    />
  )
}

export default Input
