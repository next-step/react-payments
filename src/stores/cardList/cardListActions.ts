import { Card, PendingCard } from "../../@types";
import { ActionTypeMap, makeActionCreator } from "../../utils/storeUtills";
import CardListActionType from "./cardListActionType";

interface AddCardPayload {
  card: PendingCard;
}

interface DeleteCardPayload {
  id: Card["id"];
}

const cardListActions = {
  getCardList: makeActionCreator(CardListActionType.GET_CARD_LIST)(),
  addCard: makeActionCreator(CardListActionType.ADD_CARD)<AddCardPayload>(),
  deleteCard: makeActionCreator(CardListActionType.DELETE_CARD)<DeleteCardPayload>(),
};

type ActionTypeOfCardListAction = ActionTypeMap<typeof cardListActions>;
type UnionActionTypeOfCardListAction = ActionTypeOfCardListAction[keyof ActionTypeOfCardListAction];

export default cardListActions;
export { UnionActionTypeOfCardListAction };
