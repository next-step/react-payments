import { useContext, ChangeEvent } from 'react'

import { VirtualKeyboard } from '@/components/modal'
import { ModalStateContext } from '@/contexts/modal'
import { useModal } from '@/hooks'
import { CardSecurityCodeProps } from '@/pages/CardAdd/components/CardForm/types'

const useCardSecurityCode = ({ handleChange, securityCodeRef, nextRef }: CardSecurityCodeProps) => {
  const { openModal, closeModal } = useModal()
  const openedModal = useContext(ModalStateContext)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange({ value: event.target.value })
  }

  const handleSecurityCode = (value: string) => {
    if (securityCodeRef.current) {
      if (value === 'Delete') {
        securityCodeRef.current.value = securityCodeRef.current.value.slice(0, -1)
        return
      }
      if (securityCodeRef.current.value.length >= 3) return
      securityCodeRef.current.value += value
    } else {
      securityCodeRef.current.value = value
    }

    if (securityCodeRef.current.value.length >= 3) {
      closeModal({ element: VirtualKeyboard })
      nextRef.current?.focus()
    }

    handleChange({ value: securityCodeRef.current.value })
  }

  const openVirtualKeyboard = () => {
    if (openedModal) return
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleSecurityCode(value)} />,
    })
  }
  return { handleInputChange, openVirtualKeyboard }
}

export default useCardSecurityCode
