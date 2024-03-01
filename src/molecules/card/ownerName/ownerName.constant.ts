import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';

export const OWNER_NAME = {
  FIELDS: {
    OWNER_NAME: {
      ID: 'card-user-name',
      PLACEHOLDER: '카드에 표시된 이름과 동일하게 입력하세요.',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.STRING.TYPE,
      validation: undefined,
      maxLength: 30,
    },
  },
  TITLE: '카드 소유자 이름(선택)',
};
