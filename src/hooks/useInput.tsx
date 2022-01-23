import { useState } from 'react'

export const useInput = (initialValue = '') => {
  const [inputValue, setInput] = useState<string>(initialValue)
  const handleInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    setInput(value)
  return [inputValue, handleInput] as const
}
