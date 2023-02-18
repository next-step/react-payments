export default function Filter() {
  function filterCardNumber(cardNumber: string): string {
    return cardNumber?.match(/[0-9*]{1,4}/g)?.flatMap((item, index) => {
      if (!item.length) return [];
      if (index > 1) return item.replace(/[0-9]/g, '*');

      return item;
    }).join('-');
  }

  function filterExpiredDate(expiredDate: string): string {
    return expiredDate?.match(/[0-9]{1,2}/g)?.join(' / ');
  }

  function onlyNumber(text: string): string {
    return text.replace(/[^0-9]/g, '');
  }

  function onlyString(text: string): string {
    return text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, '');
  }

  function formToArray(data: object[]): string[] {
    return Object.values(data).map((item) => item.value);
  }

  return {
    filterCardNumber,
    filterExpiredDate,
    onlyNumber,
    onlyString,
    formToArray,
  };
}