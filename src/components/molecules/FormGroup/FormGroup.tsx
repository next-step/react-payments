import React from 'react'
import './FormGroup.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type FormGroupProps = {
  label: React.ReactNode | string
  input: React.ReactNode
  isInvalid: boolean
  errorMessage?: string
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  input,
  errorMessage,
  isInvalid,
}) => {
  return (
    <label className='input-container'>
      <span className='input-title'>{label}</span>
      <div className='input-box'>
        <span className='input'>{input}</span>
        {errorMessage && isInvalid && (
          <span className='error-message'>
            <AiOutlineCloseCircle />
            error message
          </span>
        )}
      </div>
    </label>
  )
}

export default FormGroup
