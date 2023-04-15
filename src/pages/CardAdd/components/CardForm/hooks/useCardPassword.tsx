import { ChangeEvent } from 'react'

import { VirtualKeyboard } from '@/components/modal'
import { useModal } from '@/hooks'
import { CardPasswordProps, CardPasswordOrder } from '@/pages/CardAdd/components/CardForm/types'

const useCardPassword = ({ passwordRef, handleChange, onFocusChange }: CardPasswordProps) => {
  const { openModal, closeModal } = useModal()

  const handleSecurityCode = (order: CardPasswordOrder, value: string) => {
    if (passwordRef[order].current) {
      if (value === 'Delete') {
        passwordRef[order].current.value = passwordRef[order].current.value.slice(0, -1)
        return
      }
      if (passwordRef[order].current.value.length >= 1) return
      passwordRef[order].current.value += value
    } else {
      passwordRef[order].current.value = value
    }

    if (passwordRef[order].current.value.length >= 1) {
      onFocusChange('second')
      openVirtualKeyboard('second')
    }

    if (passwordRef[order].current.value.length >= 1 && order === 'second') {
      closeModal({ element: VirtualKeyboard })
    }

    handleChange({ order, value: passwordRef[order].current.value })
  }

  const openVirtualKeyboard = (order: CardPasswordOrder) => {
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleSecurityCode(order, value)} />,
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'first':
        handleChange({ value, order: name })
        break
      case 'second':
        handleChange({ value, order: name })
        break
      default:
        throw new Error('useCardPassword: Invalid name')
    }
  }
  return { handleInputChange, openVirtualKeyboard }
}

export default useCardPassword
