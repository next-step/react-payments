export function getNumberString(string) {
  const numberArray = string.match(/\d+/g) || [];
  return numberArray.join("");
}

export function getHpyenAddedNumberSting(string) {
  const splited4Array = string.match(/.{1,4}/g) || [];
  return splited4Array.join("-");
}

export function isNumericString(string) {
  return /^[0-9]+$/.test(string);
}

export function isValidateMonth(string) {
  return /^(0[1-9]|1[0-2])$/.test(string);
}
