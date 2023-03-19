import type { CardNicknameState } from './types';

import { attachCommonInputObjectProperty } from './utils';

export const cardNicknameInit: CardNicknameState = attachCommonInputObjectProperty({
  key: 'card-nickname',
  value: undefined,
  checkIsValid() {
    const { value } = this;
    return !value || value.length <= 10;
  },
  getInvalidMessage() {
    if (this.checkIsValid()) return null;
    if (!this.value) {
      return '카드 별명을 입력해주세요.';
    }
    return '카드 별명은 10자리를 넘을 수 없습니다.';
  },
  getPOJO() {
    return { value: this.value };
  },
});
