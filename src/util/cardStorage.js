const CARD_LIST = "cardList";

function getLocalStorageKeyByCardNumber(cardNumber) {
  const cardNumberString = Object.values(cardNumber).join("_");
  return "card_" + cardNumberString;
}
export class CardStorage {
  static addCard(cardInfo) {
    const cardList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];

    const key = getLocalStorageKeyByCardNumber(cardInfo.cardNumber);
    cardList.push(key);

    localStorage.setItem(key, JSON.stringify(cardInfo));
    localStorage.setItem(CARD_LIST, JSON.stringify(cardList));
  }
}
