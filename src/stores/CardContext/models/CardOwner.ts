import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TCardOwnerState = IInputState;

export class CardOwnerInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value) {
      return '카드 소유주 이름을 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 30;
  }

  constructor({ value, ref }: Partial<CardOwnerInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}
