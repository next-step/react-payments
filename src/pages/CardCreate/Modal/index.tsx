import React from 'react'
import { MouseEventHandler, useCallback, useRef } from 'react'
import { BackgroundColorAccordingToStartsWith } from '../../../components/Card'
import { CardType } from '../../../components/Form'
import Modal from '../../../components/Layout/Modal'
import Styled from './index.style'

const CardCreateModal = ({
  isOpen,
  setIsOpen,
  setCardType,
}: CardCreateModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const cardTypes = Object.keys(
    BackgroundColorAccordingToStartsWith
  ) as CardType[]

  const line1 = cardTypes.slice(0, 4)
  const line2 = cardTypes.slice(4)

  const onClickModalOutside: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === modalRef.current) {
        setIsOpen(false)
      }
    },
    [modalRef, setIsOpen]
  )

  const onColorCircleClicked = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <Modal isOpen={isOpen} onClose={() => console.log('hi')}>
      <Styled.Container ref={modalRef} onClick={onClickModalOutside}>
        <Styled.ModalContainer>
          <Styled.ContentContainer>
            <Styled.ContentLineContainer>
              {line1.map((cardType) => (
                <TouchableCardColorPicker
                  key={cardType}
                  cardType={cardType}
                  setCardType={setCardType}
                  onClicked={onColorCircleClicked}
                />
              ))}
            </Styled.ContentLineContainer>
            <Styled.ContentLineSpace />
            <Styled.ContentLineContainer>
              {line2.map((cardType) => (
                <TouchableCardColorPicker
                  key={cardType}
                  cardType={cardType}
                  setCardType={setCardType}
                  onClicked={onColorCircleClicked}
                />
              ))}
            </Styled.ContentLineContainer>
          </Styled.ContentContainer>
        </Styled.ModalContainer>
      </Styled.Container>
    </Modal>
  )
}

interface CardCreateModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setCardType: React.Dispatch<React.SetStateAction<CardType | undefined>>
}

interface TouchableCardColorPickerProps {
  cardType: CardType
  setCardType: React.Dispatch<React.SetStateAction<CardType | undefined>>
  onClicked: () => void
}

type TouchableCardColorPickerAreEqualsType = (
  prevProps: Readonly<React.PropsWithChildren<TouchableCardColorPickerProps>>,
  nextProps: Readonly<React.PropsWithChildren<TouchableCardColorPickerProps>>
) => boolean

const TouchableCardColorPickerAreEquals: TouchableCardColorPickerAreEqualsType =
  (prev, curr) => prev.cardType === curr.cardType
const TouchableCardColorPicker = React.memo(
  ({ cardType, setCardType, onClicked }: TouchableCardColorPickerProps) => {
    const onClickColorCircle = useCallback(() => {
      setCardType(cardType)
      onClicked()
    }, [cardType, onClicked, setCardType])

    return (
      <Styled.CardTypeContainer>
        <Styled.CardTypeColorCircle
          cardType={cardType}
          onClick={onClickColorCircle}
        />
        <Styled.CardTypeText>{cardType} 카드</Styled.CardTypeText>
      </Styled.CardTypeContainer>
    )
  },
  TouchableCardColorPickerAreEquals
)

export default CardCreateModal
