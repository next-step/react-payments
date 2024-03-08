import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../number/cardNumber.constant';

export const PASSWORD: InputFields = {
  FIELDS: {
    FIRST: {
      id: 'passwordFirst',
      type: INPUT.TYPE.TEXT,
      validate: Validation.password,
      maxLength: 1,
    },

    SECOND: {
      id: 'passwordSecond',
      type: INPUT.TYPE.TEXT,
      validate: Validation.password,
      maxLength: 1,
    },

    THIRD: {
      id: 'passwordThird',
      type: INPUT.TYPE.TEXT,
      readOnly: true,
      defaultValue: '●',
    },

    FOURTH: {
      id: 'passwordFourth',
      type: INPUT.TYPE.TEXT,
      readOnly: true,
      defaultValue: '●',
    },
  },

  TITLE: '카드 비밀번호',
};
