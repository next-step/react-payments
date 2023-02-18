export const SEPARATOR = ' / ';
// TODO : 추상화 필요 (addDashes 와 비슷한 로직)
export const addSeparator = (str: string) => {
  const monthTextLength = 2;
  const textLength = str.length;
  if (textLength < monthTextLength) return str;
  const formatted = str.replace(/(.{2})/g, `$1${SEPARATOR}`);
  if (textLength === monthTextLength * 2 || textLength === monthTextLength) {
    return formatted.slice(0, -SEPARATOR.length);
  }
  return formatted;
};

export const DASH = ' - ';
const CardNumberSectionLength = 4;

// TODO : 카드 넘버 도메인과 많이 의존하는 로직인데 formatter에 있어야 할까?
//  nested 된 컴포넌트안에서 사용하고 있으면, 찾기 어려워서 빼놓았다.
export const addCardNumberDashes = (str: string) => {
  const textLength = str.length;
  if (textLength < 4) return str;
  const formatted = str.replace(/(.{4})/g, `$1${DASH}`);
  if (
    textLength === CardNumberSectionLength ||
    textLength === CardNumberSectionLength * 2 ||
    textLength === CardNumberSectionLength * 3 ||
    textLength === CardNumberSectionLength * 4
  ) {
    return formatted.slice(0, -DASH.length);
  }
  return formatted;
};

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
