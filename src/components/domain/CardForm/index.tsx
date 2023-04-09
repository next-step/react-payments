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
import { type CardFormType, CardKey } from '@/types';

import { type ExpireDateHandle } from '../ExpiredDateInput';

const CardForm = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const formData = getFormData();
  const currentFormData = formData.current as CardFormType;
  const expireDateInputRef = useRef<ExpireDateHandle>(null);
  const isCardNumberAndCompanyValid =
    currentFormData.CARD_NUMBERS?.isValid &&
    currentFormData.CARD_COMPANY?.isValid;

  useEffect(() => {
    if (isCardNumberAndCompanyValid) {
      expireDateInputRef.current?.focusOnExpiredDate();
    }
  }, [isCardNumberAndCompanyValid]);

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
