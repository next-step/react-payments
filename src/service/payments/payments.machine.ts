import { createActorContext } from '@xstate/react'
import { v4 as uuidv4 } from 'uuid'
import { assign, fromPromise, setup } from 'xstate'

import { LOCAL_STORAGE_KEY_LIST, PAYMENTS_MACHINE_INITIAL_VALUES } from './payments.const'
import {
  CardAdditionalInitialValues,
  CardItem,
  PaymentMachineContext,
  RegistrationInitialValues,
} from './payments.type'

export enum PAYMENT_STATE {
  CARD_REGISTRATION_START = 'card-registration-start',
  CARD_REGISTRATION_SUBMITTING = 'card-registration-submitting',
  CARD_REGISTRATION_FAIL = 'card-registration-failed',
  CARD_NICKNAME_REGISTRATION = 'card-nickname-registration',
  CARD_NICKNAME_SUBMITTING = 'card-nickname-submitting',
  CARD_NICKNAME_SUBMITTING_FAILED = 'card-nickname-submitting-failed',
  CARD_REGISTRATION_COMPLETE = 'card-registration-complete',
  CARD_EDIT = 'card-edit',
  CARD_EDITING = 'card-editing',
  CARD_EDITING_FAILED = 'card-editing-failed',
  CARD_EDITING_COMPLETE = 'card-editing-complete',
}

