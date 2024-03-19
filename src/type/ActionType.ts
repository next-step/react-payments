import { CardInfoType, expiryDate } from "./CardInfoType";
import { cardNumber, cardPassword } from "./CardInfoType";

export type ActionType = {
  type: string;
  payload?: {
    key:
      | keyof CardInfoType
      | keyof cardNumber
      | keyof cardPassword
      | keyof expiryDate
      | string;
    value:
      | CardInfoType[keyof CardInfoType]
      | cardNumber[keyof cardNumber]
      | cardPassword[keyof cardPassword]
      | CardInfoType;
  };
};
