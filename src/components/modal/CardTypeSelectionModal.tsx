import { useRef, useContext } from 'react'

import { CardTypeButton } from '@/components/button'
import { BottomSheetContainer, DarkOverlay } from '@/components/modal'
import { CARD_TYPES } from '@/contants'
import { CardDispatchContext } from '@/contexts/card'
import { CardBackgoundColor, CardColor } from '@/domain'
import { useModal, useOutsideClick } from '@/hooks'

interface CheckModalProps {
  onAfterModalClose?: () => void
}

const CardTypeSelectionModal = ({ onAfterModalClose }: CheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const cardDispatch = useContext(CardDispatchContext)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: CardTypeSelectionModal })
    if (onAfterModalClose) {
      onAfterModalClose()
    }
  })

  const selectCardType = (name: string, bg: CardBackgoundColor, color: CardColor) => {
    cardDispatch({ type: 'SET_CARD_TYPE', payload: { name, bg, color } })
    closeModal({ element: CardTypeSelectionModal })

    if (onAfterModalClose) {
      onAfterModalClose()
    }
  }

  return (
    <DarkOverlay>
      <div ref={modalRef}>
        <BottomSheetContainer>
          <div className="grid-repeat-4">
            {CARD_TYPES.map(({ name, bg, color }) => (
              <CardTypeButton
                key={name}
                name={name}
                backgroundColor={bg}
                color={color}
                selectCardType={selectCardType}
              />
            ))}
          </div>
        </BottomSheetContainer>
      </div>
    </DarkOverlay>
  )
}

export default CardTypeSelectionModal
