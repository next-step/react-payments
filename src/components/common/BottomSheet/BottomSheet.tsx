import { ReactNode } from 'react'

type BottomSheetProps = {
  children: ReactNode
}

export const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <div className="modal-dimmed">
      <div className="modal">{children}</div>
    </div>
  )
}
