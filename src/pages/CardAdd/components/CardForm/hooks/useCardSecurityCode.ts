import { ChangeEvent } from 'react'

const useCardSecurityCode = ({ handleChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange({ value: event.target.value })
  }
  return { handleInputChange }
}

export default useCardSecurityCode
