import { useState } from 'react'

export const useInput = (initialValue = '') => {
  const [inputValue, setInput] = useState<string>(initialValue)
  const handleInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    setInput(value)
  return [inputValue, handleInput] as const
}

export const useFieldSet = (initialValue: any) => {
  const [fieldsetValue, setFieldset] = useState(initialValue)
  const handleFieldSet = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFieldset({ ...fieldsetValue, [name]: value })
  }
  return [fieldsetValue, handleFieldSet] as const
}
