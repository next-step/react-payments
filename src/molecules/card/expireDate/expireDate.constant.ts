import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../number/cardNumber.constant';

export const EXPIRE_DATE: InputFields = {
  FIELDS: {
    MONTH: {
      id: 'expireMonth',
      placeholder: 'MM',
      type: INPUT.TYPE.TEXT,
      validate: Validation.expireDateMonth,
      maxLength: 2,
    },
    YEAR: {
      id: 'expireYear',
      placeholder: 'YY',
      type: INPUT.TYPE.TEXT,
      validate: Validation.expireDateYear,
      maxLength: 2,
    },
  },
  TITLE: '만료일',
};
