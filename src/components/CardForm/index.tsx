import { memo } from 'react';

import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components';
import { useBlur } from '@/hooks/useBlur';
import { styled } from '@/lib/stitches.config';
import { CardKey } from '@/types';

import { useFormContext } from '../common/Form/FormContext';

const CardForm = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const formData = getFormData();

  const { dirtyState, makeDirty } = useBlur();

  return (
    <FormWrapper onBlur={makeDirty}>
      <CardNumberInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.CARD_NUMBERS as CardKey)}
      />
      <ExpiredDateInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.EXPIRE_DATE as CardKey)}
      />
      <CardOwnerInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.OWNER_NAME as CardKey)}
      />
      <CardCVCInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.CVC as CardKey)}
      />
      <CardPwdInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.PASSWORD as CardKey)}
      />
    </FormWrapper>
  );
};

export default memo(CardForm);

const FormWrapper = styled('form', {
  paddingTop: '2rem',
});
