import React, { Dispatch, PropsWithChildren, useMemo, useReducer } from "react";

import type { CardInfo } from "@/components/cards/Card/Card";
import { CONTEXT_ERROR_MESSAGES } from "@/constants/messages/error";
import { contextFactory } from "@/helper";

export type CardItem = { id: string; color: string } & CardInfo;

type CardAction =
  | {
      type: "ADD_CARD";
      payload: CardItem;
    }
  | {
      type: "UPDATE_CARD";
      payload: { id: string; newInfo: CardInfo & { color: string } };
    };

type CardsDispatch = Dispatch<CardAction>;

const [CardsContext, useCardsContext] = contextFactory<{
  value: CardItem[];
  dispatch: CardsDispatch;
}>();

export { useCardsContext };

const initialState: CardItem[] = [];

function cardCrudReducer(prevState: CardItem[], action: CardAction) {
  switch (action.type) {
    case "ADD_CARD": {
      return [...prevState, action.payload];
    }
    case "UPDATE_CARD": {
      const id = action.payload.id;

      const updateCardIndex = prevState.findIndex((item) => item.id === id);

      return [
        ...prevState.slice(0, updateCardIndex),
        { id, ...action.payload.newInfo },
        ...prevState.slice(updateCardIndex + 1),
      ];
    }
    default:
      throw new Error(CONTEXT_ERROR_MESSAGES.UNDEFINED_ACTION);
  }
}

export default function CardsContextProvider({ children }: PropsWithChildren) {
  const [cards, dispatch] = useReducer(cardCrudReducer, initialState);

  const value = useMemo(
    () => ({
      value: cards,
      dispatch,
    }),
    [cards]
  );

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}
