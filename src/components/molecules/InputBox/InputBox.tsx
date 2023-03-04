import React, { PropsWithChildren } from 'react'
import './InputBox.css'

type InputBoxProps = {
  label: string
  pattern?: RegExp
  errorCode?: string
}

const InputBox: React.FC<PropsWithChildren<InputBoxProps>> = ({
  label,
  children,
}) => {
  return (
    <label className='input-container'>
      <span className='input-title'>{label}</span>
      <div className='input-box'>{children}</div>
    </label>
  )
}

export default InputBox
