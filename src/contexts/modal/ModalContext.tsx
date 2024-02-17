import { createContext } from 'react'

import { ModalState, ModalDispatch } from '@/types'

export const ModalStateContext = createContext<ModalState | null>(null)
export const ModalDispatchContext = createContext<ModalDispatch>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  open: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
})
