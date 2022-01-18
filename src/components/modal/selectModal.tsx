import ModalPortal from './modalPortal'

const cards = [
  '클린 카드',
  '삼숭 카드',
  '신헌 카드',
  '쿡민 카드',
  '한나 카드',
  '울리 카드',
  '빕씨 카드',
  '농헙 카드',
]

const SelectModal = ({
  selectCard,
  closeModal,
}: {
  selectCard: (name: string) => void
  closeModal: () => void
}) => {
  const handleClick = (card: string) => () => selectCard(card)

  return (
    <ModalPortal>
      <div className="modal-dimmed" onClick={closeModal} />
      <div className="modal" data-testid="select-modal">
        <div className="flex-center flex-wrap">
          {cards.map((card, i) => (
            <div className="modal-item-container" key={i} onClick={handleClick(card)}>
              <div className="modal-item-dot" />
              <span className="modal-item-name">{card}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalPortal>
  )
}

export default SelectModal
