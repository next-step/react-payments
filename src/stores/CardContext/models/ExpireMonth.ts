import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TExpireMonthState = IInputState;

export class ExpireMonthInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    const numberedValue = Number(value);
    if (!(numberedValue >= 1 && numberedValue <= 12)) {
      return '1월 ~ 12월중에 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 2;
  }

  constructor({ value, ref }: Partial<ExpireMonthInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}
