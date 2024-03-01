import { INPUT } from '@/components/input/input.constant';
import { INPUT_FIELDS } from '@/hooks/useInputFields';
import { Validation } from '@/utils/validation';

export const SECURITY_CODE = {
  FIELDS: {
    SECURITY_CODE: {
      ID: 'card-security-code',
      PLACEHOLDER: 'CVC',
      TYPE: INPUT.TYPE.TEXT,
      fieldType: INPUT_FIELDS.NUMBER.TYPE,
      validation: Validation.securityCode,
      maxLength: 3,
    },
  },
  TITLE: '보안 코드(CVC/CVV)',
};
