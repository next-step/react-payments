export const addSeparatorsToNumber = (
  str: string,
  separator: string,
  sectionLength: number
) => {
  const chunks = str.match(new RegExp(`.{1,${sectionLength}}`, 'g')) || [];
  return chunks.join(separator);
};

export const SEPARATOR = ' / ';
export const addSeparator = (str: string) =>
  addSeparatorsToNumber(str, SEPARATOR, 2);

export const DASH = ' - ';
const CardNumberSectionLength = 4;

export const addCardNumberDashes = (str: string) =>
  addSeparatorsToNumber(str, DASH, CardNumberSectionLength);

const replaceCardNumber = (replaceStr: string) => (str: string) => {
  const visibleSectionCount = 2;
  if (str.length <= visibleSectionCount * CardNumberSectionLength) return str;
  return str
    .split(DASH)
    .map((v, i) => {
      if (i === 2 || i === 3) return replaceStr.repeat(v.length);
      return v;
    })
    .join(DASH);
};

export const replaceCardNumberToDot = replaceCardNumber('•');

export const replaceCardNumberToO = replaceCardNumber('o');
