export default class Filter {
  static cardNumber(cardNumber: string): string {
    return cardNumber?.match(/[0-9*]{1,4}/g)?.flatMap((item, index) => {
      if (!item.length) return [];
      if (index > 1) return item.replace(/[0-9]/g, '*');

      return item;
    }).join('-');
  }

  static expiredDate(expiredDate: string): string {
    return expiredDate?.match(/[0-9]{1,2}/g)?.join(' / ');
  }

  static onlyNumber(text: string): string {
    return text.replace(/[^0-9]/g, '');
  }

  static onlyString(text: string): string {
    return text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, '');
  }

  static formToArray(data: object[]): string[] {
    return Object.values(data).map((item) => item.value);
  }
}