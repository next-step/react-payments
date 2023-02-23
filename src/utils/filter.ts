export function cardNumber(cardNumber: string): string {
  const changeValue = cardNumber?.match(/[0-9*]{1,4}/g)?.flatMap((item, index) => {
    if (!item.length) return [];
    if (index > 1) return item.replace(/[0-9]/g, '*');

    return item;
  }).join('-');
  return changeValue || '';
}

export function expiredDate(expiredDate: string) {
  return expiredDate?.match(/[0-9]{1,2}/g)?.join(' / ');
}

export function onlyNumber(text: string) {
  return text.replace(/[^0-9]/g, '');
}

export function onlyString(text: string) {
  return text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, '');
}

export function formToArray(data: object): string[] {
  return Object.values(data).map((item) => item.value);
}