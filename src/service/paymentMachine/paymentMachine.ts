import { setup } from 'xstate'

export const paymentsMachine = setup({}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gDoBjVAJwgFoywoBLWPM1POgex0sfLwGIA5AKIANACoBtAAwBdRCjaw6rDnJAAPRAGYAjAFZCAFgAckgwDYjAdl0AaEOkRGzhg7p0AmXQF8vdtFlwCEnIqGnpGZmVOYjZMZAAbMDwwXgAFACVBADUpWSQQZAUldhxVDQR3A0tCMzMDSTNPOwcKyW1CdwBOC2sfXxAcNgg4VX9sfHh8wsUossRKY2b59sldcytvfrHAolIKaloGJhYSrjweUaLZ-PLJJYRtAwMfPwxxoL3Qw4iTjkoYuKJZKXGYlOYISSEVaSSxGbRNeyIdyWTRQ9yaAyaXp9IA */
  id: 'payments',
  initial: 'card-registration-start',
  states: {
    'card-registration-start': {
      on: {
        NEXT: 'card-registration-complete',
      },
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
