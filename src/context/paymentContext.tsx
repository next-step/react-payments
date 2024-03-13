import { createContext, useState } from 'react'

export type CardNumber = {
  first?: string
  second?: string
  third?: string
  fourth?: string
}
export type CardInfo = {
  cardNo?: number
  cardNumber?: CardNumber
  month?: string
  year?: string
  name?: string
  password?: string
  cvc?: string
  cardType?: string
  cardAlias?: string
  cardList?: Array<Omit<CardInfo, 'cardList'>>
}

export const CardInfoContext = createContext<CardInfo>({})
export const UpdateCardInfoContext = createContext<(payload: CardInfo) => void>(() => {})

const CardInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({})

  return (
    <>
      <UpdateCardInfoContext.Provider value={setCardInfo}>
        <CardInfoContext.Provider value={cardInfo}>{children}</CardInfoContext.Provider>
      </UpdateCardInfoContext.Provider>
    </>
  )
}

export default CardInfoProvider
