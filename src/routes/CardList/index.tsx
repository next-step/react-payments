import { Link } from 'react-router-dom'
import { CARD_NAME_LIST } from '../../constants/Card'
import { useCardListStateContext } from '../../contexts/cardContext'
import { changeSecretNumber } from '../../domain/changeSecretNumber'

const CardList = () => {
  const state = useCardListStateContext()
  return (
    <div>
      <div className='root'>
        <div className='app flex-column-center'>
          <div className='flex-center'>
            <h2 className='page-title mb-10'>보유 카드</h2>
          </div>
          {state.map((item) => (
            <div key={item.ownerName} className='card-box'>
              <div className={`empty-card card-color${CARD_NAME_LIST.indexOf(item.cardDesign)}`}>
                <div className='card-name'>{item.cardDesign}</div>
                <div className='card-middle'>
                  <div className='small-card__chip' />
                </div>
                <div className='card-bottom'>
                  <div className='card-bottom__cardNumber'>
                    <span className='card-text'>
                      {item.cardNumber.num1}-{item.cardNumber.num2}-{changeSecretNumber(item.cardNumber.num3)}-
                      {changeSecretNumber(item.cardNumber.num4)}
                    </span>
                  </div>
                  <div className='card-bottom__info'>
                    <span className='card-text text-hidden'>{item.nickName}</span>
                    <span className='card-text'>
                      {item.cardExpirationDate.MM} / {item.cardExpirationDate.YY}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='card-box'>
            <Link className='empty-card' to='/card-add'>
              +
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardList
