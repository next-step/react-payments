import { useEffect } from 'react'
import { CARD_NAME_LIST } from '../../constants/Card'
import { useCardNickNameAdd } from '../../hooks/useCardNickNameAdd'

const CardAddComplete = () => {
  const { cardNickName, setCardNickName, cardNickNameHandler, cardNickNameAddOnSubmit, cardItem, findCardItem } =
    useCardNickNameAdd()

  useEffect(() => {
    if (findCardItem !== undefined) setCardNickName(cardItem.nickName)
  }, [])

  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
        </div>
        <div className='card-box '>
          <div className={`big-card card-color${CARD_NAME_LIST.indexOf(cardItem.cardDesign)}`}>
            <div className='card-top'>
              <span className='card-text__big'>{cardItem.cardDesign}</span>
            </div>
            <div className='card-middle'>
              <div className='big-card__chip' />
            </div>
            <div className='card-bottom'>
              <div className='card-bottom__number'>
                <span className='card-text__big'>
                  {cardItem.cardNumber.num1} - {cardItem.cardNumber.num2} - {cardItem.cardNumber.num3} -{' '}
                  {cardItem.cardNumber.num4}
                </span>
              </div>
              <div className='card-bottom__info'>
                <span className='card-text__big text-hidden'>{cardItem.ownerName}</span>
                <span className='card-text__big'>
                  {cardItem.cardExpirationDate.MM} / {cardItem.cardExpirationDate.YY}
                </span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={cardNickNameAddOnSubmit}>
          <div className='input-container flex-center w-100'>
            <input
              value={cardNickName}
              onChange={cardNickNameHandler}
              className='input-underline w-75'
              type='text'
              placeholder='카드 별칭 (선택)'
            />
          </div>
          <div className='button-box mt-50'>
            <button type='submit'>확인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardAddComplete
