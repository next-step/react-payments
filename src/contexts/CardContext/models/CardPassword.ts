import type { InputElement } from '@/contexts/types';
import { TCardPassword } from '@/types';
import { isNil } from '@/utils';

export class CardPasswordInputElement implements InputElement {
  value?: TCardPassword;

  errorMessage?: string;

  ref?: HTMLInputElement | null = null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value) {
      return '비밀번호를 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 1;
  }

  constructor({ value, ref }: Partial<CardPasswordInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TCardPassword) {
    if (isNil(value)) return;
    if (typeof value !== 'string') {
      console.error('받은 value : ', value);
      throw new Error('CardPassword의 value가 string 형태가 아닙니다.');
    }
  }
}
