import type { IInputState, IInputElement } from '@/types';

export type TSecurityCodeState = IInputState;

export class SecurityCodeInputElement implements IInputElement {
  value?: string | undefined;

  isValidate = false;

  ref?: HTMLInputElement | null;

  setRef?: (this: IInputElement, ref?: HTMLInputElement | null) => void;

  constructor({ isValidate, value }: TSecurityCodeState) {
    this.value = value;
    if (isValidate) this.isValidate = isValidate;
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
