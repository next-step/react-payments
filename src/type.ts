import { SerialNums } from 'pages/CardAddPage/constants'

export interface PageProps {
  cards: Card[]
  setPage: React.Dispatch<React.SetStateAction<string>>
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
}

export type Card = {
  type: string
  serialNums: SerialNums
  ownerName: string
  expiredDate: string
  nickName: string
}
