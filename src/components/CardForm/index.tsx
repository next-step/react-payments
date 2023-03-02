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
        onChange={handleFormInput(formData, CardKey.CARD_NUMBERS)}
      />
      <ExpiredDateInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.EXPIRE_DATE)}
      />
      <CardOwnerInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.OWNER_NAME)}
      />
      <CardCVCInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.CVC)}
      />
      <CardPwdInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.PASSWORD)}
      />
    </FormWrapper>
  );
};

export default memo(CardForm);

const FormWrapper = styled('form', {
  paddingTop: '2rem',
});
