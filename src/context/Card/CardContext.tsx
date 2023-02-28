import { createContext, useReducer } from "react";
import { CardType } from "types";

const ACTION_TYPES = {
  add: "ADD",
  addStore: "ADD_STORE",
  remove: "REMOVE",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return {
        list: [...state.list, { ...action.payload }],
        store: "",
      };
    case ACTION_TYPES.addStore:
      state.store = action.payload;
      return state;

    case ACTION_TYPES.remove:
      const newCardList = state.list.filter((card: CardType) => card.id !== action.payload.id);
      return {
        list: newCardList,
        store: "",
      };

    default:
      return state;
  }
};

// 카드 목록이 담겨있는 list,
type DEFAULT_STATE_TYPE = {
  list: [];
  store: CardType;
};

const DEFAULT_STATE: DEFAULT_STATE_TYPE = {
  list: [],
  store: {
    cardNumbers: "",
    expireDate: {
      month: "",
      year: "",
    },
    password: {
      one: "",
      two: "",
    },
    cvc: "",
    ownerName: "",
    color: "",
    company: "",
    alias: "",
    id: "",
  },
};

export const CardContext = createContext({
  state: DEFAULT_STATE,
  addCard: function (card: CardType) {},
  addCardToStore: function (card: CardType) {},
  removeCard: function (card: CardType) {},
});

export const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  // 카드 리스트에 추가
  const addCard = (card: CardType) => {
    dispatch({ type: ACTION_TYPES.add, payload: card });
  };

  // store에 카드를 임시저장
  const addCardToStore = (card: CardType) => {
    dispatch({ type: ACTION_TYPES.addStore, payload: card });
  };

  // 카드 삭제
  const removeCard = (card: CardType) => {
    dispatch({ type: ACTION_TYPES.remove, payload: card });
  };

  const context = {
    state: state,
    addCard,
    addCardToStore,
    removeCard,
  };
  return <CardContext.Provider value={context}>{children}</CardContext.Provider>;
};
