import type { IInputState, IInputElement } from '@/stores/types';

export type TCardNumberState = IInputState;

export class CardNumberInputElement implements IInputElement {
  value?: string;

  isValidate: boolean;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value, index = 0, ref }: Partial<CardNumberInputElement>) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
    this.ref = ref;
  }
}

// import type { CardNumbersState } from './types';
// import { attachCommonInputObjectProperty } from './utils';

// export const cardNumbersInit: CardNumbersState = [
//   attachCommonInputObjectProperty({
//     key: 'card-first-num',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length === 4;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 4,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '카드 번호 4자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value, type: this.type };
//     },
//   }),
//   attachCommonInputObjectProperty({
//     key: 'card-second-num',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length === 4;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 4,
//     getInvalidMessage() {
//       if (this.checkIsValid?.()) return null;
//       return '카드 번호 4자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value, type: this.type };
//     },
//   }),
//   attachCommonInputObjectProperty({
//     type: 'password',
//     key: 'card-third-num',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length === 4;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 4,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '카드 번호 4자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value, type: this.type };
//     },
//   }),
//   attachCommonInputObjectProperty({
//     type: 'password',
//     key: 'card-forth-num',
//     value: undefined,
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length === 4;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 4,
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '카드 번호 4자리를 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value, type: this.type };
//     },
//   }),
// ];
