export const regex = {
  onlyNumber: /^[0-9]+$/,
};

export function isOverLengthToLimitation(word: string, limitation: number) {
  return word.length > limitation;
}

export function isNumberFromString(number: string) {
  return regex.onlyNumber.test(number);
}
