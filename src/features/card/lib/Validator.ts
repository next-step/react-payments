export class Validator {
  static checkIsValidPattern(value: string, pattern: RegExp) {
    return pattern.test(value);
  }

  static checkIsValidLength(value: string, length: number) {
    return value.length <= length;
  }
}
