import { SERIAL_NUMS, EXPIRED_DATE } from 'pages/CardAddPage/constants'

export interface PageProps {
  cards: Card[]
  setPage: React.Dispatch<React.SetStateAction<string>>
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
}

export type Card = {
  type: string
  serialNums: typeof SERIAL_NUMS
  ownerName: string
  expiredDate: typeof EXPIRED_DATE
  nickName: string
}
