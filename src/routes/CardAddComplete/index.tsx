import { ChangeEvent, useState, MouseEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CARD_NAME_LIST, CARD_NICKNAME_MAX } from '../../constants/Card'
import { useCardDispatchContext, useCardItemStateContext, useCardListStateContext } from '../../contexts/cardContext'

const CardAddComplete = () => {
  const navigate = useNavigate()
  const dispatch = useCardDispatchContext()
  const [cardNickName, setCardNickName] = useState('')
  const cardData = useCardItemStateContext()
  const state = useCardListStateContext()

  const findCardData = state.find((data) => data.ownerName === cardData.ownerName)

  const cardNickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length > CARD_NICKNAME_MAX) return
    setCardNickName(value)
  }

  const cardNickNameAddOnSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/')
    if (findCardData === undefined)
      dispatch({
        type: 'CREATE',
        card: {
          ...cardData,
          nickName: cardNickName === '' ? cardData.cardDesign : cardNickName,
        },
      })

    if (findCardData !== undefined)
      dispatch({
        type: 'EDIT',
        card: {
          ...cardData,
          nickName: cardNickName === '' ? cardData.cardDesign : cardNickName,
        },
      })
  }

  useEffect(() => {
    if (findCardData !== undefined) setCardNickName(cardData.nickName)
  }, [])

  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
        </div>
        <div className='card-box '>
          <div className={`big-card card-color${CARD_NAME_LIST.indexOf(cardData.cardDesign)}`}>
            <div className='card-top'>
              <span className='card-text__big'>{cardData.cardDesign}</span>
            </div>
            <div className='card-middle'>
              <div className='big-card__chip' />
            </div>
            <div className='card-bottom'>
              <div className='card-bottom__number'>
                <span className='card-text__big'>
                  {cardData.cardNumber.num1} - {cardData.cardNumber.num2} - {cardData.cardNumber.num3} -{' '}
                  {cardData.cardNumber.num4}
                </span>
              </div>
              <div className='card-bottom__info'>
                <span className='card-text__big text-hidden'>{cardData.ownerName}</span>
                <span className='card-text__big'>
                  {cardData.cardExpirationDate.MM} / {cardData.cardExpirationDate.YY}
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
