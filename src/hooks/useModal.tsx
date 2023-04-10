import { useContext } from 'react'

import { ModalDispatchContext } from '@/contexts/modal'
import { ModalState, ModalClose } from '@/types'

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext)
  const openModal = (props: ModalState) => open({ ...props })
  const closeModal = ({ element }: ModalClose) => close({ element })

  return {
    openModal,
    closeModal,
  }
}
