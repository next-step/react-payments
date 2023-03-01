import { memo } from 'react';

import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components';
import useFormData from '@/hooks/formHook';
import { useBlur } from '@/hooks/useBlur';
import { styled } from '@/lib/stitches.config';
import { CardKey } from '@/types';

const CardForm = () => {
  const { getFormData, handleInputChange } = useFormData();
  const formData = getFormData();
  const { dirtyState, makeDirty } = useBlur();

  return (
    <FormWrapper onBlur={makeDirty}>
      <CardNumberInput
        dirtyState={dirtyState}
        onChange={handleInputChange(formData, CardKey.CARD_NUMBERS as CardKey)}
      />
      <ExpiredDateInput
        dirtyState={dirtyState}
        onChange={handleInputChange(formData, CardKey.EXPIRE_DATE as CardKey)}
      />
      <CardOwnerInput
        dirtyState={dirtyState}
        onChange={handleInputChange(formData, CardKey.OWNER_NAME as CardKey)}
      />
      <CardCVCInput
        dirtyState={dirtyState}
        onChange={handleInputChange(formData, CardKey.CVC as CardKey)}
      />
      <CardPwdInput
        dirtyState={dirtyState}
        onChange={handleInputChange(formData, CardKey.PASSWORD as CardKey)}
      />
      <button
        onClick={() => {
          console.log(getFormData());
        }}
      >
        Test getData
      </button>
    </FormWrapper>
  );
};

export default memo(CardForm);

const FormWrapper = styled('form', {
  paddingTop: '2rem',
});
