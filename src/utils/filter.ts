export function filterCardNumber(cardNumber: string): string {
  const changeValue = cardNumber?.match(/[0-9*]{1,4}/g)?.flatMap((item, index) => {
    if (!item.length) return [];
    if (index > 1) return item.replace(/[0-9]/g, '*');

    return item;
  }).join('-');
  return changeValue || '';
}

export function filterExpiredDate(expiredDate: string) {
  return expiredDate?.match(/[0-9]{1,2}/g)?.join(' / ');
}

export function formToArray(data: object): string[] {
  return Object.values(data).map((item) => item.value);
}