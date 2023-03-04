import { ActionType } from "./actionTypes";
import { CardInfo } from "./type";

export interface DefaultValueState {
  cardList: CardInfo[];
  newCard: CardInfo;
}

export const defaultValue: DefaultValueState = {
  cardList: [],
  newCard: {} as CardInfo,
};

function PaymentsReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case "ADD_CARD_INFO": {
      const { newCard } = action;

      return {
        ...state,
        cardList: [...state.cardList, newCard],
        newCard,
      };
    }

    case "UPSERT_CARD_NICK_NAME": {
      const { cardNickName, id } = action;

      const cardList = state.cardList.map((card) => {
        if (id === card.id) {
          card.cardNickName = cardNickName ? cardNickName : "별칭";
        }
        return card;
      });

      return {
        ...state,
        cardList,
      };
    }
    case "DELETE_CARD": {
      const { id } = action;

      const cardList = state.cardList.filter((card) => card?.id !== id);
      return {
        ...state,
        cardList,
      };
    }
    default:
      throw new Error();
  }
}

export default PaymentsReducer;
