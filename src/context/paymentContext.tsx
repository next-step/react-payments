import { createContext, useState } from 'react'

export type CardCompanyName = '국민' | '현대' | '삼성' | '우리' | '아멕스' | '비자' | '비씨' | '롯데'
export const CARD_START_NUM_LIST = ['55', '34', '37', '36', '53', '40', '48', '44'] as const
export type CardStartNum = (typeof CARD_START_NUM_LIST)[number]
export type CardColor = 'tomato' | 'gray' | 'yellow' | 'blue' | 'green' | 'purple' | 'orange' | 'black' | 'default'

export const cardStartMatching: CardMatch = {
  55: { type: '국민', color: 'tomato' },
  34: { type: '현대', color: 'gray' },
  37: { type: '삼성', color: 'yellow' },
  36: { type: '우리', color: 'blue' },
  53: { type: '아멕스', color: 'green' },
  40: { type: '비자', color: 'purple' },
  48: { type: '비씨', color: 'orange' },
  44: { type: '롯데', color: 'black' },
}

type CardMatch = { [K in CardStartNum]: { type: CardCompanyName; color: CardColor } }
export type CardCompany = {
  name?: CardCompanyName | null
  theme?: CardColor | null
  startNum?: CardStartNum | null
}

export type CardNumber = {
  [index: string]: string
  first: string
  second: string
  third: string
  fourth: string
}
export type CardInfo = {
  cardNo?: number
  cardNumber?: CardNumber
  month?: string
  year?: string
  name?: string
  password?: string
  cvc?: string
  cardType?: CardCompany
  cardAlias?: string
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
