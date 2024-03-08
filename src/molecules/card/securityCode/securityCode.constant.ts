import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';

export const SECURITY_CODE = {
  FIELDS: {
    SECURITY_CODE: {
      id: 'securityCode',
      placeholder: 'CVC',
      type: INPUT.TYPE.PASSWORD,
      validate: Validation.securityCode,
      maxLength: 3,
    },
  },
  TITLE: '보안 코드(CVC/CVV)',
};
