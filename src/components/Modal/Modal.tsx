import { createPortal } from 'react-dom'

interface Props {
  close: boolean
  children: React.ReactNode
}

export default function Modal({ close = true, children }: Props) {
  if (close) return null
  return createPortal(<>{children}</>, document.getElementById('modal')!)
}
