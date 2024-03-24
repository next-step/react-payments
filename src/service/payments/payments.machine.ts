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
  CARD_DELETE = 'card-delete',
  CARD_DELETE_SUBMITTING = 'card-delete-submitting',
  CARD_DELETE_COMPLETE = 'card-delete-complete',
  CARD_DELETE_FAILED = 'card-delete-failed',
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
      | {
          type: 'DELETE_CARD'
          value: CardItem['id']
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
    deleteCard: fromPromise(async ({ input }: { input: CardItem['id'] }) => {
      const cardList = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]'
      ) as Array<CardItem>

      // 서버 동작
      const filteredList = cardList.filter((card) => card.id !== input)

      window.localStorage.setItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO, JSON.stringify(filteredList))

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
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRAGZZAVkIBOABwAWXaYBsBgEzXTu2wBoQ6RAesBGQgHZZXW87b29dO2NjA1MAXxi3NCxcAhJyKhp6RmZ1Tm4yPgBRABEpAH0AOXEAYQBpcoBBUQK5RSQQZBU1dhxNHQR9IzNLG3tHZwM3DwRzc1kTCOtrP2tzA1lvYxm4hIxsfCJSCmpaBiYWbq48Hl4igoAZAskC0qr6gCUils0O1RzevUMJgsVlsDicrnciEidkIplMdlMGz8+jsumM3m27V2yQOaWOmTOOS4AFcAEaYNSsHBQXgQDhgQh0HAANzYAGsGbAyRS8FSoF82j8uho2n0-H5jLCDN4vAZoU5vJNENY7OZYeZrLpzMiVmZvNZMYk9ilDukTllzhwSeTKUyaWAyGQ2GRCMgADYsABmzswhC5Nt5doFyl+3X+CHFktM0tl8qCSoQBj8vmMCz8TmMtgMlkN2P2qSOODoxDZOFQ2Hxp2y3V4AAU3gUAGrB9qdP6ixDRlMGcKZ5NmVMJvwIwizFUIhxRdEY+JYpL502UIslssVjJVy04OsAeX4kgq1TqjWaCm+bbDHYQwVkksM5lMN-s2ZV1gT1kBUSC3j8lmC8LsubziaeLLqW5ZgNaPJ8rS9KMiy7IMj8eDlMWYHYC2QrtqAfTfiEsLBLYn6IrMEyQggiy3pmVgBPCujpgBs5GjiBZUKBq4Qf6UF2rwDpOi67pej6roqMhqHsRh54ithiC4b4iIOHKPbEYYb76oQ37GAEw5yt+ui6IBxq4kc64WkSxBsJg7pgHgYC8A2-CPBJoZSdoMkPpK+qWOE4SGMiugJvC1jqRK1hUaE2p+AYBnMYuJmEhc5mWW61m2cUZSvB8TnCj0l52HlRiLDMaIquYdjLOYb6WP4NgamiAQbOY0ULnicXVlaiVWTZNz3I8zwZZ8p6CpJOXSQgeV2AVKyWJmqplSsQ6zIQqJRNG0q6Emph+E1wFHJAai8Gl+6VLUDRNFlWGuWNyKmNV36GJtmxrP5ZHmN+Jg9t4sjmJEEprPq21GVQe3QXSOAMkyrIcq6xJ4FUaTnReo1zbosLorIdiyJqmymAFvjfZEZh3sYWpbIxeY7UDEBdNSPGOs6roeng3pkL6yAw3DFAIy5fRBEsS2LIYqayPVekJtehBouEZVBFR6xbWTQGA5QwN2pQHXJV1h0vO8A2tCG2XhuNk1FTNpXlQmeUo8OtgrBN6Lij+AMscrVN8mrFmdbZ9mOYN+sXTh7nqbbSwbBssg42RcIS5FgTSt4r0ROtTuLir1Lu0lKXdQ8Tza5lvuts5I2XUbhCFdNJVzRVZE+cFmbRg+E0qlFCuGc7EBgBrtm3NnfU61zRd9CXZfFbN5tkaEYSl+EiLptmNh5cneLt53kG2jToPg-BUPLylHMQP3hvXbdATRBKqyBAFZWENEwRlTRZg+IvRw7zZq+BjTvH0wJTNCS-YB7wfXKR90x3VPo9C+ZFhw3U8j4JY75AiIiflQP+6dPZZ16rnXWZ5C6H2zKXLwWZ9TolMJsIc4pCDh1CGYEh2Zhb6UxDgNg7d4CCnJiwv2iNLqUFfGRbhSDKymQuHkPA2CDaXlKmLCaS0ZilVlHlGUcJ+GtU3G-Pkoj-aIG+nMNEmNnBwgRBpKuUwvC+CWHXDG0oHyKJbjFFq5p4pWk9KgOgyUIDqM4X0KIaotQgmiHlWiEdjEBHmJmJYz5ibGH4WxcCAiHFF0wh4qEeCfEjH-AEt8ERRwLCou+aU4ooliRiZxNeUB3HcxkrMbRSw9G2GGPCN8H40xODWI+BiOxFbO2iRWYp78oCUCcS4yAZSB4yXRJKdMxMwjEw1JjVSRgNKLCsKsfKjUbHNWMvYtqnB1YpWGeGDYaIKGaSiGY0Ylg3zIlLiFVMtg4RfTaXOVuKdXZ7NyveFGsd3xEOlCRBMMw8YLAzGVbw0Z5btKeXiVOpSho4NyqmFGIKJmhExssPwCYoio28p9Zaqp0z8Khf05xrjXmjT0lIvKoVVjOFRWLDYEtiaojKvYEFn1VngtsbtV2qsdk2RJZdJEKNMz2C+gYNYSxaVyRjLYDYjhFj-TWRTSgf8+WD2FqY4cCJ-l1zRePcK6lp7fmjPecc-CUE9LUTCsRSMipLVDssdGj59RDgcEtGhm1ArTUiQqpWKCeVgBVYgCIqJ1LuunCi8VkDoylxWD2AIQRZCBC9ey9ZyCO4pUJYMtxlqNFjXhSGpFn04E6qmMOPwQdaoWB-JFHscQ4hAA */
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
              registration: { ...context.registration, ...event.value },
            }
          }),
        },
        EDIT_NICKNAME: {
          target: PAYMENT_STATE.CARD_EDIT,
        },
        DELETE_CARD: {
          target: PAYMENT_STATE.CARD_DELETE_SUBMITTING,
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
              cardAdditionalInfo: { ...context.cardAdditionalInfo, ...event.value },
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
        DELETE_CARD: {
          target: PAYMENT_STATE.CARD_DELETE_SUBMITTING,
        },
      },
    },
    [PAYMENT_STATE.CARD_EDIT]: {
      on: {
        EDIT_NICKNAME: {
          target: PAYMENT_STATE.CARD_EDITING,
          actions: assign(({ context, event }) => {
            return {
              cardEditingInfo: { ...context.cardEditingInfo, nickName: event.value },
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
        DELETE_CARD: {
          target: PAYMENT_STATE.CARD_DELETE_SUBMITTING,
        },
      },
    },
    [PAYMENT_STATE.CARD_DELETE]: {
      on: {
        DELETE_CARD: {
          target: PAYMENT_STATE.CARD_DELETE_SUBMITTING,
        },
      },
    },
    [PAYMENT_STATE.CARD_DELETE_SUBMITTING]: {
      invoke: {
        id: 'deleteCard',
        src: 'deleteCard',
        input: ({ event }) => {
          if (event.type !== 'DELETE_CARD') {
            throw new Error('deleteCard: unknown event')
          }

          return event.value
        },
        onDone: {
          target: PAYMENT_STATE.CARD_DELETE_COMPLETE,
        },
        onError: {
          target: PAYMENT_STATE.CARD_DELETE_FAILED,
        },
      },
    },
    [PAYMENT_STATE.CARD_DELETE_COMPLETE]: {
      on: {
        DELETE_CARD: {
          target: PAYMENT_STATE.CARD_DELETE_SUBMITTING,
        },
        RESET: {
          target: PAYMENT_STATE.CARD_REGISTRATION_START,
          actions: 'reset',
        },
      },
    },
    [PAYMENT_STATE.CARD_DELETE_FAILED]: {},
  },
})

export const PaymentsMachineContext = createActorContext(paymentsMachine)
