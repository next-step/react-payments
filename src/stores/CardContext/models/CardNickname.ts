import type { IInputState, IInputElement } from '@/stores/types';
import { isNil } from '@/utils';

export type TCardNicknameState = IInputState;

export class CardNicknameInputElement implements IInputElement {
  value?: string | undefined;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: string) {
    if (isNil(value)) return;
    if (!value) {
      return '닉네임을 입력해주세요.';
    }
  }

  isAllowToFocusNext() {
    return this.value?.length === 10;
  }

  constructor({ value, ref }: Partial<CardNicknameInputElement>) {
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }
}

// import type { CardNicknameState } from './types';

// import { attachCommonInputObjectProperty } from './utils';

// export const cardNicknameInit: CardNicknameState = attachCommonInputObjectProperty({
//   key: 'card-nickname',
//   value: undefined,
//   checkIsValid() {
//     const { value } = this;
//     return !value || value.length <= 10;
//   },
//   getInvalidMessage() {
//     if (this.checkIsValid()) return null;
//     if (!this.value) {
//       return '카드 별명을 입력해주세요.';
//     }
//     return '카드 별명은 10자리를 넘을 수 없습니다.';
//   },
//   getPOJO() {
//     return { value: this.value };
//   },
// });
