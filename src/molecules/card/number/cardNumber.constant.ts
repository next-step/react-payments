import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';

export const CARD_NUMBER = {
  FIELDS: {
    FIRST: {
      ID: 'first',
      TYPE: INPUT.TYPE.TEXT,
    },
    SECOND: {
      ID: 'second',
      TYPE: INPUT.TYPE.TEXT,
    },
    THIRD: {
      ID: 'third',
      TYPE: INPUT.TYPE.PASSWORD,
    },
    FOURTH: {
      ID: 'fourth',
      TYPE: INPUT.TYPE.PASSWORD,
    },
  },
  TITLE: '카드 번호',
  TYPE: INPUT_FIELDS.NUMBER.TYPE,
  MAX_LENGTH: 4,
} as const;
