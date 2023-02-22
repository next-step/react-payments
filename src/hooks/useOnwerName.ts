import { ChangeEvent, useState } from 'react'

export const useOwnerName = (valueLengthMax: number) => {
  const [onwerName, setOnwerName] = useState('')
  const onwerNameValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length > valueLengthMax) return
    setOnwerName(value)
  }
  return { onwerName, onwerNameValueHandler }
}
