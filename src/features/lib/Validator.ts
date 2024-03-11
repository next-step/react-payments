export class Validator {
  static checkIsValidExpirationDateMM(MM: string) {
    return /^(?:[1-9]|1[0-2])$/.test(MM);
  }

  static checkIsNumberParsableString(string: string) {
    return /^\d+$/.test(string);
  }

  static checkIsValidLength(value: string, length: number) {
    return value.length <= length;
  }
}
