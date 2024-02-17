import { useState, useMemo, PropsWithChildren } from 'react'

import { ModalStateContext, ModalDispatchContext } from '@/contexts/modal'
import { ModalState } from '@/types'

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [openedModal, setOpenedModal] = useState<ModalState | null>(null)

  const open = ({ element, props }: ModalState) => {
    setOpenedModal({ element, props })
  }
  const close = () => {
    setOpenedModal(null)
  }

  const dispatch = useMemo(() => ({ open, close }), [])

  return (
    <ModalStateContext.Provider value={openedModal}>
      <ModalDispatchContext.Provider value={dispatch}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}

export default ModalProvider
