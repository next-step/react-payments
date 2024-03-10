import { NewCard } from './NewCard'
import { EmptyCard } from './EmptyCard'
import { SmallCard } from './SmallCard'
import { BigCard } from './BigCard'

export type CardNumber = `${number} ${number} ${number} ${number}`
export type CardExpiry = `${number}/${number}`

export const Card = {
  New: NewCard,
  Empty: EmptyCard,
  Small: SmallCard,
  Big: BigCard
}
