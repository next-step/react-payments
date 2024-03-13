import { createMachine, assign } from 'xstate'
import { CardInputState } from '@/hooks/use-card-input-state'
import { v4 as uuidv4 } from 'uuid'
import { CardState } from '@/hooks/use-card-state'

const INITIAL_CARD = {
  id: '',
  updatedAt: new Date(),
  cardCode: '',
  cardCVC: '',
  cardExpDate: '',
  cardName: '',
  cardNickName: '',
  cardPin: '',
}

interface CardBeforeReigster extends Omit<CardState, 'updatedAt'> {}

const CARD_STATE_LOCALSTORAGE_KEY = 'CARD_STATE'

const loadCardListFromLocalStorage = () => {
  const itemFromStorage = localStorage.getItem(CARD_STATE_LOCALSTORAGE_KEY)
  if (!itemFromStorage) return []

  return (JSON.parse(itemFromStorage) as CardState[]).map(({ updatedAt, ...rest }) => ({
    ...rest,
    updatedAt: new Date(updatedAt),
  }))
}

const updateCardListOfLocalStorage = (cardList: CardState[]) => {
  localStorage.setItem(CARD_STATE_LOCALSTORAGE_KEY, JSON.stringify(cardList))
}

export const paymentsMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDpAXOcB2WgfUEeWwXQ6BiAYwCcxU8xz7Ud6wAbAbQAMAXUQoA9rACWeKeJxiQAD0QBaAEwBGAMyFNADkPqAbNv2bj+9foDsAGhDpEAFkH7C1m9u-PNNgKymFgC+wQ5oWLgEJBQ0DMys7LBsyJpCokggyJIycgqZKgjq-h7amjr6xqYmggCcztoOTgjGfoTOxf6G+rWC6s4DoeEY2PhEZFTU5ICqa4Ae4-EsbOTJYMjq6YrZ0rLyioWq2v3tmv6n+trONoLO-upNiP71hMa1vcX6HZqu+kNZI1HjCiADCHAKgTtEgMg48gAZlJGJgNpktrldgU1Np-DZCP4bhibhZtLVDvcinV2rVHmYbNTBGZBP5fhFRtEJoBKrroTEWSTwqEYeEREm2eT2anUgmM2JsFk04u0NjFpkajkQZU0Hi8OL8xiuzmMjP+Yxi5HZ4IgkOSvP5Ik2OR2+VA+1O6meXRu2vF6lq6iVzTFtXJlNsNLpPzCf0ihrZdGYmHEADcwAKsrbhWiEKpLs7apZPTYPqZKST-II1bZteVzjYOvoGb8cOIIHBNgaCDahaiHWpjIJBC6PoErsZPd6SZp-dpBDZLMWXlLaaHhhGWbFqG2UfblIgDIQayculP-GPxbqSR1dArJ1K5RPjJd9UvAZMZrM13aRemvs5sbUqw1LH0rFpElWixDpAl8V5DhMBdw2ZR9QVfVNO3TG5exLWlagsJ1LB9LdxR3S8SzKWp9B7b17zgo12UQjtNxQspCFeZxDCHG5AisElr2xZwKQpasdE0dRQlCIA */
  types: {} as {
    context: {
      cardBeforeRegister: CardBeforeReigster
      cardList: CardState[]
    }
    events:
      | {
          type: 'create_cancel'
        }
      | {
          type: 'create_start'
        }
      | {
          type: 'create_card_input'
          cardInput: CardInputState
        }
      | {
          type: 'create_confirm'
          nickName: string
        }
      | {
          type: 'remove'
          targetId: CardState['id']
        }
      | {
          type: 'edit_start'
          targetCard: CardState
        }
      | {
          type: 'edit_confirm'
          nickName: string
        }
  },

  initial: '카드_목록',
  id: 'payments',
  context: {
    cardBeforeRegister: INITIAL_CARD,
    cardList: loadCardListFromLocalStorage(),
  },
  states: {
    카드_등록: {
      on: {
        create_cancel: {
          target: '카드_목록',
          actions: assign({
            cardBeforeRegister: INITIAL_CARD,
          }),
        },
        create_card_input: {
          target: '카드_등록_확인',
          actions: assign({
            cardBeforeRegister: ({ event: { cardInput } }) => ({ ...cardInput, id: uuidv4() }),
          }),
        },
      },
    },
    카드_등록_확인: {
      on: {
        create_confirm: {
          target: '카드_목록',
          actions: assign({
            cardList: ({ event: { nickName }, context }) => {
              const newCardList = [
                ...context.cardList,
                {
                  ...context.cardBeforeRegister,
                  updatedAt: new Date(),
                  cardNickName: nickName,
                },
              ]
              updateCardListOfLocalStorage(newCardList)
              return newCardList
            },
            cardBeforeRegister: INITIAL_CARD,
          }),
        },
      },
    },
    카드_수정: {
      on: {
        edit_confirm: {
          target: '카드_목록',
          actions: assign({
            cardList: ({ event: { nickName }, context: { cardList, cardBeforeRegister } }) =>
              cardList.map(card => {
                return card.id === cardBeforeRegister.id
                  ? {
                      ...cardBeforeRegister,
                      cardNickName: nickName,
                      updatedAt: new Date(),
                    }
                  : card
              }),
            cardBeforeRegister: INITIAL_CARD,
          }),
        },
      },
    },
    카드_목록: {
      on: {
        create_start: { target: '카드_등록' },
        edit_start: {
          target: '카드_수정',
          actions: assign({
            cardBeforeRegister: ({ event }) => event.targetCard,
          }),
        },
        remove: {
          actions: assign({
            cardList: ({ context: { cardList }, event: { targetId } }) => {
              const filteredCardList = cardList.filter(({ id }) => id !== targetId)
              updateCardListOfLocalStorage(filteredCardList)
              return filteredCardList
            },
          }),
        },
      },
    },
  },
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAjACZ0AT0FDkU5EA */
})
