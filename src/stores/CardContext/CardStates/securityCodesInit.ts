import type { SecurityCodesState } from './types';
import { attachCommonInputObjectProperty } from './utils';

export const securityCodesInit: SecurityCodesState = [
  attachCommonInputObjectProperty({
    key: 'card-security-code',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 3;
    },
    checkIsAllowInput: (input) => !input || input.length <= 3,
    getInvalidMessage() {
      if (this.checkIsValid()) return null;
      return '보안코드 3자리를 입력해주세요.';
    },
    getPOJO() {
      return { value: this.value };
    },
  }),
];