export const paymentsMachine = setup({
  types: {} as {
    context: PaymentMachineContext
    events:
      | {
          type: 'SUBMIT'
          value: RegistrationInitialValues
        }
      | {
          type: 'PREV'
        }
      | {
          type: 'NEXT'
        }
      | {
          type: 'POST_NICKNAME'
          value: CardAdditionalInitialValues
        }
      | {
          type: 'RESET'
        }
      | {
          type: 'EDIT_NICKNAME'
          value: CardItem['nickName']
        }
      | {
          type: 'EDIT_CARD'
          value: CardItem
        }
  },
  actors: {
    postCardInfo: fromPromise(async ({ input }: { input: RegistrationInitialValues }) => {
      return true
    }),
    postNickname: fromPromise(async ({ input }: { input: PaymentMachineContext }) => {
      const cardList = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]'
      )

      if (!Array.isArray(cardList)) {
        throw new Error('cardList is not array')
      }

      const newItem = {
        ...input.registration,
        ...input.cardAdditionalInfo,
        time: Date.now(),
        id: uuidv4(),
      }
      const mergedList = [...cardList, newItem]

      window.localStorage.setItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO, JSON.stringify(mergedList))

      return true
    }),
    putCard: fromPromise(async ({ input }: { input: CardItem }) => {
      const cardList = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]'
      ) as Array<CardItem>

      // 서버 동작
      const foundCard = cardList.find((card) => card.id === input.id)
      const prevList = cardList.filter((card) => card.id !== input.id)

      const mergedList = [...prevList, { ...foundCard, ...input }]

      window.localStorage.setItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO, JSON.stringify(mergedList))

      return true
    }),
  },
  actions: {
    saveSelectedCardInfo: assign(({ context, event }) => {
      if (event.type === 'EDIT_CARD') {
        return {
          cardEditingInfo: event.value,
        }
      }

      return context
    }),
    getCardList: assign(() => {
      const cardList = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]'
      )

      if (!Array.isArray(cardList)) {
        throw new Error('cardList is not array')
      }

      return {}
    }),
    reset: assign(() => {
      return {
        ...PAYMENTS_MACHINE_INITIAL_VALUES,
      }
    }),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRAHYAHLML6AnLIBsARhPnzs-ZYCsAJgA0IdIn0AWfcf3OJs6GAMzmjr4AvpHuaFi4BCTkVDT0jMzqnNxkfACiACJSAPoAcuIAwgDSJQCCorlyikggyCpq7DiaOggGRqYW1rb2Tm4eiHa6hCGOJt7musHOzhHe0bEY2PhEpBTUtAxMLB1cAK4ARphqrDhQvBAcYIR0OABubADWj7Dnl3jXUI1NK1VJkuohLMtvIRdI5erDzNN4e5PAh9DNCJZZCYXLDgg5YWsWhsEttkns0odMqcLldnrcwGQyGwyIRkAAbFgAM2ZmEI3xpfzpgOawPaGma3QhEWhsMM8MRunMyMQZnMhDs2NkwV03mWEUJcU2iR2VBwdGI7xwqGw5IOGQ6vAACgAlXIANWFyhBHTBCEs0xMhCCln05gcOv0ulkIWVPWCGKxjkslm8UYCBuJWySuzNFqtNtSdqOHCdAHl+JJShVqnUGgogW1QRLwQtJlrpj5nCFZJZzN5HLHdP7CM5e84hyH-bZVjEifEsybKLnLdawNTfv87g8nq8Po9gXgSuaV9hPS1Gz7m37W4R245O93e-3Y5jlsYZt4TCm5iYYRn58aZLLvma78hudK8AyTIsuyXI8qyKiHseIFnqKTagN0SxzIQ3j9lYszzGY3iDkmCYETqsiyDijj-kapK7IW6TFpwxBsJg7JgHgYC8K6-C5DI9Yihe4oYYg3aBssBjeBCFhzOYowoi4lhBo48k6s4upfkOtEktmKT7ExVKsexbKcdxBTFOUNTOvkqHCZ0V7iSOsrSc4sm2ApXjKZ+Ji+U4uG6CErY6QuZKQGovAWZWZRVLU9R2d6InaOC46TKq3YLEEVEQrGSyOCOzjhLC-qyLovnmCFgG7OFm73DgjzPG8nysiceDlMkCVig5ok9IYxiqoMdj4p5CDSZM-YhE4EQGCmgWVfRVA1RBUHMqyHJ4NyZC8sgrXtRQnXoclvV9ANNhDSMsZhIG2KTQYIQhOOpV-rOhq6YuS03JQxkcVxkWFJWVk2Qdl49VKUIwnCioKkqYyjaOhCOGEviGCYhi4RY816ZQH1QF9bE-dxvH8cDSXdGiULzCGXaBOOAT6LGSZGOlYTJj2gT6NEs44GwEBwECmYEA2iXdUdlAwyiYuY4ujGUsc2R4ELXW+ojzj+DqZi+ZCTgM-2OEPV+VgzKV95S2SMv2hw660jciuHd0Nj5YEYa6GVYQhKjsY+H4aKzDCk0s5YpsMQZsuW5yqB0KZEC2yDR2zark3LMs7upnMuixmY+Uai4iqyNJnZB6ayGrrahmx2hseSqmCdSsnvtp4OYTqkE+gPTClgwtGhdLsXNpgdbUAx6T4JBPllE9giLi2C7g6FeqWKpndQ73c43fASX-eCp94eR5AQ8i5huEhLeoZuUEbkRgOsOd2R0kdz4hG6N35vMXjJlmfvvq6i+TjvlNSZLBsHnCqL0BYLWxhANQn8rzxymLXRG9d5i5URgjRGTgbAuzcvMbuONoE9STMpBwScLB9kVPTWGGl8oPXDCEAIvYTD3RCDgyB-xKA7yjngo6DsRw2EjK7BEHtYZhD8DdMc+hTDqyYaAgC4CcZvwJpw+2kYRxXSTIjd20wYyw1wmPEqn5bCdgcJzSIQA */
  id: 'payments',
  context: PAYMENTS_MACHINE_INITIAL_VALUES,
  initial: PAYMENT_STATE.CARD_REGISTRATION_START,
  states: {
    [PAYMENT_STATE.CARD_REGISTRATION_START]: {
      on: {
        SUBMIT: {
          target: PAYMENT_STATE.CARD_REGISTRATION_SUBMITTING,
          actions: assign(({ context, event }) => {
            return {
              registration: Object.assign(context.registration, event.value),
            }
          }),
        },
        EDIT_NICKNAME: {
          target: PAYMENT_STATE.CARD_EDIT,
        },
      },
    },
    [PAYMENT_STATE.CARD_REGISTRATION_SUBMITTING]: {
      invoke: {
        id: 'submitting',
        input: ({ context }) => {
          return context.registration
        },
        src: 'postCardInfo',
        onDone: {
          target: PAYMENT_STATE.CARD_NICKNAME_REGISTRATION,
        },
        onError: {
          target: PAYMENT_STATE.CARD_REGISTRATION_FAIL,
        },
      },
    },
    [PAYMENT_STATE.CARD_REGISTRATION_FAIL]: {
      on: {},
    },
    [PAYMENT_STATE.CARD_NICKNAME_REGISTRATION]: {
      on: {
        PREV: {
          target: PAYMENT_STATE.CARD_REGISTRATION_START,
        },
        POST_NICKNAME: {
          target: PAYMENT_STATE.CARD_NICKNAME_SUBMITTING,
          actions: assign(({ context, event }) => {
            return {
              cardAdditionalInfo: Object.assign(context.cardAdditionalInfo, event.value),
            }
          }),
        },
      },
    },
    [PAYMENT_STATE.CARD_NICKNAME_SUBMITTING]: {
      invoke: {
        id: 'postNickname',
        input: ({ context }) => {
          return context
        },
        src: 'postNickname',
        onDone: {
          target: PAYMENT_STATE.CARD_REGISTRATION_COMPLETE,
        },
        onError: {
          target: PAYMENT_STATE.CARD_NICKNAME_SUBMITTING_FAILED,
        },
      },
    },
    [PAYMENT_STATE.CARD_NICKNAME_SUBMITTING_FAILED]: {
      on: {},
    },
    [PAYMENT_STATE.CARD_REGISTRATION_COMPLETE]: {
      on: {
        RESET: {
          target: PAYMENT_STATE.CARD_REGISTRATION_START,
          actions: 'reset',
        },
        EDIT_CARD: {
          target: PAYMENT_STATE.CARD_EDIT,
          actions: 'saveSelectedCardInfo',
        },
      },
    },
    [PAYMENT_STATE.CARD_EDIT]: {
      on: {
        EDIT_NICKNAME: {
          target: PAYMENT_STATE.CARD_EDITING,
          actions: assign(({ context, event }) => {
            return {
              cardEditingInfo: Object.assign(context.cardEditingInfo, { nickName: event.value }),
            }
          }),
        },
      },
    },
    [PAYMENT_STATE.CARD_EDITING]: {
      invoke: {
        id: 'putCard',
        input: ({ context, event }) => {
          if (event.type !== 'EDIT_NICKNAME') {
            throw new Error('putCard: unknown event')
          }

          return {
            ...context.cardEditingInfo,
            nickName: event.value,
          }
        },
        src: 'putCard',
        onDone: {
          actions: assign(({ context }) => {
            return {
              cardAdditionalInfo: {
                nickName: context.cardEditingInfo.nickName,
              },
            }
          }),
          target: PAYMENT_STATE.CARD_EDITING_COMPLETE,
        },
        onError: {
          target: PAYMENT_STATE.CARD_EDITING_FAILED,
        },
      },
    },
    [PAYMENT_STATE.CARD_EDITING_FAILED]: {},
    [PAYMENT_STATE.CARD_EDITING_COMPLETE]: {
      on: {
        EDIT_CARD: {
          target: PAYMENT_STATE.CARD_EDIT,
          actions: 'saveSelectedCardInfo',
        },
        RESET: {
          target: PAYMENT_STATE.CARD_REGISTRATION_START,
          actions: 'reset',
        },
      },
    },
  },
})

export const PaymentsMachineContext = createActorContext(paymentsMachine)
