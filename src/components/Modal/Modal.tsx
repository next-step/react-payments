import { createPortal } from 'react-dom'

interface Props {
  isOpen: boolean
  children: React.ReactNode
}

export default function Modal({ isOpen = false, children }: Props) {
  if (!isOpen) return null
  return createPortal(<>{children}</>, document.getElementById('modal')!)
}
