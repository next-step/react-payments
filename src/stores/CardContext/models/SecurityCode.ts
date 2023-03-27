import type { IInputState, IInputElement } from '@/stores/types';

export type TSecurityCodeState = IInputState;

export class SecurityCodeInputElement implements IInputElement {
  value?: string | undefined;

  isValidate = false;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value, ref, index = 0 }: Partial<SecurityCodeInputElement>) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
    this.ref = ref;
  }
}

// import type { SecurityCodesState } from './types';
// import { attachCommonInputObjectProperty } from './utils';

// export const securityCodesInit: SecurityCodesState = [
//   attachCommonInputObjectProperty({
//     key: 'card-security-code',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length === 3;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 3,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '보안코드 3자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
// ];
