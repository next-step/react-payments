import { BackgroundColorAccordingToStartsWith } from '../../../components/Card'
import { CardType } from '../../../components/Form'
import Modal from '../../../components/Layout/Modal'
import Styled from './index.style'
interface CardCreateModalProps {
  isOpen: boolean
}

const TouchableCardColorPicker = ({ type }: { type: CardType }) => {
  return (
    <Styled.CardTypeContainer>
      <Styled.CardTypeColorCircle cardType={type} />
      <Styled.CardTypeText>{type} 카드</Styled.CardTypeText>
    </Styled.CardTypeContainer>
  )
}

const CardCreateModal = ({ isOpen }: CardCreateModalProps) => {
  const cardTypes = Object.keys(
    BackgroundColorAccordingToStartsWith
  ) as CardType[]

  const line1 = cardTypes.slice(0, 4)
  const line2 = cardTypes.slice(4)

  return (
    <Modal isOpen={isOpen} onClose={() => console.log('hi')}>
      <Styled.Container>
        <Styled.ModalContainer>
          <Styled.ContentContainer>
            <Styled.ContentLineContainer>
              {line1.map((cardType) => (
                <TouchableCardColorPicker key={cardType} type={cardType} />
              ))}
            </Styled.ContentLineContainer>
            <Styled.ContentLineSpace />
            <Styled.ContentLineContainer>
              {line2.map((cardType) => (
                <TouchableCardColorPicker key={cardType} type={cardType} />
              ))}
            </Styled.ContentLineContainer>
          </Styled.ContentContainer>
        </Styled.ModalContainer>
      </Styled.Container>
    </Modal>
  )
}

export default CardCreateModal
