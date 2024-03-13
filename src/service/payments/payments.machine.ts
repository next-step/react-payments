import { assign, fromPromise, setup } from 'xstate'

import { formInitialValues } from './payments.const'

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
      | {
          type: 'NEXT'
        }
  },
  actors: {
    submitting: fromPromise(async ({ input }: { input: typeof formInitialValues }) => {
      return true
    }),
  },
  actions: {},
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIBlAKoAhALIBJACoBtAAwBdRCjaw6rDkpAAPRACYAbAFZCATgAcAFgDMJ62YCMFs7ssAaEOj2yrhXQHYrCz8TWxNZfX1bAF8o9zQsXAIScioaekZmdU5YAFcAI0w1VhwoXggOMEI6HAA3NgBrStyCouqoOUUkEGQVNXYcTR0EIxNCfT97E10nC0NdWUN9d08EezMzQlkzKx2TP3CXe30rGLiMbHwiUgpqWgYmFn6ufMK8YtKwMjI2MkJkABsWAAzH6YQjNV7vDqaHqqLKDRAjMYTKYzOYLJYePQWeybWT4qy6Rx+Wa2QynbrnRJXFK3dIPLKUYhsTAAsB4MC8AAKACUAKIANWhXVhfQ0XSGAVxfgCVmc9nssgs4wsy0QDkIhnx+MsSpx9is5NilISl2SNzS90yT2ZrP+7M5ADk+QANGQKGG9eESxCKsz6QgWIlTAL6abKtWrMyyUwhEJrXSLWZ+CnxC5Ja6pO4ZR4cJkcIF0MiYXjOt3C5Rw-oI1bWGP2RZWWS6EyGYImOWRtYxuPmKxrEwRLW6GLGnBsCBwGFUy6eqvi0BDSiYlbLvHajeblPGtPU81Z+nWvPcMh4OdigY+hBByNEvxjCJ+eYGWQBQdmVMzjO0y05xkQ1oSnPb1F0QOVjHmfstTMKUYNVLEEGfXwtWbOVIgVaMRx3L8aQtbMGSeIFUDoe0IGA6sr22CxCCOCxwgiIJZi2W86PXWRHAVMI-G2bczlNb88MPXNOFtNkOXIhdtHVQIaP0OiIjkkloK7DULDjbYByHZtP343CDytYT8xwQtiwky9QNWAdTHCJt9iscY-BXX0NRQ7VlSOAwrF4k10z0yh-nuMyawbHYxnk5xjl0Ql4JWNZcVc-F3LDY5txiIA */
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
        NEXT: {
          target: 'card-registration-confirm',
        },
      },
    },
    'card-registration-confirm': {
      on: {
        NEXT: {
          target: 'card-list',
        },
      },
    },
    'card-list': {
      on: {},
    },
  },
})
