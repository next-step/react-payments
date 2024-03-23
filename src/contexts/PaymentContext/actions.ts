import { Dispatch } from 'react'
import { CardDetail, PaymentState } from './types'
import { CARD_LIST_STORAGE_KEY, CARD_STORAGE_KEY } from '@/constants'
import { initialState } from './PaymentProvider'
import { setItemToStorage } from '@/utils'

export const SET_CARD_LIST = 'SET_CARD_LIST'
export const SET_CARD_DETAIL = 'SET_CARD_DETAIL'
export const RESET_CARD_DETAIL = 'RESET_CARD_DETAIL'

export type PaymentDispatch =
  | { type: typeof SET_CARD_LIST; payload: { cardList: CardDetail[] } }
  | {
      type: typeof SET_CARD_DETAIL
      payload: { card: CardDetail }
    }
  | { type: typeof RESET_CARD_DETAIL; payload: undefined }

export const actions = (
  state: PaymentState,
  dispatch: Dispatch<PaymentDispatch>
) => {
  const updateCardList = (card: CardDetail) => {
    const cardList = [...state.cardList, card]

    dispatch({
      type: 'SET_CARD_LIST',
      payload: { cardList }
    })

    setItemToStorage<CardDetail[]>({
      key: CARD_LIST_STORAGE_KEY,
      value: cardList
    })
  }

  const updateCardDetail = (payload: {
    name: KeyOf<CardDetail>
    value: string
    index?: string
  }) => {
    const { name, index, value: newValue } = payload

    let card: CardDetail

    if (index !== undefined) {
      const field = state.card[name] as string[]

      card = {
        ...state.card,
        [name]: field.map((value, idx) =>
          idx === Number(index) ? newValue : value
        )
      }
    } else {
      card = {
        ...state.card,
        [name]: newValue
      }
    }

    dispatch({
      type: 'SET_CARD_DETAIL',
      payload: { card }
    })

    setItemToStorage<CardDetail>({
      key: CARD_STORAGE_KEY,
      value: {
        ...card,
        password: card.password.map(() => '')
      }
    })
  }

  const resetCardDetail = () => {
    dispatch({
      type: 'RESET_CARD_DETAIL',
      payload: undefined
    })

    setItemToStorage<CardDetail>({
      key: CARD_STORAGE_KEY,
      value: {
        ...initialState.card,
        password: initialState.card.password.map(() => '')
      }
    })
  }

  return {
    updateCardList,
    updateCardDetail,
    resetCardDetail
  }
}
