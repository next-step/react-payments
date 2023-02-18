export function isNumber(variable: string) {
  return (
    variable !== undefined &&
    variable !== null &&
    !Number.isNaN(Number(variable))
  );
}
