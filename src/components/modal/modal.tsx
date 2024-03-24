import '../../../styles/modal.css'
import CardItem from '../cardItem'

type ModelProps = {
  onNext: () => {} | void
}

function Modal(props: ModelProps) {
  const CARD_LIST = ['클린 카드', '클린 카드', '클린 카드', '클린 카드']
  // card_list 를 4 * 2 matrix로 자르기
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          {CARD_LIST.map((ele: string) => (
            <CardItem onClick={props.onNext} />
          ))}
        </div>
        <div className="flex-center">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  )
}

export default Modal
