import { useEffect, useRef } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components/domain';
import { Box } from '@/components/UI';
import { type CardFormType, CardCompanyValues, CardKey } from '@/types';

import { type ExpireDateHandle } from '../ExpiredDateInput';

const CardForm = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const formData = getFormData();
  const currentFormData = formData.current as CardFormType;
  const expireDateInputRef = useRef<ExpireDateHandle>(null);

  useEffect(() => {
    if (
      currentFormData.CARD_NUMBERS?.isValid &&
      currentFormData.CARD_COMPANY.isValid
    ) {
      expireDateInputRef.current?.focusOnExpiredDate();
    }
  }, [currentFormData]);

  return (
    <Box css={{ paddingTop: '2rem' }}>
      <CardNumberInput
        onChange={handleFormInput(formData, CardKey.CARD_NUMBERS)}
      />
      <ExpiredDateInput
        ref={expireDateInputRef}
        onChange={handleFormInput(formData, CardKey.EXPIRE_DATE)}
      />
      <CardOwnerInput
        onChange={handleFormInput(formData, CardKey.OWNER_NAME)}
      />
      <CardCVCInput onChange={handleFormInput(formData, CardKey.CVC)} />
      <CardPwdInput onChange={handleFormInput(formData, CardKey.PASSWORD)} />
    </Box>
  );
};

export default CardForm;

export const guessCardCompanyByCardNumber = (cardNumber: string) => {
  const firstNumber = cardNumber[0];
  switch (firstNumber) {
    case '1':
      return CardCompanyValues.PC;
    case '2':
      return CardCompanyValues.JUN;
    case '3':
      return CardCompanyValues.HS;
    case '4':
      return CardCompanyValues.YH;
    case '5':
      return CardCompanyValues.HO;
    case '6':
      return CardCompanyValues.TE;
    case '7':
      return CardCompanyValues.JI;
    case '8':
      return CardCompanyValues.EK;
    default:
      return '';
  }
};
