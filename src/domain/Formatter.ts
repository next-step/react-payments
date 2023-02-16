export default class Formatter {
  static cardNumber(cardNumber: string[]): string {
    return cardNumber.flatMap((item, index) => {
      if (!item.length) return [];

      if (index > 1) return item.replace(/[0-9]/g, '*');
      return item;
    }).join('-');
  }

  static expiredDate(expiredDate: string): string {
    return expiredDate.match(/[0-9]{1,2}/g)?.join('/');
  }

  static onlyNumber(text: string): string {
    return text.replace(/[^0-9]/g, '');
  }
}