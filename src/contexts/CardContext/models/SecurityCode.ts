import type { InputElement } from '@/contexts/types';
import { TSecurityCode } from '@/types';
import { isNil } from '@/utils';

export class SecurityCodeInputElement implements InputElement {
  value?: TSecurityCode;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value || value.length !== 3) {
      return '보안번호 3자리를 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 3;
  }

  constructor({ value, ref }: Partial<SecurityCodeInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TSecurityCode) {
    if (isNil(value)) return;
    if (typeof value !== 'string') {
      console.error('받은 value : ', value);
      throw new Error('Security의 value가 string 형태가 아닙니다.');
    }
  }
}
