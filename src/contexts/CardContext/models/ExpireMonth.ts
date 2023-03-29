import type { InputElement } from '@/contexts/types';
import { TExpireMonth } from '@/types';
import { isNil } from '@/utils';

export class ExpireMonthInputElement implements InputElement {
  value?: TExpireMonth;

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
