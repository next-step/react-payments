import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../card.type';

export const PASSWORD: InputFields = {
  FIELDS: {
    FIRST: {
      id: 'passwordFirst',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return Validation.checkLength(field, 1);
      },
      maxLength: 1,
    },

    SECOND: {
      id: 'passwordSecond',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return Validation.checkLength(field, 1);
      },
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
