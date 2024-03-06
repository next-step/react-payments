import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';
import { Validation } from '@/utils/validation';

/**
 * 문제점 1 : autoFocus(maxLength)랑 validation(validation) 로직이 하나의 객체에서 관리됨.
 * - 두 로직의 의존성이 발생함.
 * - 해당 로직을 사용하기 위해 props로 넘기기 때문에 컴포넌트에 도메인 향기가 진해짐.
 *
 * 문제점 2 : 여러 InputField을 하나의 커스텀 훅에서 관리함.
 * - 하나의 hook에서 하나의 inputField를 관리하도록 분리를 시도했으나, hook에서 관리하는 inputField의 수가 늘어나면 hook의 복잡도가 늘어남.
 * 또한, autoFocusRefs를 관리하는 것이 복잡해짐.
 */

export const CARD_NUMBER = {
  FIELDS: {
    FIRST: {
      ID: 'first',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validate: Validation.cardNumber,
      maxLength: 4,
    },

    SECOND: {
      ID: 'second',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validate: Validation.cardNumber,
      maxLength: 4,
    },

    THIRD: {
      ID: 'third',
      TYPE: INPUT.TYPE.PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validate: Validation.cardNumber,
      maxLength: 4,
    },

    FOURTH: {
      ID: 'fourth',
      TYPE: INPUT.TYPE.PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validate: Validation.cardNumber,
      maxLength: 4,
    },
  },

  TITLE: '카드 번호',
};
