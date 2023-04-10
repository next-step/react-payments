import { ReactElement, ComponentType } from 'react'

export type ModalState = {
  element: ReactElement
  props?: { [key: string]: unknown }
}
export type ModalClose = {
  element: ComponentType
}
export type ModalDispatch = {
  open: ({ element, props }: ModalState) => void
  close: ({ element }: ModalClose) => void
}
