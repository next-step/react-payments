import type { InputElement } from '@/contexts/types';
import { changeStringNumberToNumber, isNil, getYearFormatYY } from '@/utils';

export class ExpireYearInputElement implements InputElement {
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

    const numberedYear = changeStringNumberToNumber(value) as number;
    const currentYearYY = getYearFormatYY();
    if (numberedYear <= currentYearYY) {
      return `${currentYearYY}년 이후 연도를 입력해주세요.`;
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 2;
  }

  constructor({ value, ref }: Partial<ExpireYearInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}
