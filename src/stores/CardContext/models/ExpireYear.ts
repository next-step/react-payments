import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TExpireYearState = IInputState;

export class ExpireYearInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value) {
      return '만료 연도를 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 2;
  }

  constructor({ value, errorMessage, ref }: Partial<ExpireYearInputElement>) {
    this.value = value;
    this.errorMessage = errorMessage;
    this.ref = ref;
  }
}
