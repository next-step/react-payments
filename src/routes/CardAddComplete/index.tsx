import { Link } from 'react-router-dom'
import { CARD_NAME_LIST } from '../../constants/Card'
import { useCardItemStateContext } from '../../contexts/cardContext'

const CardAddComplete = () => {
  const { cardDesign, cardExpirationDate, cardNumber, ownerName } = useCardItemStateContext()
  const { num1, num2, num3, num4 } = cardNumber
  const { MM, YY } = cardExpirationDate

  return (
    <div>
      <div className='root'>
        <div className='app flex-column-center'>
          <div className='flex-center'>
            <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
          </div>
          <div className='card-box '>
            <div className={`big-card card-color${CARD_NAME_LIST.indexOf(cardDesign)}`}>
              <div className='card-top'>
                <span className='card-text__big'>{cardDesign}</span>
              </div>
              <div className='card-middle'>
                <div className='big-card__chip' />
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text__big'>
                    {num1} - {num2} - {num3} - {num4}
                  </span>
                </div>
                <div className='card-bottom__info'>
                  <span className='card-text__big'>{ownerName}</span>
                  <span className='card-text__big'>
                    {MM} / {YY}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container flex-center w-100'>
            <input className='input-underline w-75' type='text' placeholder='카드 별칭 (선택)' />
          </div>
          <div className='button-box mt-50'>
            <Link to='/' className='button-text'>
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAddComplete
