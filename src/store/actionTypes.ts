import { CardInfo } from "./type";

type AddCardInfo = { type: "ADD_CARD_INFO"; newCard: CardInfo };

type EditCard = {
  type: "UPSERT_CARD_NICK_NAME";
  cardNickName?: string;
  id?: number;
};

type DeleteCard = {
  type: "DELETE_CARD";
  id?: number;
};

export type ActionType =
  | AddCardInfo
  | EditCard
  | DeleteCard