import { Card, PendingCard } from "../../@types";
import { ActionTypeMap, makeActionCreator } from "../../utils/storeUtills";
import CardListActionType from "./cardListActionType";

interface AddCardPayload {
  card: PendingCard;
}

interface UpdateCardNamePayload {
  id: Card["id"];
  cardName: Card["cardName"];
}

interface DeleteCardPayload {
  id: Card["id"];
}

const cardListActions = {
  getCardList: makeActionCreator(CardListActionType.GET_CARD_LIST)(),
  addCard: makeActionCreator(CardListActionType.ADD_CARD)<AddCardPayload>(),
  updateCardName: makeActionCreator(CardListActionType.UPDATE_CARD_NAME)<UpdateCardNamePayload>(),
  deleteCard: makeActionCreator(CardListActionType.DELETE_CARD)<DeleteCardPayload>(),
};

type ActionTypeOfCardListAction = ActionTypeMap<typeof cardListActions>;
type UnionActionTypeOfCardListAction = ActionTypeOfCardListAction[keyof ActionTypeOfCardListAction];

export default cardListActions;
export { UnionActionTypeOfCardListAction };
