export function getLocalStorageKeyByCardNumber(cardNumber) {
  const cardNumberString = Object.values(cardNumber).join("_");
  return "card_" + cardNumberString;
}
