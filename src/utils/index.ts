import { CompanyType, CardFormType } from "types";
export const checkCardNumber = (string: string): string => {
  let newString = string.replace(/[^0-9\-\*]/g, ""); //숫자만입력받기
  if (/^(\d{4})(\d)/.test(newString)) {
    newString = newString.replace(/^(\d{4})(\d)/, "$1-$2");
  }
  if (/^(\d{4}-\d{4})(\d)/.test(newString)) {
    newString = newString.replace(/^(\d{4}-\d{4})(\d)/, "$1-$2");
    newString = newString.slice(0, 10).padEnd(newString.length, "*");
  }
  // 첫번째 *
  if (/^(\d{4}-\d{4}-\*{1,3}[\d])/.test(newString)) {
    newString = newString.slice(0, 10).padEnd(newString.length, "*");
  }
  if (/^(\d{4}-\d{4})(-\*{4})[\d]/.test(newString)) {
    newString = newString.replace(/^(\d{4}-\d{4})(-\*{4})/, "$1$2-");
    newString = newString.slice(0, 15).padEnd(newString.length, "*");
  }

  if (/^(\d{4}-\d{4}-\*{4})/.test(newString)) {
    if (newString.length >= 20) return newString.slice(0, 19);
    newString = newString.slice(0, 15).padEnd(newString.length, "*");
  }
  return newString;
};
export const checkCardSecurityInput = (string: string) => {
  let newString = string.replace(/[^0-9\*]/g, ""); //숫자 or *
  return newString.replaceAll(/[0-9]/g, "*");
};
export const checkMonth = (string: string) => {
  if (string.length > 2) return string[0] + string[1];
  let newString = string.replace(/[^0-9\/]/g, ""); //숫자만 받기
  let month = parseInt(newString);
  if ((newString.length === 2 && month > 12) || (newString[1] === "0" && month < 10)) {
    return "";
  }
  return newString;
};
export const checkYear = (string: string) => {
  if (string.length > 2) return string[0] + string[1];
  let newString = string.replace(/[^0-9\/]/g, ""); //숫자만 받기
  let year = parseInt(newString);
  if (newString.length === 2 && year === 0) {
    return "";
  }
  return newString;
};
export const changePassword = (string: string): string => {
  let newString = string.replaceAll(/[^0-9]/g, ""); //숫자만 받기
  if (newString.length >= 1) {
    return "*";
  }
  return string.includes("*") ? "*" : "";
};

export const checkOwnerName = (string: string): string => {
  return string.length > 30 ? string.slice(0, 30) : string;
};
export const checkAliasLength = (string: string): string => {
  return string.length > 10 ? string.slice(0, 10) : string;
};

export const checkCardFormValidation = (form: CardFormType): boolean => {
  const { month, year } = form.expireDate;

  try {
    if (!isValidexpirationDate(month, year)) throw new Error("카드 번호가 올바른지 확인하세요 ! ");
    if (!isValidCompany(form.company)) throw new Error("카드를 선택해 주세요!");
    if (!isValidOwnerName(form.ownerName)) throw new Error("소유자 이름을 작성해주세요!");
    if (!isValidCardNumber(form.cardNumbers)) throw new Error("카드번호가 올바르지 않습니다!");
  } catch (error) {
    // Todo : 나중에 타입 다시처리 스토리북먼저
    alert(error);
    return false;
  }

  return true;
};

const isValidexpirationDate = (month: string, year: string) => {
  return month.length === 2 && year.length == 2;
};
const isValidCompany = (company: string) => {
  return company.length;
};
const isValidOwnerName = (owenerName: string) => {
  return owenerName.length;
};
const isValidCardNumber = (cardNumber: string) => {
  return cardNumber.length === 19;
};

export const initialCardFormState: CardFormType = {
  cardNumbers: "",
  expireDate: {
    month: "MM",
    year: "YY",
  },
  password: {
    one: "",
    two: "",
  },
  cvc: "",
  ownerName: "empty",
  color: "",
  company: "",
};
