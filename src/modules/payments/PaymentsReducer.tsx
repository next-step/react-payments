import { CardInput } from "components/common/Card/card.type";
import {
  ActionType,
  ADD_CARD,
  ADD_CARD_INFO,
  ADD_CARD_NICKNAME,
  ADD_CARD_TYPE,
  CLEAR_CARD_INFO,
} from "modules/payments/PaymentsActionType";

export const defaultCardInfo: CardInput = {
  id: "1",
  title: "클린카드",
  number: "1111-2222-3333-4444",
  name: "YUJO",
  expiry: "10/25",
  nickname: "법인카드",
  cvc: "123",
  password1: "1",
  password2: "2",
  backgroundColor: "#94dacd",
};

export interface DefaultValueState {
  cardList: CardInput[];
  newCardInfo: CardInput;
}

export const defaultValue: DefaultValueState = {
  cardList: [defaultCardInfo],
  newCardInfo: {},
};

function PaymentsReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_CARD_INFO: {
      return {
        ...state,
      };
    }
    case ADD_CARD_TYPE: {
      return {
        ...state,
      };
    }
    case ADD_CARD_NICKNAME: {
      return {
        ...state,
      };
    }
    case ADD_CARD: {
      return {
        ...state,
      };
    }
    case CLEAR_CARD_INFO: {
      return defaultValue;
    }
    default:
      throw new Error("처리되지 않은 action 입니다.");
  }
}

export default PaymentsReducer;
