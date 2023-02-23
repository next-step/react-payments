import { CARD_NAME } from '../../../constants/Card'
import { expirationDateMark } from '../../../domain/expirationdateMark'
import { markCardNumber } from '../../../domain/markCardNumber'

const CardShape = ({ cardNumber, cardExpirationDate, cardDesign, ownerName }: CardShapeProps) => {
  return (
    <div className='card-box'>
      <div className={`empty-card card-color${CARD_NAME.indexOf(cardDesign)}`}>
        <div className='card-name'>{cardDesign}</div>
        <div className='card-middle'>
          <div className='small-card__chip' />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__cardNumber'>
            <span className='card-text'>{markCardNumber(cardNumber)}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text text-hidden'>{ownerName}</span>
            <span className='card-text'>{expirationDateMark(cardExpirationDate)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShape
