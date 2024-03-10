import { css } from '@emotion/css'
import { ReactNode } from 'react'

type BottomSheetProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children
}: BottomSheetProps) => {
  const bottomSheetStyle = css`
    display: ${isOpen ? 'flex' : 'none'};
  `

  const handleClose = () => {
    onClose()
  }

  return (
    <div className={`modal-dimmed ${bottomSheetStyle}`} onClick={handleClose}>
      <div className="modal">{children}</div>
    </div>
  )
}
