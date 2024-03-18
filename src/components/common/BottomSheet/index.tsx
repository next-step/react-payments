import { css } from '@emotion/css'
import { MouseEventHandler, PropsWithChildren } from 'react'

type BottomSheetProps = {
  isOpen: boolean
  close: () => void
}

export const BottomSheet = ({
  isOpen = false,
  close,
  children
}: PropsWithChildren<BottomSheetProps>) => {
  const bottomSheetStyle = css`
    display: ${isOpen ? 'flex' : 'none'};
  `

  const handleClose: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget) {
      close()
    }
  }

  return (
    <div className={`modal-dimmed ${bottomSheetStyle}`} onClick={handleClose}>
      <div className="modal">{children}</div>
    </div>
  )
}
