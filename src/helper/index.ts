export function isNumber(variable: string) {
  return variable !== null && !Number.isNaN(Number(variable));
}
