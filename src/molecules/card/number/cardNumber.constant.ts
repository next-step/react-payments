import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';

export const CARD_NUMBER = {
  FIELDS: {
    FIRST: {
      ID: 'first',
      TYPE: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(field, CARD_NUMBER.FIELDS.FIRST.maxLength),
      maxLength: 4,
    },

    SECOND: {
      ID: 'second',
      TYPE: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(field, CARD_NUMBER.FIELDS.SECOND.maxLength),
      maxLength: 4,
    },

    THIRD: {
      ID: 'third',
      TYPE: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(field, CARD_NUMBER.FIELDS.THIRD.maxLength),
      maxLength: 4,
    },

    FOURTH: {
      ID: 'fourth',
      TYPE: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(field, CARD_NUMBER.FIELDS.FOURTH.maxLength),
      maxLength: 4,
    },
  },

  TITLE: '카드 번호',
};
