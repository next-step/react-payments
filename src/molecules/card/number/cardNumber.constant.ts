import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../card.type';

export const CARD_NUMBER: InputFields = {
  FIELDS: {
    FIRST: {
      id: 'numberFirst',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.FIRST.maxLength as number
        ),
      maxLength: 4,
    },

    SECOND: {
      id: 'numberSecond',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.SECOND.maxLength as number
        ),
      maxLength: 4,
    },

    THIRD: {
      id: 'numberThird',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.THIRD.maxLength as number
        ),
      maxLength: 4,
    },

    FOURTH: {
      id: 'numberFourth',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.FOURTH.maxLength as number
        ),
      maxLength: 4,
    },
  },

  TITLE: '카드 번호',
};
