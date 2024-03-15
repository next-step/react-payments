import { createActorContext } from '@xstate/react'
import { assign, fromPromise, setup } from 'xstate'

import { cardAdditionalInfo } from './payments.const'
import { CardAdditionalInitialValues, RegistrationInitialValues } from './payments.type'

export const paymentsMachine = setup({
  types: {} as {
    context: {
      registration: RegistrationInitialValues
      cardAdditionalInfo: CardAdditionalInitialValues
    }
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
    submitting: fromPromise(async ({ input }: { input: RegistrationInitialValues }) => {
      return true
    }),
    postNickname: fromPromise(async ({ input }: { input: CardAdditionalInitialValues }) => {
      return true
    }),
  },
  actions: {},
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRACYAbAFZCATgAcAFguzDugIwmb5wwBoQ6PbN2FdAdgDM-ra+dnb65mb6AL5RbmhYuAQk5FQ09IzM6pywAK4ARphqrDhQvBAcYIR0OABubADWlbkFRdVQcopIIMgqauw4mjoI+vp2hPohjmZ2Fv6yJhZ2bh4IdmZmhLJm-gaRO4bmFoYxcRjY+ESkFNS0DEws-Vz5hXjFpWBkZGxkhMgANiwAGbfTCEZovN4dTQ9VRZQaIEZjCYOLYzOYLJbuPTWUwmPEhOyGQwOCy+XwnbpnRKXFI3dL3LKUYhsTD-MB4MC8AAKACUAKIANShXRhfQ0XSGAX8hDJ-lmXishgmvmWiGmhAseIWo3ChjMuh2FPi5ySV1StwyDw4TJZbI53IA8vxJAB9ABy4gAwgBpN0AQVEfOFylh-Xhqy2Gws9hMui1shmxNVqz1mwN-jMZNk1jMtjMRqpF2S1xwdGI9RwqGwTxarzaZQqVVqDUqMLwbrLFarYGD3V6cIliDCCcIdl85jmtn0sl862TDn0Ms1Jl8snC08MvgMBYSRbNlFL5cr1fBrRKvA+Xx+-yBIN+KnbnePPYU0P7YcHq2nYzHE5sBhnOcsVWDMfGXVd7BnVd-BMGJYhAHA2AgOBoULAg31DcVQCGSh9GTXCdxNGlrjSO5MkebgyDwDCxQGT9o2TexfHGEYlSJIxQgCcl4ONali3NelyOtU86xKGiB2wxAM2Y3RZH8Md-H0GD9EsJVGK8MC8QsfRFl0PTN2405d1NWlSMtRlAVQOg-kgcSP0khBtkXMJFhnWQthXXxXGAg0TFxLT9D8RZx3zHi0OIgSyKtThmVZGyOTsrDtDVRTRx0uw3I8slvJWNYxmXBZN3WMxY1jQi+P3Q8uxPZ4zygRK6Icuw-D8gIjjjMwtgzQx-HnTd-MKkwesjbcwuMiKDyfbsawhNpKEs6zbJFd8kqGX8-MJJTdGjLwRhsed-Bkwx3LCA1dE6wJyr3Wk-juBrw3W0clR2HaDA3echqXLS9UJbM9NCmIgA */
  id: 'payments',
  context: {
    registration: formInitialValues,
    cardAdditionalInfo,
  },
  initial: 'card-registration-start',
  states: {
    'card-registration-start': {
      on: {
        SUBMIT: {
          target: 'card-registration-submitting',
          actions: assign(({ context, event }) => {
            return {
              registration: Object.assign(context.registration, event.value),
            }
          }),
        },
      },
    },
    'card-registration-submitting': {
      invoke: {
        id: 'submitting',
        input: ({ context }) => {
          return context.registration
        },
        src: 'submitting',
        onDone: {
          target: 'card-registration-complete',
        },
        onError: {
          target: 'card-registration-failed',
        },
      },
    },
    'card-registration-failed': {
      on: {},
    },
    'card-registration-complete': {
      on: {
        PREV: {
          target: 'card-registration-start',
        },
        POST_NICKNAME: {
          target: 'card-nickname-submitting',
          actions: assign(({ context, event }) => {
            return {
              cardAdditionalInfo: Object.assign(context.cardAdditionalInfo, event.value),
            }
          }),
        },
      },
    },

    'card-nickname-submitting': {
      invoke: {
        id: 'postNickname',
        input: ({ context }) => {
          return context.cardAdditionalInfo
        },
        src: 'postNickname',
        onDone: {
          target: 'card-list',
        },
        onError: {
          target: 'card-nickname-submitting-failed',
        },
      },
    },
    'card-nickname-submitting-failed': {
      on: {},
    },
    'card-list': {
      on: {},
    },
  },
})

export const PaymentsMachineContext = createActorContext(paymentsMachine)
