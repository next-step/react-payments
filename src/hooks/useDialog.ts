import { useState } from 'react'

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen)
  }
}
