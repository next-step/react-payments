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
export const checkPassword = (string: string): string => {
  let newString = string.replace(/[^0-9]/g, ""); //숫자만 받기
  if (string.length > 1) return "*";
  return newString.replaceAll(/[0-9]/g, "*");
};

export const checkOwnerName = (string: string): string => {
  if (string.length > 30) return string.slice(0, 30);

  return string;
};
