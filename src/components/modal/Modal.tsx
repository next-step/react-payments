import { useContext } from 'react'

import { DarkOverlay } from '@/components/modal'
import { ModalStateContext } from '@/contexts/modal'

const Modal = () => {
  const openedModal = useContext(ModalStateContext)
  if (openedModal) return <DarkOverlay>{openedModal.element}</DarkOverlay>
  return <></>
}

export default Modal
