import type { InputElement } from '@/contexts/types';

export class CardNicknameInputElement implements InputElement {
  value?: string | undefined;

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
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}
