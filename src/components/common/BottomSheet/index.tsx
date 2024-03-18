import { css } from '@emotion/css'
import { MouseEventHandler, PropsWithChildren } from 'react'

type BottomSheetProps = {
  isOpen: boolean
  onClose: () => void
}

export const BottomSheet = ({
  isOpen = false,
  onClose,
  children
}: PropsWithChildren<BottomSheetProps>) => {
  const bottomSheetStyle = css`
    display: ${isOpen ? 'flex' : 'none'};
  `

  const handleClose: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={`modal-dimmed ${bottomSheetStyle}`} onClick={handleClose}>
      <div className="modal">{children}</div>
    </div>
  )
}
