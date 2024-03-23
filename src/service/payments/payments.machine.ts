import { createActorContext } from '@xstate/react'
import { assign, fromPromise, setup } from 'xstate'

import { cardAdditionalInfo, formInitialValues, LOCAL_STORAGE_KEY_LIST } from './payments.const'
import {
  CardAdditionalInitialValues,
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

      const newItem = { ...input.registration, ...input.cardAdditionalInfo, time: Date.now() }
      const mergedList = [...cardList, newItem]

      window.localStorage.setItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO, JSON.stringify(mergedList))

      return true
    }),
  },
  actions: {},
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRACYAbAFZCATgAcAFgDMAdhuHrV2Vd2GANCHR7ZuwrptWFrqyFj6y+gCMZgC+0R5oWLgEJORUNPSMzOqcsACuAEaYaqw4ULwQHGCEdDgAbmwA1lV5hcU1UHKKSCDIKmrsOJo6CPo2+oT6+qEBEQFjFvoeXghRZoSyZlaBJg42qxaGsfEY2PhEpBTUtAxMLANcBUV4JWVgZGRsZITIADYsAGafTCEFpPF6dTS9VTZIaIUbjSbTKyzWxTRaePShUwmHFzLaBcK6I49E5Jc6pSg4OjEBo4VDYK4ZW7ZXgABQASgBRABqEO6UP6Gm6wxsFjWY0MU2soRMVjM7gxCDMEUIhlk6pc+jMkVcskOcRJiTOKUuVJpdIZ6RuWQGbIA8vxJAB9ABy4gAwgBpF0AQVEnL5ymhA1hKwiesI2psul0EUM0cmoyWiDjax8gUC+hMGx2W2JCVOyQuVDNtPpYAerWe7XKlWqdUaVSheBd1LL2EDPT6MOFKcia30uosFj2OMlZmTKxM43s6oiyMMBjMrhiBoLZJNJbbForoLapV4bw+X1+AKB3xULe35c7Ap7oGGEX7EyHI4iY61k-nNnWc5cO3nMwQliA0cDYCA4EhUkzkhbsQ17BBKHRZYkN-dV0IwucLHzaCiwpK1MjuDguDwHhYODIUH0QIJJ1jH9E1GZdnFmWQImwtdcPJS4COZe492rUpyMFQYELlH9gmRFxdAsac1TGWifD8NU9WklwZn0HCjTw7jrkI7JKH+VA6B+SAhPvbREHlFU40HGwfDGJjkMxWQ0J8J8rBMAJDECTTCy4rdzXLRlrSIkSg2E0MrMIGz-HsrVgiclZlUIGScWXNijBjAxfI3YtKWvBl+JeMz4KolZdE86KbE8iSLFmGMFWWOMfxxVr5ycZxzH1Y4tP8-LAsKx59ygAyjJMiASsoiykqfCZWP0WQ7AOeVEvncZ0KiDZ4zsQwohy408p4m1iOINhMF+MA8DASawumqJZoWp9FtFQwVq-EwLFVdCs0larbCsfVYiAA */
  id: 'payments',
  context: {
    registration: formInitialValues,
    cardAdditionalInfo,
  },
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
      type: 'final',
    },
  },
})

export const PaymentsMachineContext = createActorContext(paymentsMachine)
