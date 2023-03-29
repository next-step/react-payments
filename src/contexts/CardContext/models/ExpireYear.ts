import type { InputElement } from '@/contexts/types';
import { TExpireYear } from '@/types';
import { convertStringToNumber, isNil, getYearFormatYY } from '@/utils';

export class ExpireYearInputElement implements InputElement {
  value?: TExpireYear;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value) {
      return '만료 연도를 입력해주세요.';
    }

    const numberedYear = convertStringToNumber(value) as number;
    const currentYearYY = getYearFormatYY();
    if (numberedYear <= currentYearYY) {
      return `${currentYearYY}년 이후 연도를 입력해주세요.`;
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 2;
  }

  constructor({ value, ref }: Partial<ExpireYearInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TExpireYear) {
    if (isNil(value)) return;
    if (typeof value !== 'string') {
      console.error('받은 value : ', value);
      throw new Error('ExpireYear의 value가 string 형태가 아닙니다.');
    }
  }
}
