import type { InputElement } from '@/contexts/types';
import { TCardNumber } from '@/types';
import { isNil } from '@/utils';

export class CardNumberInputElement implements InputElement {
  value?: TCardNumber;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value || value.length !== 4) {
      return '카드 번호 4자리를 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 4;
  }

  constructor({ value, ref }: Partial<CardNumberInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TCardNumber) {
    if (typeof value !== 'string') {
      console.error('받은 value : ', value);
      throw new Error('CardNumber의 value가 string 형태가 아닙니다.');
    }
  }
}
