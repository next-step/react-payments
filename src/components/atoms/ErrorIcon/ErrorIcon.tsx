import React from 'react'
import { MdError } from 'react-icons/md'
import './ErrorIcon.css'

type ErrorIconProps = {
  message: string
}

const ErrorIcon: React.FC<ErrorIconProps> = ({ message }) => {
  return (
    <div className='error-container'>
      <MdError />
      <p className='error-message'>{message}</p>
    </div>
  )
}

export default ErrorIcon
