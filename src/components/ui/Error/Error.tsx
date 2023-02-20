import React from 'react'
import { MdError } from 'react-icons/md'
import './Error.css'

type ErrorProps = {
  message: string
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className='error-container'>
      <MdError />
      <p className='error-message'>{message}</p>
    </div>
  )
}

export default Error
