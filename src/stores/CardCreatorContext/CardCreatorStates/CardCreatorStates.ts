import { CommonInputStateType } from '@/types';
import { isNil } from '@/utils';

import {
  CardCompanyState,
  CardNicknameState,
  CardNumbersState,
  CardOwnersState,
  ExpireDatesState,
  PasswordsState,
  SecurityCodesState,
  UnionInputState,
} from './types';

export const cardCompanyInit: CardCompanyState = attachCommonInputObjectProperty({
  key: 'card-company',
  value: undefined,
  checkIsValid() {
    const { value } = this;
    return !!value && !!value.name && !!value.theme;
  },
});

export const cardNumbersInit: CardNumbersState = [
  attachCommonInputObjectProperty({
    key: 'card-first-num',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 4;
    },
    checkIsAllowInput: (input) => !input || input.length <= 4,
  }),
  attachCommonInputObjectProperty({
    key: 'card-second-num',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 4;
    },
    checkIsAllowInput: (input) => !input || input.length <= 4,
  }),
  attachCommonInputObjectProperty({
    type: 'password',
    key: 'card-third-num',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 4;
    },
    checkIsAllowInput: (input) => !input || input.length <= 4,
  }),
  attachCommonInputObjectProperty({
    type: 'password',
    key: 'card-forth-num',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 4;
    },
    checkIsAllowInput: (input) => !input || input.length <= 4,
  }),
];

export const expireDatesInit: ExpireDatesState = [
  attachCommonInputObjectProperty({
    key: 'card-expired-month',
    value: undefined,
    placeholder: 'MM',
    checkIsValid() {
      const { value } = this;
      return !!value && value.length <= 2 && Number(value) <= 12;
    },
    checkIsAllowInput: (input) => {
      if (isNil(input) || input.length === 0) return true;

      const isInputLengthValid = input.length <= 2;
      const numberedInput = Number(input);
      const isMinNumberValid = numberedInput >= 1;
      const isMaxNumberValid = numberedInput <= 12;
      return isInputLengthValid && isMinNumberValid && isMaxNumberValid;
    },
    checkIsInputFinished() {
      return this.value?.length === 2;
    },
  }),
  attachCommonInputObjectProperty({
    key: 'card-expired-year',
    value: undefined,
    placeholder: 'YY',
    checkIsValid() {
      const { value } = this;
      return !!value && value.length <= 2;
    },
    checkIsAllowInput: (input) => !input || input.length <= 2,
    checkIsInputFinished() {
      return this.value?.length === 2;
    },
  }),
];

export const cardOwnersInit: CardOwnersState = [
  attachCommonInputObjectProperty({
    key: 'card-owner-name',
    value: undefined,
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    checkIsValid() {
      const { value } = this;
      return !!value && value.length <= 30;
    },
    checkIsAllowInput: (input) => !input || input.length <= 30,
    checkIsInputFinished() {
      return this.value?.length === 30;
    },
  }),
];

export const securityCodesInit: SecurityCodesState = [
  attachCommonInputObjectProperty({
    key: 'card-security-code',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 3;
    },
    checkIsAllowInput: (input) => !input || input.length <= 3,
  }),
];

export const passwordsInit: PasswordsState = [
  attachCommonInputObjectProperty({
    key: 'card-password-first',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length < 2;
    },
    checkIsAllowInput: (input) => !input || input.length < 2,
  }),
  attachCommonInputObjectProperty({
    key: 'card-password-second',
    value: undefined,
    checkIsValid() {
      const { value } = this;
      return !!value && value.length < 2;
    },
    checkIsAllowInput: (input) => !input || input.length < 2,
  }),
];

export const cardNicknameInit: CardNicknameState = attachCommonInputObjectProperty({
  key: 'card-nickname',
  value: undefined,
  checkIsValid() {
    const { value } = this;
    return !value || value.length <= 10;
  },
});

function attachCommonInputObjectProperty<T extends UnionInputState>(asdf: T) {
  const commonInputState: CommonInputStateType = {
    ref: null,
    setRef(ref?: HTMLInputElement | null) {
      this.ref = ref;
    },
  };

  return {
    checkIsInputFinished(): boolean {
      // @ts-ignore
      return this.checkIsValid();
    },
    ...commonInputState,
    ...asdf,
  };
}
