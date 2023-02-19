import React from 'react'
import './InputBox.css'

type InputBoxProps = {
  label: string
  pattern?: RegExp
  errorCode?: string
  children: React.ReactNode
}

const InputBox: React.FC<InputBoxProps> = ({ label, children }) => {
  return (
    <label className='input-container'>
      <span className='input-title'>{label}</span>
      <div className='input-box'>{children}</div>
    </label>
  )
}

export default InputBox
