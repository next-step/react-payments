import { ReactNode, createContext, useMemo, useReducer } from 'react'
import { paymentReducer } from './reducer'
import { actions } from './actions'
import { CardDetail, PaymentActions, PaymentState } from './types'
import { CARD_LIST_STORAGE_KEY, CARD_STORAGE_KEY } from '@/constants'
import { getItemFromStorage } from '@/utils'

export const initialState = {
  cardList: [],
  card: {
    number: ['', '', '', ''],
    expiry: ['', ''],
    owner: '',
    name: '',
    bank: '',
    cvc: '',
    password: ['', '', '', '']
  }
}

const init = () => {
  const card = getItemFromStorage<CardDetail>({
    key: CARD_STORAGE_KEY,
    defaultValue: initialState.card
  })
  const cardList = getItemFromStorage<CardDetail[]>({
    key: CARD_LIST_STORAGE_KEY,
    defaultValue: initialState.cardList
  })

  return { card, cardList }
}

export const PaymentContext = createContext<PaymentState & PaymentActions>({
  ...initialState,
  updateCardList: () => {},
  updateCardDetail: () => {},
  resetCardDetail: () => {}
})

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(paymentReducer, initialState, init)
  const { updateCardList, updateCardDetail, resetCardDetail } = actions(
    state,
    dispatch
  )

  const value = useMemo(() => {
    return {
      ...state,
      updateCardList,
      updateCardDetail,
      resetCardDetail
    }
  }, [state, updateCardList, updateCardDetail, resetCardDetail])

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  )
}
