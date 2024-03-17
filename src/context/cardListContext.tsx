import { createContext, useState } from 'react'
import { CardInfo } from './paymentContext'

export const CardListContext = createContext<Array<CardInfo>>([])
export const UpdateCardListContext = createContext<(payload: Array<CardInfo>) => void>(() => {})

const CardListProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardList, setCardList] = useState<Array<CardInfo>>([])

  return (
    <>
      <UpdateCardListContext.Provider value={setCardList}>
        <CardListContext.Provider value={cardList}>{children}</CardListContext.Provider>
      </UpdateCardListContext.Provider>
    </>
  )
}

export default CardListProvider
