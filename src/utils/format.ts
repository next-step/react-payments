import { CardNumbers } from "./../components/Form/CardNumber";
import { BANKS } from "./../constants/bank";

const formatNumber = (number: string) => {
  return number.replaceAll(/[0-9]/g, "*");
};

export const remainOnlyNumber = (value: any) => {
  return value.replace(/[^0-9]/g, "");
};

export const blockInput = (value: string): string => {
  return value.replace(value, "");
};

export const getBankColor = (bankId: string) => {
  if (!bankId) {
    return "";
  }

  const selectedBank = BANKS.find((bank) => bank.ID === bankId);
  return selectedBank ? selectedBank.COLOR : "";
};

export const getBankName = (bankId: string) => {
  if (!bankId) {
    return "";
  }

  const selectedBank = BANKS.find((bank) => bank.ID === bankId);
  return selectedBank ? selectedBank.NAME : "";
};

export const formatCardNumber = (cardNumber: CardNumbers) => {
  const hasCardNumber = Object.values(cardNumber).some(
    (cardNumber) => cardNumber
  );
  return hasCardNumber
    ? `${cardNumber[0]}-${cardNumber[1]}-${formatNumber(
        cardNumber[2]
      )}-${formatNumber(cardNumber[3])}`
    : "";
};
