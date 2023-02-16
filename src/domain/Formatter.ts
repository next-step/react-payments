export default class Formatter {
  static formatCardNumber(cardNumber: string[]): string {
    return cardNumber.flatMap((item, index) => {
      if (!item.length) return [];

      if (index > 1) return item.replace(/[0-9]/g, '*');
      return item;
    }).join('-');
  }

  static formatExpiredDate(expiredDate: string): string {
    return expiredDate.match(/[0-9]{1,2}/g)?.join('/');
  }
}