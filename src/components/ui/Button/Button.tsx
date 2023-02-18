import { UiSize, UiType, UiVariant } from 'models/ui.model'
import React from 'react'
import './Button.css'

type ButtonProps = {
  size: UiSize
  variant: UiVariant
  type: UiType
  onClick: () => void
  children: React.ReactNode
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ size, variant, onClick, type, children, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`button ${size} ${variant} ${type} ${isDisabled ? 'disabled' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
