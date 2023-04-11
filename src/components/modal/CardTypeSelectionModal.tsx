import { useRef, useContext } from 'react'

import { CardTypeButton } from '@/components/button'
import { BottomSheetContainer } from '@/components/modal'
import { CardDispatchContext } from '@/contexts/card'
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
  })

  const selectCardType = (name: string, bg: string, color: string) => {
    // Todo: onAfterModalClose에서 focus 다시 가져오도록
    // onAfterModalClose()
    // 전역 카드 상태에 카드사와 카드색상을 저장
    cardDispatch({ type: 'SET_CARD_TYPE', payload: { name, bg, color } })
    closeModal({ element: CardTypeSelectionModal })
  }

  return (
    <div ref={modalRef}>
      <BottomSheetContainer>
        <div className="grid-repeat-4">
          {CARD_TYPES.map(({ name, bg, color }) => (
            <CardTypeButton key={name} name={name} bg={bg} color={color} selectCardType={selectCardType} />
          ))}
        </div>
      </BottomSheetContainer>
    </div>
  )
}

export default CardTypeSelectionModal

const CARD_TYPES = [
  {
    name: '하얀카드',
    color: '#000000',
    bg: '#F5F5F5',
  },
  {
    name: '파란카드',
    color: '#ffffff',
    bg: '#162bb1',
  },
  {
    name: '빨간카드',
    color: '#ffffff',
    bg: '#932929',
  },
  {
    name: '초록카드',
    color: '#000000',
    bg: '#54cb25',
  },
  {
    name: '에메랄드카드',
    color: '#ffffff',
    bg: '#20d0ad',
  },
  {
    name: '분홍카드',
    color: '#ffffff',
    bg: '#d320c7',
  },
  {
    name: '보라카드',
    color: '#ffffff',
    bg: '#7c1ddb',
  },
  {
    name: '주황카드',
    color: '#ffffff',
    bg: '#e1860f',
  },
]
