import { ChangeEvent, useState } from 'react'

export const useOwnerName = (valueLengthMax: number) => {
  const [ownerName, setOwnerName] = useState('')

  const ownerNameValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length > valueLengthMax) return
    setOwnerName(value)
  }

  const validation = ownerName !== ''

  return { ownerName, ownerNameValueHandler, validation }
}
