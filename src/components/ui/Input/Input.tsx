import { UiSize, UiVariant } from 'models/ui.model'
import React from 'react'
import './Input.css'

type InputProps = {
  placeholdaer: string
  size: UiSize
  variant: UiVariant
  onChange: () => void
  color: string
  bgColor?: string
  width?: string
  height?: string
  isDisabled?: boolean
}

const Input: React.FC<InputProps> = ({
  placeholdaer = '',
  size,
  variant,
  width = '150px',
  height = '30px',
  bgColor,
  color,
  isDisabled = false,
  onChange,
}) => {
  const fillStyle = {
    backgroundColor: color,
    color: '#fff',
    border: 0,
  }

  const outlineStyle = {
    backgroundColor: 'transparent',
    color,
    border: `1px solid ${color}`,
  }

  const ghostStyle = {
    border: 0,
    backgroundColor: 'transparent',
    color,
  }

  const _variantStyle = {
    fill: fillStyle,
    outline: outlineStyle,
    ghost: ghostStyle,
  }
  return (
    <input
      className={`input ${size} ${isDisabled ? 'disabled' : ''}`}
      style={{
        ..._variantStyle[variant],
        width,
        height,
        color,
        ...(bgColor ? { backgroundColor: bgColor } : {}),
      }}
      placeholder={placeholdaer}
      disabled={isDisabled}
      onChange={onChange}
    />
  )
}

export default Input
