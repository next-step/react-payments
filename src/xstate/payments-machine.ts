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
  cardType: undefined,
}

export const paymentsMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDpAXOcB2WgfUEeWwXQ6BiMq68wC9nAYwYG0AGAXURQHtYASzxD+OPiAAeiALQAmeQE5CSzgA4A7JoBsnTgBYdAVm0GANCHSJ5nFcuM6AzOvk6D8gIxLj6gL5+lmhYuAQkFDT0FICoE4AvPeSAoeOApB1cvEggyIIiYhLpMgie8oTGBuo6PvLGSk6GdpqW1ggeBoR2zpoa6koGnt46AUEY2PhEDDTkgKprgB7jUeSAIz2AoV2JKTySmcKi4pL5sgYGToQ6HQaOTh1u7hZWiFUt5UqehupOj4YDGUOhoxSAGEPRs4tyH9UmssptcqAdsZoaoekpql4vDpKg1EL11IRNN0ejp1L47E4Su9gsMwgxAJVddDGTEAO0OARPGQel1tktnk5PInDpWhzkYSDJpPJonEZUQhhSoTJ4DA9OE41LZOcTPiNwuRKbM-uR6YyBBscts5Jp+YQnIpkcZPDVnsYnKL0ZjsZavJ4bV5NEqQiqKVSKIBagcAOBM6jJg-VshCyHTI1pqXqaC36E6265NYycVTlRSccoudSeEwBQIgHD8CBwNbKgigvWsyGGnwms2VS0aQlJxqyEqtKWRuOvTgc-yFklfVU0KssiHSG7FTRuTx4jyVAVx0XyfaEE4mUrbzhSpwe0nfRiTKbj8EG8NSlpVI37XH91yy0U6QUbyrubwItyDwaesm-aIz1DWtw1MIoamMWwji0IVFFFJwDlKV0lCxOwqiJIcKyPSkgJrKdQI0VpUz0YVnAeYU20QcVDgtaVHjlfs3gLIA */
  types: {} as {
    context: {
      cardBeforeRegister: CardBeforeRegister
      cardList: CardState[]
    }
    events:
      | {
          type: '카드_등록_취소'
        }
      | {
          type: '카드_등록_시작'
        }
      | {
          type: '카드_정보_입력'
          cardInput: CardInputState
        }
      | {
          type: '카드_별명_입력'
          nickName: string
        }
      | {
          type: '카드_삭제'
          targetId: CardState['id']
        }
      | {
          type: '카드_수정_시작'
          targetCard: CardBeforeRegister
        }
      | {
          type: '카드_별명_수정'
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
        카드_등록_취소: {
          target: '카드_목록',
          actions: assign({
            cardBeforeRegister: INITIAL_CARD,
          }),
        },
        카드_정보_입력: {
          target: '카드_등록_확인',
          actions: assign({
            cardBeforeRegister: ({ event: { cardInput } }) => ({ ...cardInput, id: uuidv4() }),
          }),
        },
      },
    },
    카드_등록_확인: {
      on: {
        카드_별명_입력: {
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
        카드_별명_수정: {
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
        카드_등록_시작: { target: '카드_등록' },
        카드_수정_시작: {
          target: '카드_수정',
          actions: assign({
            cardBeforeRegister: ({ event }) => event.targetCard,
          }),
        },
        카드_삭제: {
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
