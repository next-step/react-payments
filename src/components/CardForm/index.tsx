import { memo, useCallback } from 'react';

import {
    CardCVCInput,
    CardNumberInput,
    CardOwnerInput,
    CardPwdInput,
    ExpiredDateInput,
} from '@/components';
import { styled } from '@/lib/stitches.config';
import { CardKey, CardObj } from '@/types';

export type Props = {
  onChangeCardForm: (key: CardKey, state: CardObj) => void;
};
const CardForm = (props: Props) => {
  const handleChange = useCallback((state: CardObj, key: CardKey) => {
    props.onChangeCardForm(key, state);
  }, []);

  return (
    <FormWrapper>
          <CardNumberInput
        onChangeCardNumbers={(args) => handleChange(args, CardKey.CARD_NUMBERS)}
          />
      <ExpiredDateInput
        onChangeExpiredDate={(args) => handleChange(args, CardKey.EXPIRE_DATE)}
      />
      <CardOwnerInput
        onChangeOwner={(args) => handleChange(args, CardKey.OWNER_NAME)}
      />
          <CardCVCInput onChangeCVC={(args) => handleChange(args, CardKey.CVC)} />
      <CardPwdInput
        onChangePwd={(args) => handleChange(args, CardKey.PASSWORD)}
      />
    </FormWrapper>
  );
};

export default memo(CardForm);

const FormWrapper = styled('form', {
  paddingTop: '2rem',
});
