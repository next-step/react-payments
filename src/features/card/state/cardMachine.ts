import { assign, setup } from "xstate";
import { v4 as uuidv4 } from "uuid";

import { CardInfo } from "features/card/types/card.type";

const initialCardInfo: CardInfo = {
  id: "",
  cardName: "",
  cardType: "",
  cardNumber1: "",
  cardNumber2: "",
  cardNumber3: "",
  cardNumber4: "",
  expireDate: "",
  cardOwner: "",
  cvc: "",
  firstPassword: "",
  secondPassword: "",
};

export const cardMachine = setup({
  types: {} as {
    context: {
      step: string;
      card: CardInfo;
      cardList: CardInfo[];
      showCardTypeDialog: boolean;
    };
    events:
      | { type: "INITIALIZE" }
      | { type: "SET_STEP"; value: string }
      | { type: "SET_CARD_INFO"; value: string; field: string }
      | { type: "TOGGLE"; value: boolean }
      | { type: "CONFIRM"; value: CardInfo }
      | { type: "SELECT_CARD"; value: string }
      | { type: "DELETE"; value: CardInfo };
  },
}).createMachine({
  id: "card",
  context: {
    step: "addCard",
    card: initialCardInfo,
    cardList: [] as CardInfo[],
    showCardTypeDialog: false,
  },
  on: {
    INITIALIZE: {
      actions: assign({
        card: initialCardInfo,
      }),
    },
    SET_CARD_INFO: {
      actions: assign({
        card: ({ context, event }) => {
          return { ...context.card, [event.field]: event.value };
        },
      }),
    },
    SET_STEP: {
      actions: assign({
        step: ({ event }) => event.value,
      }),
    },
    CONFIRM: {
      actions: [
        assign({
          cardList: ({ context, event }) => {
            const existCardIndex = context.cardList.findIndex(
              (card) => card.id === event.value.id
            );

            if (existCardIndex !== -1) {
              return context.cardList.map((card, index) =>
                index === existCardIndex
                  ? { ...card, cardName: event.value.cardName }
                  : card
              );
            }

            const newCardItem = {
              ...event.value,
              id: uuidv4(),
              cardName: context.card.cardName || context.card.cardType,
            };

            return [newCardItem, ...context.cardList];
          },
        }),
      ],
    },
    TOGGLE: {
      actions: [
        assign({
          showCardTypeDialog: ({ event }) => event.value,
        }),
      ],
    },
    SELECT_CARD: {
      actions: [
        assign({
          card: ({ context, event }) => {
            return (
              context.cardList.find((card) => card.id === event.value) ||
              context.card
            );
          },
          step: "addCardSuccess",
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
