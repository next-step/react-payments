import type { InputElement } from '@/contexts/types';
import { TCardCompany } from '@/types';
import { isNil } from '@/utils';

// DX개선, 새로운 state가 생겨도 간단하게 할 수 있도록

// class로 객체를 만들경우 객체 name이 생겨서 instanceof로 구별하기 쉬워짐.
// 대신 class로 만드는 경우, 새로운 class로 만드는 것에 굉장한 불편함이 있다. -> 내 설계를 읽고 따라해야함.
export class CardCompanyInputElement implements InputElement<TCardCompany> {
  value?: TCardCompany;

  errorMessage?: string;

  ref?: HTMLInputElement | null;

  setRef(ref?: HTMLInputElement | null) {
    this.ref = ref;
  }

  validateValue(value?: TCardCompany) {
    if (!value) {
      return '카드사를 선택해주세요.';
    }
  }

  isAllowToFocusNext() {
    return !!this.value;
  }

  constructor({ value, ref }: Partial<CardCompanyInputElement>) {
    this.#exceptionChecker(value);
    this.value = value;
    this.errorMessage = this.validateValue(value);
    this.ref = ref;
  }

  #exceptionChecker(value?: TCardCompany) {
    if (typeof value !== 'object') {
      console.error('받은 value : ', value);
      throw new Error('CardCompany에서 받은 value가 Object 형태가 아닙니다.');
    }

    if (isNil(value.name) || isNil(value.theme)) {
      console.error('받은 value : ', value);
      throw new Error('CardCompany value에는 name과 theme 프로퍼티가 필요합니다.');
    }
  }
}

// !! 기존 코드의 문제점은 component의 작동방식의 책임까지 객체에 있었다는 것이다.
