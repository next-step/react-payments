import { memo, useCallback } from 'react';

import { styled } from '../../lib/stitches.config';
import { CardKey, CardObj } from '../../types';
import CVCInput from '../CardCVCInput';
import CardNumberInput from '../CardNumberInput';
import CardOwnerInput from '../CardOwnerInput';
import CardPwdInput from '../CardPwdInput';
import ExpiredDateInput from '../ExpiredDateInput';

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
      <CVCInput onChangeCVC={(args) => handleChange(args, CardKey.CVC)} />
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
