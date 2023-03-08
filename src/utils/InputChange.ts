export const changeCardNumber = (string: string): string => {
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
export const changeCardSecurityInput = (string: string) => {
  const newString = string.replace(/[^0-9\*]/g, ""); //숫자 or *
  return newString.replaceAll(/[0-9]/g, "*");
};
export const changeMonth = (string: string) => {
  if (string.length > 2) return string[0] + string[1];
  const newString = string.replace(/[^0-9\/]/g, ""); //숫자만 받기
  const month = parseInt(newString);
  if ((newString.length === 2 && month > 12) || (newString[1] === "0" && month < 10)) {
    return "";
  }
  return newString;
};
export const changeYear = (string: string) => {
  if (string.length > 2) return string[0] + string[1];
  const newString = string.replace(/[^0-9\/]/g, ""); //숫자만 받기
  const year = parseInt(newString);
  if (newString.length === 2 && year === 0) {
    return "";
  }
  return newString;
};
export const changePassword = (string: string): string => {
  const newString = string.replaceAll(/[^0-9]/g, ""); //숫자만 받기
  if (newString.length >= 1) {
    return "*";
  }
  return string.includes("*") ? "*" : "";
};

export const changeOwnerName = (string: string): string => {
  return string.length > 10 ? string.slice(0, 10) : string;
};
export const changeAliasLength = (string: string): string => {
  return string.length > 10 ? string.slice(0, 10) : string;
};
