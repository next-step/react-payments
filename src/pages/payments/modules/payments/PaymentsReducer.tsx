import { CardInput } from "components/common/Card/card.type";
import {
  ActionType,
  ADD_CARD,
  ADD_CARD_INFO,
  DELETE_CARD,
  EDIT_CARD,
  SelectedCardInfo,
  SET_SELECTED_CARD,
} from "pages/payments/modules/payments/PaymentsActionType";

export const defaultCardInfo: CardInput = {
  id: "1",
  title: "클린카드",
  number: "1111-2222-3333-4444",
  name: "YUJO",
  expiry: "10/25",
  nickname: "법인카드",
  cvc: "123",
  firstPassword: "1",
  secondPassword: "2",
  backgroundColor: "#94dacd",
};

export interface DefaultValueState {
  cardList: CardInput[];
  newCardInfo: CardInput;
  selectedCard: SelectedCardInfo;
}

export const defaultValue: DefaultValueState = {
  cardList: [defaultCardInfo],
  newCardInfo: {},
  selectedCard: null,
};

function PaymentsReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_CARD_INFO: {
      const { newCardInfo } = action;

      return {
        ...state,
        newCardInfo,
      };
    }
    case ADD_CARD: {
      const { nickname } = action;

      const newCard = {
        ...state.newCardInfo,
        nickname: nickname || state.newCardInfo.title,
      };
      return {
        ...state,
        cardList: [newCard, ...state.cardList],
        newCardInfo: {},
      };
    }
    case EDIT_CARD: {
      const { nickname } = action;

      const cardList = state.cardList.map((card) => {
        if (card.id === state?.selectedCard?.id) {
          return {
            ...state.selectedCard,
            nickname,
          };
        }
        return card;
      });

      return {
        ...state,
        cardList,
        selectedCard: {},
      };
    }
    case DELETE_CARD: {
      const { id } = action;

      const cardList = state.cardList.filter((card) => card?.id !== id);
      return {
        ...state,
        cardList,
      };
    }
    case SET_SELECTED_CARD: {
      const { selectedCard } = action;
      return {
        ...state,
        selectedCard,
      };
    }
    default:
      throw new Error("처리되지 않은 action 입니다.");
  }
}

export default PaymentsReducer;
