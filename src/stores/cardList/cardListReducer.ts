/* eslint-disable no-case-declarations */
import { Reducer } from "react";
import { v1 as uuid } from "uuid";

import { cardLocalStorageKey } from "../../constants/storageKey";
import { UnionActionTypeOfCardListAction } from "./cardListActions";
import CardListActionType from "./cardListActionType";
import type { CardMap } from "../../@types";

const cardListReducer: Reducer<CardMap, UnionActionTypeOfCardListAction> = (state, action) => {
  switch (action.type) {
    case CardListActionType.GET_CARD_LIST:
      console.log("hey");
      return {
        ...state,
        ...JSON.parse(localStorage.getItem(cardLocalStorageKey) ?? "{}"),
      };
    case CardListActionType.ADD_CARD:
      const id = uuid();
      const addedState = {
        ...state,
        [id]: {
          ...action.payload.card,
          id,
          createdAt: Date.now(),
        },
      };
      localStorage.setItem(cardLocalStorageKey, JSON.stringify(addedState));

      return addedState;
    case CardListActionType.UPDATE_CARD_NAME:
      const updatedState = {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          cardName: action.payload.cardName,
        },
      };
      localStorage.setItem(cardLocalStorageKey, JSON.stringify(updatedState));

      return updatedState;
    case CardListActionType.DELETE_CARD:
      const deletedState = { ...state };
      delete deletedState[action.payload.id];
      localStorage.setItem(cardLocalStorageKey, JSON.stringify(deletedState));

      return deletedState;
    default:
      return state;
  }
};

export default cardListReducer;
