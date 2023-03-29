import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TCardPasswordState = IInputState;

export class CardPasswordInputElement implements IInputElement {
  value?: string | undefined;

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
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}
