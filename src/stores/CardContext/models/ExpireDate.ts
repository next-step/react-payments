import type { IInputState, IInputElement } from '@/stores/types';

export type TExpireDateState = IInputState;

export class ExpireDateInputElement implements IInputElement {
  value?: string | undefined;

  isValidate = false;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value, ref, index = 0 }: Partial<ExpireDateInputElement>) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
    this.ref = ref;
  }
}

// import { isNil } from '@/utils';

// import type { ExpireDatesState } from './types';
// import { attachCommonInputObjectProperty } from './utils';

// export const expireDatesInit: ExpireDatesState = [
//   attachCommonInputObjectProperty({
//     key: 'card-expired-month',
//     value: undefined,
//     placeholder: 'MM',
//     checkIsValid() {
//       const { value } = this;
//       const numberedValue = Number(value);
//       return !!value && value.length <= 2 && numberedValue >= 1 && numberedValue <= 12;
//     },
//     checkIsAllowInput: (input) => {
//       if (isNil(input) || input.length === 0) return true;

//       const isInputLengthValid = input.length <= 2;
//       const numberedInput = Number(input);
//       const isMinNumberValid = numberedInput >= 0;
//       const isMaxNumberValid = numberedInput <= 12;
//       return isInputLengthValid && isMinNumberValid && isMaxNumberValid;
//     },
//     checkIsInputFinished() {
//       return this.value?.length === 2;
//     },
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       if (!this.value) {
//         return '만료월을 입력해주세요.';
//       }
//       return '1 ~ 12월을 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
//   attachCommonInputObjectProperty({
//     key: 'card-expired-year',
//     value: undefined,
//     placeholder: 'YY',
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length <= 2;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 2,
//     checkIsInputFinished() {
//       return this.value?.length === 2;
//     },
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '만료년을 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
// ];
