export const regex = {
  onlyNumber: /^[0-9]+$/,
  month: /^(0|0?[1-9]|1[0-2])?$/,
  year: /^$|^(0|[1-9]?[0-9])$/,
};

export function isOverLengthToLimitation(word: string, limitation: number) {
  return word.length > limitation;
}

export function isNumberFromString(number: string) {
  return regex.onlyNumber.test(number);
}

export function compareShallowValues<T>(obj1: T, obj2: T) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
