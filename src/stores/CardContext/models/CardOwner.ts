import type { IInputState, IInputElement } from '@/stores/types';

export type TCardOwnerState = IInputState;

export class CardOwnerInputElement implements IInputElement {
  value?: string | undefined;

  isValidate = false;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value }: TCardOwnerState, index = 0) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
  }
}

// import type { CardOwnersState } from './types';
// import { attachCommonInputObjectProperty } from './utils';

// export const cardOwnersInit: CardOwnersState = [
//   attachCommonInputObjectProperty({
//     key: 'card-owner-name',
//     value: undefined,
//     placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
//     checkIsValid() {
//       const { value } = this;
//       return !!value && value.length <= 30;
//     },
//     checkIsAllowInput: (input) => !input || input.length <= 30,
//     checkIsInputFinished() {
//       return this.value?.length === 30;
//     },
//     getInvalidMessage() {
//       if (this.checkIsValid()) return null;
//       return '카드 소유주 이름을 입력해주세요.';
//     },
//     getPOJO() {
//       return { value: this.value };
//     },
//   }),
// ];
