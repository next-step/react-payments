import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TSecurityCodeState = IInputState;

export class SecurityCodeInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value || value.length !== 3) {
      return '보안번호 3자리를 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 3;
  }

  constructor({ value, ref }: Partial<SecurityCodeInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
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
