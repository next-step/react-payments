import { INPUT } from '@/components/input/input.constant';
import { InputFields } from '../cardInput.type';
import { CardForm } from '@/pages/Payments/payments.type';

export const OWNER_NAME: InputFields<CardForm> = {
  FIELDS: {
    OWNER_NAME: {
      name: 'ownerName',
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      type: INPUT.TYPE.TEXT,
      maxLength: 30,
      autoFocusIndex: 7,
    },
  },
  TITLE: '카드 소유자 이름(선택)',
} as const;
