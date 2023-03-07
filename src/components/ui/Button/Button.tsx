import { UiSize, UiVariant } from 'constants/ui'
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './Button.css'

type ButtonProps = {
  /** 버튼 사이즈 */
  size: UiSize
  /** 버튼 종류 */
  variant: UiVariant
  /** 버튼 컬러 */
  color: string
  /** 클릭 이벤트 */
  onClick?: () => void
  /** 버튼 클릭 이벤트 설정 유무 */
  isDisabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  size,
  variant = 'fill',
  onClick,
  color,
  children,
  isDisabled = false,
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

  const variantStyle = {
    fill: fillStyle,
    outline: outlineStyle,
    ghost: ghostStyle,
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`button ${size} ${variant} ${isDisabled ? 'disabled' : ''}`}
      style={variantStyle[variant]}
    >
      {children}
    </button>
  )
}

export default Button
