import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';
import { Validation } from '@/utils/validation';

export const PASSWORD = {
  FIELDS: {
    FIRST: {
      ID: 'first',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.password,
      maxLength: 1,
    },

    SECOND: {
      ID: 'second',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.password,
      maxLength: 1,
    },

    THIRD: {
      ID: 'third',
      TYPE: INPUT.TYPE.READONLY_PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.password,
      maxLength: 1,
    },

    FOURTH: {
      ID: 'fourth',
      TYPE: INPUT.TYPE.READONLY_PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.password,
      maxLength: 1,
    },
  },

  TITLE: '카드 비밀번호',
};
