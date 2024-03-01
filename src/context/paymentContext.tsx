import { createContext, useState } from 'react'

export type CardInfo = {
  cardNumber?: string
  month?: number
  year?: number
  name?: string
  cardType?: string
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
