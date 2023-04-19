import { useContext, ChangeEvent } from 'react'

import { CardTypeSelectionModal, VirtualKeyboard } from '@/components/modal'
import { ModalStateContext } from '@/contexts/modal'
import { useModal } from '@/hooks'
import { CardNumbersProps, CardNumbersOrder } from '@/pages/CardAdd/components/CardForm/types'
import { useCardInfo } from '@/pages/hooks'

const useCardNumbers = ({ numbersRef, nextRef, onFocusChange }: CardNumbersProps) => {
  const { handleNumber: handleChange } = useCardInfo()
  const { openModal, closeModal } = useModal()
  const openedModal = useContext(ModalStateContext)

  // Todo: 리팩토링 필요. 함수 분리
  const handleNumber = (order: CardNumbersOrder, value: string) => {
    if (numbersRef[order].current) {
      if (value === 'Delete') {
        numbersRef[order].current.value = numbersRef[order].current.value.slice(0, -1)
        return
      }
      if (numbersRef[order].current.value.length >= 4) {
        return
      }
      numbersRef[order].current.value += value
    } else {
      numbersRef[order].current.value = value
    }

    if (numbersRef[order].current.value.length >= 4) {
      onFocusChange('fourth')
      openVirtualKeyboard('fourth')
    }

    if (numbersRef[order].current.value.length >= 4 && order === 'fourth') {
      closeModal({ element: VirtualKeyboard })
      nextRef.current?.focus()
    }

    handleChange({ order, value: numbersRef[order].current.value })
  }

  const openVirtualKeyboard = (order: CardNumbersOrder) => {
    if (openedModal) return
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleNumber(order, value)} />,
    })
  }

  const onAfterModalClose = () => {
    onFocusChange('third')
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleNumber('third', value)} />,
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
        if (value.length === 4) {
          openModal({ element: <CardTypeSelectionModal onAfterModalClose={onAfterModalClose} /> })
        }
        break
      case 'third':
        handleChange({ value, order: name })
        break
      case 'fourth':
        handleChange({ value, order: name })
        break
      default:
        throw new Error('useCardNumbers: Invalid name')
    }
  }

  return {
    handleInputChange,
    openVirtualKeyboard,
  }
}

export default useCardNumbers
