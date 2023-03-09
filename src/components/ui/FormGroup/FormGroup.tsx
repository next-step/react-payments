import React, { PropsWithChildren } from 'react'
import './FormGroup.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type FormGroupProps = {
  label?: string
  isInvalid?: boolean
  errorMessage?: string
}

const FormGroup: React.FC<PropsWithChildren<FormGroupProps>> = ({
  label,
  errorMessage,
  isInvalid,
  children,
}) => {
  return (
    <label className='input-container'>
      {label && <span className='input-title'>{label}</span>}
      <div className='input-box'>
        <span className='input'>{children}</span>
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
