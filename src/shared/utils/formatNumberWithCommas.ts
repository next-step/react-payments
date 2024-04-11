export const formatNumberWithCommas = (number: number): string => {
  const digits = number.toString().split('');
  const reversedDigits = digits.reverse();
  const commaInsertedDigits = insertCommasEveryThreeDigits(reversedDigits);

  return commaInsertedDigits.reverse().join('');
};

const insertCommasEveryThreeDigits = (digits: string[]): string[] => {
  const commaInsertedDigits = [...digits];
  let commaPosition = 3;

  while (commaPosition < commaInsertedDigits.length) {
    commaInsertedDigits.splice(commaPosition, 0, ',');
    commaPosition += 4;
  }

  return commaInsertedDigits;
};
