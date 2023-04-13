import { useContext } from 'react'

import { ModalStateContext } from '@/contexts/modal'

const Modal = () => {
  const openedModal = useContext(ModalStateContext)
  if (openedModal) return openedModal.element
  return <></>
}

export default Modal
