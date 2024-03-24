type CardItemProps = {
  onClick?: () => {}
}

function CardItem(props: CardItemProps) {
  return (
    <div className="modal-item-container" onClick={props.onClick}>
      <div className="modal-item-dot"></div>
      <span className="modal-item-name">클린 카드</span>
    </div>
  )
}

export default CardItem
