import React, { ReactNode } from 'react'

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: ReactNode
}) => {
  return (
    <div className="button-box">
      <button type="button" className="button-text" onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
export default Button
