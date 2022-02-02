import { drop, get, post, update } from '.'
import {
  CardDispatchAddType,
  ServerCardProps,
} from '../context/Card/CardContext'

const CARDS = 'cards/'
const CARD = 'card/'

const getCards = async () => {
  return await get<GetCardResponse | null>({ path: CARDS })
}

const appendCard = async (card: CardDispatchAddType) => {
  return await post({ path: CARD, body: card })
}

const deleteCard = async (id: string) => {
  return await drop({ path: CARD + id })
}

const editCard = async (card: CardDispatchAddType) => {
  return await update({ path: CARD, body: card })
}

export { getCards, appendCard, deleteCard, editCard }

export type GetCardResponse = Record<string, ServerCardProps>
