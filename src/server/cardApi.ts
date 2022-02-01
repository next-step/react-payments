import { drop, get, post, update } from '.'
import { CardStoredType, ServerCardProps } from '../context/Card/CardContext'

const CARDS = 'cards/'
const CARD = 'card/'

const getCards = async () => {
  return await get<GetCardResponse>({ path: CARDS })
}

const appendCard = async (card: CardStoredType) => {
  return await post({ path: CARD, body: card })
}

const deleteCard = async (id: string) => {
  return await drop({ path: CARD + id })
}

const editCard = async (card: CardStoredType) => {
  return await update({ path: CARD, body: card })
}

export { getCards, appendCard, deleteCard, editCard }

type GetCardResponse = Record<string, ServerCardProps>
