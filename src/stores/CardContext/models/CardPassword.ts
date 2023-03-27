import type { IInputState, IInputElement } from '@/stores/types';

export type TCardPasswordState = IInputState;

export class CardPasswordInputElement implements IInputElement {
  value?: string | undefined;

  isValidate = false;

  ref?: HTMLInputElement | null = null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value }: TCardPasswordState, index = 0) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
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
