import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';

export const SECURITY_CODE = {
  FIELDS: {
    SECURITY_CODE: {
      id: 'securityCode',
      placeholder: 'CVC',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) => {
        return Validation.checkLength(field, 3);
      },
      maxLength: 3,
    },
  },
  TITLE: '보안 코드(CVC/CVV)',
};
