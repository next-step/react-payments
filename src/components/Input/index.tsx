import React, { useState } from 'react'

interface InputProps {
  type: string
  inputTextLengthMax: number
}

const Input = ({ type, inputTextLengthMax }: InputProps) => {
  const [value, setValue] = useState('')
  return <input type={type} />
}

export default Input
