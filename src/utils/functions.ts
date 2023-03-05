/* eslint-disable import/prefer-default-export */
export const JsonToArr = <T>(Json: string | null) =>
  JSON.parse(Json as string) as T;

export const maskCreditNumbers = (creditNumberFormat: string) => {
  const creditNumbers = creditNumberFormat.split('-');
  return [
    ...creditNumbers.slice(0, 2),
    ...creditNumbers.slice(2, 4).map(number => '*'.repeat(number.length)),
  ];
};
