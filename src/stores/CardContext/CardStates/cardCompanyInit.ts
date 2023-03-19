import type { CardCompanyState } from './types';
import { attachCommonInputObjectProperty } from './utils';

export const cardCompanyInit: CardCompanyState = attachCommonInputObjectProperty({
  key: 'card-company',
  value: undefined,
  checkIsValid() {
    const { value } = this;
    return !!value && !!value.name && !!value.theme;
  },
  getInvalidMessage() {
    if (this.checkIsValid()) return null;
    return '카드사를 입력해주세요.';
  },
  getPOJO() {
    return { value: this.value };
  },
});
