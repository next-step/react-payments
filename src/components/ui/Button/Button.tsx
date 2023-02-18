import { UiSize, UiVariant } from 'models/ui.model'
import React from 'react'
import './Button.css'

type ButtonProps = {
  size: UiSize
  variant: UiVariant
  color: string
  onClick: () => void
  children: React.ReactNode
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ size, variant, onClick, color, children, isDisabled }) => {
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
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`button ${size} ${variant} ${isDisabled ? 'disabled' : ''}`}
      style={_variantStyle[variant]}
    >
      {children}
    </button>
  )
}

export default Button
