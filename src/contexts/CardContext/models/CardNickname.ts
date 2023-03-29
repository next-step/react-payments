import type { InputElement } from '@/contexts/types';
import { TCardNickname } from '@/types';

export class CardNicknameInputElement implements InputElement {
  value?: TCardNickname;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    return undefined;
  }

  isAllowToFocusNext() {
    return this.value?.length === 10;
  }

  constructor({ value, ref }: Partial<CardNicknameInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TCardNickname) {
    if (typeof value !== 'string') {
      console.error('받은 value : ', value);
      throw new Error('CardNickname의 value가 string 형태가 아닙니다.');
    }
  }
}
