export default class Validator {
  static isEnterCardNumber(cardNumberData: object, maxLength: number): boolean {
    return Object.values(cardNumberData).every((item) => item.value.length === maxLength);
  }

  static isPreviousDate(year: string, month: string): boolean {
    if (year.length < 2 || month.length < 2) {
      return true;
    }

    const frontYear = Math.floor(new Date().getFullYear() / 100);
    const date = new Date(`${frontYear}${year}/${month}`);
    const currentDate = new Date();

    return date.getTime() < currentDate.getTime();
  }
}