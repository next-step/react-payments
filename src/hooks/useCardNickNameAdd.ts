import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MAX_CARD_NICKNAME_LENGTH } from '../constants/Card'
import { useCardDispatchContext, useCardItemStateContext, useCardListStateContext } from '../contexts/cardContext'

export const useCardNickNameAdd = () => {
  const navigate = useNavigate()
  const dispatch = useCardDispatchContext()
  const [cardNickName, setCardNickName] = useState('')
  const cardItem = useCardItemStateContext()
  const cardList = useCardListStateContext()

  const findCardItem = cardList.find((data) => data.ownerName === cardItem.ownerName)

  const cardNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length > MAX_CARD_NICKNAME_LENGTH) return
    setCardNickName(value)
  }

  const cardNickNameAddOnSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/')
    if (findCardItem === undefined)
      dispatch({
        type: 'CREATE',
        card: {
          ...cardItem,
          nickName: cardNickName === '' ? cardItem.cardDesign : cardNickName,
        },
      })

    if (findCardItem !== undefined)
      dispatch({
        type: 'EDIT',
        card: {
          ...cardItem,
          nickName: cardNickName === '' ? cardItem.cardDesign : cardNickName,
        },
      })
  }
  return { cardNickName, cardItem, setCardNickName, cardNickNameHandler, cardNickNameAddOnSubmit, findCardItem }
}
