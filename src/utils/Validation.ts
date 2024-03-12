export function isValidNumber(limit: number, value: string) {
  const numberRegex = new RegExp(`^(?:[0-9]{1,${limit}})$`);

  return numberRegex.test(value);
}

export function isValidLength(limit: number, value: string) {
  return value.length <= limit;
}

export function isValidMonth(value: string) {
  return Number(value) >= 1 && Number(value) <= 12;
}
