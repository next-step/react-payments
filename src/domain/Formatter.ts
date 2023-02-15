export default class Formatter {
  static formatCardNumber(cardNumber: string): string {
    const splitCardNumber: string[] = cardNumber.match(/[0-9*]{1,4}/g);

    if (!splitCardNumber) return '';
    return splitCardNumber
      .map((item, index) => (
        index > 1 ? item.replace(/[0-9]/g, '*') : item
      )).join('-');
  }
}