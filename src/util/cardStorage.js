const CARD_LIST = "cardList";

export function getLocalStorageKeyByCardNumber(cardNumber) {
  const cardNumberString = Object.values(cardNumber).join("_");
  return "card_" + cardNumberString;
}

export class CardStorage {
  static getCardInfoList() {
    const cardKeyList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];

    return cardKeyList.map((cardKey) => {
      return JSON.parse(localStorage.getItem(cardKey));
    });
  }

  /**
   * 카드 추가하기
   * @param {*} cardInfo
   */
  static addCard(cardInfo) {
    const cardList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];

    const key = getLocalStorageKeyByCardNumber(cardInfo.cardNumber);
    cardList.push(key);

    localStorage.setItem(key, JSON.stringify(cardInfo));
    localStorage.setItem(CARD_LIST, JSON.stringify(cardList));
  }

  /**
   * 카드 정보 수정
   * @param {*} cardNumber
   * @param {*} attrName
   * @param {*} attrValue
   */
  static changeCardInfo(cardNumber, attrName, attrValue) {
    const key = getLocalStorageKeyByCardNumber(cardNumber);

    const cardInfo = JSON.parse(localStorage.getItem(key));
    cardInfo[attrName] = attrValue;

    localStorage.setItem(key, JSON.stringify(cardInfo));
  }
}
