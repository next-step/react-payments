import { MONTH, YEAR } from "../constants/expirationDate";

const CARD_LIST = "cardList";
export class CardStorage {
  static addCard({
    cardNumber,
    cardOwnerName,
    expirationDate,
    password,
    securityCode,
  }) {
    const cardList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];
    cardList.push({
      cardNumber,
      cardOwnerName,
      expirationDateMM: expirationDate[MONTH],
      expirationDateYY: expirationDate[YEAR],
      password,
      securityCode,
    });
    localStorage.setItem(CARD_LIST, JSON.stringify(cardList));
  }
}
