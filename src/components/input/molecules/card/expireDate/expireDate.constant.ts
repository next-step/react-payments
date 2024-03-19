import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../cardInput.type';

export const EXPIRE_DATE: InputFields = {
  FIELDS: {
    MONTH: {
      name: 'expireMonth',
      placeholder: 'MM',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return (
          Validation.checkLength(field, 2) &&
          Number(field) > 0 &&
          Number(field) < 13
        );
      },
      maxLength: 2,
      autoFocusIndex: 5,
    },
    YEAR: {
      name: 'expireYear',
      placeholder: 'YY',
      type: INPUT.TYPE.TEXT,
      validate: (field: string) => {
        return (
          Validation.checkLength(field, 2) &&
          Number(field) > 0 &&
          Number(field) < 32
        );
      },
      maxLength: 2,
      autoFocusIndex: 6,
    },
  },
  TITLE: '만료일',
};
