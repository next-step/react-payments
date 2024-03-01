import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';
import { Validation } from '@/utils/validation';

export const EXPIRE_DATE = {
  FIELDS: {
    MONTH: {
      ID: 'expire-date-month',
      PLACEHOLDER: 'MM',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.expireDateMonth,
      maxLength: 2,
    },
    YEAR: {
      ID: 'expire-date-year',
      PLACEHOLDER: 'YY',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.expireDateYear,
      maxLength: 2,
    },
  },
  TITLE: '만료일',
};
