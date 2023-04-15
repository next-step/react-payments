import { useRef } from 'react'

import { BottomSheetContainer } from '@/components/modal'
import { getRandomVirtualDigits } from '@/domain'
import { useModal, useOutsideClick } from '@/hooks'

interface VirtualKeyboardProps {
  onKeyPress: (value: string) => void
}

const VirtualKeyboard = ({ onKeyPress }: VirtualKeyboardProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: VirtualKeyboard })
  })

  return (
    <div ref={modalRef}>
      <BottomSheetContainer>
        <div className="grid-repeat-3 w-100 px-5">
          {getRandomVirtualDigits().map((digit) => (
            <button key={digit} type="button" className="digit-button" onClick={() => onKeyPress(String(digit))}>
              {digit}
            </button>
          ))}
        </div>
      </BottomSheetContainer>
    </div>
  )
}

export default VirtualKeyboard
