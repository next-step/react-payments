import { INPUT } from '@/components/input/input.constant';
import { Validation } from '@/utils/validation';
import { InputFields } from '../cardInput.type';
import { CardForm } from '@/pages/Payments/payments.type';

export const SECURITY_CODE: InputFields<CardForm> = {
  FIELDS: {
    SECURITY_CODE: {
      name: 'securityCode',
      placeholder: 'CVC',
      type: INPUT.TYPE.PASSWORD,
      validate: (field: string) => {
        return Validation.checkLength(field, 3)
          ? false
          : '보안 코드를 입력해주세요';
      },
      maxLength: 3,
      autoFocusIndex: 8,
    },
  },
  TITLE: '보안 코드(CVC/CVV)',
};
