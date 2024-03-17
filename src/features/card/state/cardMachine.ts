import { assign, setup } from "xstate";
import { v4 as uuidv4 } from "uuid";

import { CardInfo } from "features/card/types/card.type";

export const cardMachine = setup({
  types: {} as {
    context: {
      step: string;
      card: CardInfo;
      cardList: CardInfo[];
    };
    events:
      | { type: "INITIALIZE" }
      | { type: "STEP"; value: string }
      | { type: "SET_CARD_NUMBER"; field: string; value: string }
      | { type: "SET_EXPIRE_DATE"; value: string }
      | { type: "SET_CARD_OWNER"; value: string }
      | { type: "SET_CARD_CVC"; value: string }
      | { type: "SET_CARD_PASSWORD"; field: string; value: string }
      | { type: "CONFIRM"; value: CardInfo }
      | { type: "DELETE"; value: CardInfo };
  },
}).createMachine({
  id: "card",
  context: {
    step: "addCard",
    card: {
      id: "",
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
    } as CardInfo,
    cardList: [] as CardInfo[],
  },
  on: {
    INITIALIZE: {
      actions: assign({
        card: {
          id: "",
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
      }),
    },
    STEP: {
      actions: assign({
        step: ({ event }) => event.value,
      }),
    },
    SET_CARD_NUMBER: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, [event.field]: event.value };
        },
      }),
    },
    SET_EXPIRE_DATE: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, expireDate: event.value };
        },
      }),
    },
    SET_CARD_OWNER: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, cardOwner: event.value };
        },
      }),
    },
    SET_CARD_CVC: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, cvc: event.value };
        },
      }),
    },
    SET_CARD_PASSWORD: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, [event.field]: event.value };
        },
      }),
    },
    CONFIRM: {
      actions: [
        assign({
          cardList: ({ context, event }) => {
            const newCardInfoWithId = { ...event.value, id: uuidv4() };
            return [newCardInfoWithId, ...context.cardList];
          },
        }),
      ],
    },
    DELETE: {
      actions: assign({
        cardList: ({ context, event }) => {
          return context.cardList.filter((card) => card.id !== event.value.id);
        },
      }),
    },
  },
});
