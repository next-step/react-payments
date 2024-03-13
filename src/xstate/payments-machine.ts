import { createMachine, assign } from 'xstate'
import { v4 as uuidv4 } from 'uuid'
import { CardState, CardBeforeRegister, CardInputState } from '@/types/card'

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

export const paymentsMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDpAXOcB2WgfUEeWwXQ6BiAYwCcxU8xz7Ud6wAbAbQAMAXUQoA9rACWeKeJxiQAD0QBaAEwBGAMyFNATnUB2QUYAsADm1mArNu0WANCHSIzZ3QDZNJuxZvqFuaangC+oc5oWLgEJBQ0DMys7JyMEORSOMgArnhCokggyJIycgqFKghGnoTGZqb69ppmnmaaNs6uCDb6NoSCZsaenvqegYI2muGRGNj4RGRU1OSAqmuAHuOJLGwc8gBmUoyY+YrF0rLyipWq2kZ9gRa26p4W-q36nYg9fQOB9S0PIWmRVmMQWFEAGEOAVAnaJAZDscPtDsdCqdShcKmoPEZCEZRpZBI0gjZ3B8EOoCYQzL1CUZaYIHBMgVE5rFFoBKrroTC27FgeFQjDyIhOJXO5VAV3JNRsRhCmkEnhukvspO0mk0tSM2mJPk8JhaTJB8zi5A5MIgcN5-MFBQkZzKlzUNgChE8NgeNl18vUhm0pPJ+kp1IctJMDIsBuiRvZdGYmHEADcwMjbWixcpHe5CEFyZpjL0xoJ1KSbIJBFmJu16Z4ftpwhEQDhxBA4CdDQRhXb0eK1NWy673Z6xj7SQZKQ8jNntDmJmYIyywUsO6mHQh7IR9JorPjhv5tPonC5EA5dJNXXZ7HiHnPQcaaKs1kvRSvVM0zIQeuYPM9CxZyb7Dwg3jYoMHptPojTqE84b1syN6LFCj72hiCCqLYZaCHKe4hE6UH-l0co1BYpgmDoBhEYWtYwW2C4cohXbpihHjquBlgWGMtger+Kqau+VJfIMFikeodahEAA */
  types: {} as {
    context: {
      cardBeforeRegister: CardBeforeRegister
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
          targetCard: CardBeforeRegister
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
    cardList: [],
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
            cardList: ({ event: { nickName }, context }) => [
              ...context.cardList,
              {
                ...context.cardBeforeRegister,
                updatedAt: new Date(),
                cardNickName: nickName,
              },
            ],
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
              return cardList.filter(({ id }) => id !== targetId)
            },
          }),
        },
      },
    },
  },
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAjACZ0AT0FDkU5EA */
})
