import { getLocalStorageKeyByCardNumber } from "../util/cardStorage";
import { CARD_LIST } from "../constants/cardNumber";

export const useLocalStorage = () => {
  const getCardInfoList = () => {
    const cardKeyList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];

    return cardKeyList.map((cardKey) => {
      return JSON.parse(localStorage.getItem(cardKey));
    });
  };

  const addCard = (cardInfo) => {
    const cardList = JSON.parse(localStorage.getItem(CARD_LIST)) || [];

    const key = getLocalStorageKeyByCardNumber(cardInfo.cardNumber);
    cardList.push(key);

    localStorage.setItem(key, JSON.stringify(cardInfo));
    localStorage.setItem(CARD_LIST, JSON.stringify(cardList));
  };

  const changeCardInfo = (cardNumber, attrName, attrValue) => {
    const key = getLocalStorageKeyByCardNumber(cardNumber);

    const cardInfo = JSON.parse(localStorage.getItem(key));
    cardInfo[attrName] = attrValue;

    localStorage.setItem(key, JSON.stringify(cardInfo));
  };

  return { getCardInfoList, addCard, changeCardInfo };
};
