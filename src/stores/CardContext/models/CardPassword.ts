import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TCardPasswordState = IInputState;

export class CardPasswordInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null = null;

  index: number;

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

  constructor({ value, ref, index = 0 }: Partial<CardPasswordInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.index = index;
    this.ref = ref;
  }
}

// import type { PasswordsState } from './types';
// import { attachCommonInputObjectProperty } from './utils';

// export const passwordsInit: PasswordsState = [
//   attachCommonInputObjectProperty({
//     key: 'card-password-first',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length < 2;
//     },
//     checkIsAllowInput: (input) => !input || input.length < 2,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '비밀번호 앞자리 2자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
//   attachCommonInputObjectProperty({
//     key: 'card-password-second',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length < 2;
//     },
//     checkIsAllowInput: (input) => !input || input.length < 2,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '비밀번호 앞자리 2자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
// ];
