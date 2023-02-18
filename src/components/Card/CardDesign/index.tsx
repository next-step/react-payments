import { useMarkCardNumber } from '../../../hooks/useMarkCardNumber'

const CardDesign = ({ cardNumber, cardExpirationDate }: CardDesignProps) => {
  const markNumber = useMarkCardNumber(cardNumber)
  const expirationDate = cardExpirationDate

  return (
    <div className='card-box'>
      <div className='empty-card'>
        <div className='card-top' />
        <div className='card-middle'>
          <div className='small-card__chip' />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__cardcardNumberberber'>
            <span className='card-text'>{markNumber}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>NAME</span>
            <span className='card-text'>
              {expirationDate.num1} / {expirationDate.num2}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
