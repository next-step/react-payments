import type { Themes } from '@/theme';
import type { IInputState, IInputElement } from '@/stores/types';

type TCardCompany = {
  name: string;
  theme: Themes;
};

// DX개선, 새로운 state가 생겨도 간단하게 할 수 있도록

export type TCardCompanyState = IInputState<TCardCompany>;

// class로 객체를 만들경우 객체 name이 생겨서 instanceof로 구별하기 쉬워짐.
// 대신 class로 만드는 경우, 새로운 class로 만드는 것에 굉장한 불편함이 있다. -> 내 설계를 읽고 따라해야함.
export class CardCompanyInputElement implements IInputElement<TCardCompany> {
  value?: TCardCompany;

  isValidate: boolean;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  index: number;

  constructor({ isValidate = false, value, index = 0, ref }: Partial<CardCompanyInputElement>) {
    this.value = value;
    this.isValidate = isValidate;
    this.index = index;
    this.ref = ref;
  }
}

/*
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
*/
