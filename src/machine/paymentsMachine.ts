import { createMachine, assign } from 'xstate';

export const paymentMachine = createMachine({
  id: 'payment',
  initial: 'cardList',
  context: {
    data: {
      cardList: [],
      tempCard: null,
    },
  },
  states: {
    cardList: {
      on: {
        ADD_CARD: 'addCard',
      },
    },
    addCard: {
      on: {
        ADD_CARD_COMPLETE: {
          target: 'addCardComplete',
          actions: assign({
            data: (context: any, event: any) => {
              if (!context.data) return;

              return {
                ...context.data,
                tempCard: event.tempCard,
              };
            },
          }),
        },
      },
    },
    addCardComplete: {
      on: {
        CARD_LIST: 'cardList',
      },
    },
  },
});
