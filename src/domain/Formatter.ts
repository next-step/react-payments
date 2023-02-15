export default class Formatter {
  static formatCardNumber(cardNumber: string[]): string {
    return cardNumber.flatMap((item, index) => {
      if (!item.length) return [];

      if (index > 1) return item.replace(/[0-9]/g, '*');
      return item;
    }).join('-');
  }
}