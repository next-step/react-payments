import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../cardInput.type';
import { CardForm } from '@/pages/Payments/payments.type';

export const PASSWORD: InputFields<CardForm> = {
  FIELDS: {
    FIRST: {
      name: 'passwordFirst',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return Validation.checkLength(field, 1)
          ? false
          : '첫 번째 카드 비밀번호를 입력해주세요';
      },
      maxLength: 1,
      autoFocusIndex: 9,
    },

    SECOND: {
      name: 'passwordSecond',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return Validation.checkLength(field, 1)
          ? false
          : '두 번째 카드 비밀번호를 입력해주세요';
      },
      maxLength: 1,
      autoFocusIndex: 10,
    },

    THIRD: {
      name: 'passwordThird',
      type: INPUT.TYPE.TEXT,
      readOnly: true,
      defaultValue: '●',
    },

    FOURTH: {
      name: 'passwordFourth',
      type: INPUT.TYPE.TEXT,
      readOnly: true,
      defaultValue: '●',
    },
  },

  TITLE: '카드 비밀번호',
};
