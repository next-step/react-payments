import type { IInputState, IInputElement } from '@/stores/types';

export type TCardNicknameState = IInputState;

export class CardNicknameInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (!value) {
      return '닉네임을 입력해주세요.';
    }
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
