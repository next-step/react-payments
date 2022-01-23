import { useState } from 'react'

export const useFieldSet = (initialValue: any) => {
  const [fieldsetValue, setFieldset] = useState(initialValue)
  const handleFieldSet = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFieldset({ ...fieldsetValue, [name]: value })
  }
  return [fieldsetValue, handleFieldSet] as const
}
