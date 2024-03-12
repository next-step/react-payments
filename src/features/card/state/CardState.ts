import { assign, createMachine } from "xstate";

export const cardMachine = createMachine({
  id: "card",
  initial: "empty",
  context: {
    cardInfo: [
      {
        cardName: "",
        cardNumber1: "",
        cardNumber2: "",
        cardNumber3: "",
        cardNumber4: "",
        expireDate: "",
        cardOwner: "",
        cvc: "",
        firstPassword: "",
        secondPassword: "",
      },
    ],
  },
  states: {
    empty: {
      on: {
        ADD_CARD: {
          target: "list",
          actions: "addCard",
        },
      },
    },
    confirm: {
      on: {
        CONFIRM_CARD: {
          target: "list",
          actions: "confirmCard",
        },
      },
    },
    selection: {
      on: {
        SELECT_CARD: {
          target: "list",
          actions: "selectCard",
        },
      },
    },
    delete: {
      on: {
        DELETE_CARD: {
          target: "list",
          actions: "deleteCard",
        },
      },
    },
  },
  actions: {
    addCard: assign({
      cardInfo: (context, payload) => {
        const copyContext = context;

        if (payload.type === "ADD_CARD") {
          copyContext.cardInfo.push(payload.cardInfo);
        }
      },
    }),
  },
});
