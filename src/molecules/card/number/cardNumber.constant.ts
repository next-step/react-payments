import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';

const Validation = {
  cardNumberLength(field: string) {
    return field.length === 4;
  },
};
export const CARD_NUMBER = {
  FIELDS: {
    FIRST: {
      ID: 'first',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.cardNumberLength,
      maxLength: 4,
    },

    SECOND: {
      ID: 'second',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.cardNumberLength,
      maxLength: 4,
    },

    THIRD: {
      ID: 'third',
      TYPE: INPUT.TYPE.PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.cardNumberLength,
      maxLength: 4,
    },

    FOURTH: {
      ID: 'fourth',
      TYPE: INPUT.TYPE.PASSWORD,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.cardNumberLength,
      maxLength: 4,
    },
  },

  TITLE: '카드 번호',
  MAX_LENGTH: 4,
};
