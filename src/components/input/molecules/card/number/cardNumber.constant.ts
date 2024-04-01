import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../cardInput.type';
import { CardForm } from '@/pages/Payments/payments.type';

export const CARD_NUMBER: InputFields<CardForm> = {
  FIELDS: {
    FIRST: {
      name: 'numberFirst',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.FIRST.maxLength as number
        )
          ? false
          : '첫 번째 카드 번호를 입력해주세요',
      maxLength: 4,
      autoFocusIndex: 1,
    },

    SECOND: {
      name: 'numberSecond',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.SECOND.maxLength as number
        )
          ? false
          : '두 번째 카드 번호를 입력해주세요',
      maxLength: 4,
      autoFocusIndex: 2,
    },

    THIRD: {
      name: 'numberThird',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.THIRD.maxLength as number
        )
          ? false
          : '세 번째 카드 번호를 입력해주세요',
      maxLength: 4,
      autoFocusIndex: 3,
    },

    FOURTH: {
      name: 'numberFourth',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) =>
        Validation.checkLength(
          field,
          CARD_NUMBER.FIELDS.FOURTH.maxLength as number
        )
          ? false
          : '네 번째 카드 번호를 입력해주세요',
      maxLength: 4,
      autoFocusIndex: 4,
    },
  },

  TITLE: '카드 번호',
} as const;
