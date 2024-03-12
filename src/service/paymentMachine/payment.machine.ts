import { assign, fromPromise, setup } from 'xstate'

import { formInitialValues } from '@/pages/payments/cards/const'

export const paymentsMachine = setup({
  types: {} as {
    context: { registration: typeof formInitialValues }
    events:
      | {
          type: 'SUBMIT'
          value: typeof formInitialValues
        }
      | {
          type: 'PREV'
        }
  },
  actors: {
    submitting: fromPromise(async ({ input }: { input: typeof formInitialValues }) => {
      return true
    }),
  },
  actions: {},
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRACYAbAFZCATgAcAFgDMAdkMAaEOkRmAjIUO6r1mxZP+AkwBfIMc0LFwCEnIqGnpGZnVOWABXACNMNVYcKF4IDjBCOhwANzYAa0LUjKziqDlFJBBkFTV2HE0dBH19d1lZKxNPWQMrfRtdR2cEVxt3fVlDC30zOxCwjGx8IlIKaloGJhZ2rnTMvGzcsDIyNjJCZAAbFgAzO8xCavPLhs0W1SSnUQPXmcxMi0Ms0MNjcU0QJncvkCyIC62am0iOxi+3iRySlGIbEwTzAeDAvAACgAlACiADVfk1-m0NE0ujYrLJCPpdGYTGMbONobCnIhOVyrLoBq5dIYQqEQDg2BA4H8Mds-q1AWzEJR9HCEHq0eEtlFdrEDgljhwuHgeJqAe0gQgLJNRTNXFZCLIzFY-f6A1ZXMb1WbsXFDokTl9ajkHSyOjqEFYzPpvQN+eMhTDXAa3CGIttonsI1b8S9UHRHpB49rQF1fWnXPoLLJ+bIoTmDeDCEiUciC6asSXLXiToTidWybWnUnG4Rm63252RdNm2mzG2+YZfYHg-KgA */
  id: 'payments',
  context: {
    registration: formInitialValues,
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
      },
    },
  },
})
