import type { InputElement } from '@/contexts/types';
import { TCardOwner } from '@/types';
import { isNil } from '@/utils';

export class CardOwnerInputElement implements InputElement {
  value?: TCardOwner;

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
