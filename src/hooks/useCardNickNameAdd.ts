import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MAX_CARD_NICKNAME_LENGTH } from '../constants/Card'
import { useCardDispatchContext, useCardItemStateContext, useCardListStateContext } from '../contexts/cardContext'

export const useCardNickNameAdd = () => {
  const navigate = useNavigate()
  const dispatch = useCardDispatchContext()
  const [cardNickName, setCardNickName] = useState('')
  const cardData = useCardItemStateContext()
  const state = useCardListStateContext()

  const findCardData = state.find((data) => data.ownerName === cardData.ownerName)

  const cardNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length > MAX_CARD_NICKNAME_LENGTH) return
    setCardNickName(value)
  }

  const cardNickNameAddOnSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
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
  return { cardNickName, cardData, setCardNickName, cardNickNameHandler, cardNickNameAddOnSubmit, findCardData }
}
