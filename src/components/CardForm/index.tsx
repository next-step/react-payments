import { memo, useCallback } from 'react';

import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components';
import { styled } from '@/lib/stitches.config';
import { initialCardState } from '@/pages/CardRegisterPage';
import { CardKey } from '@/types';

export type Props = {
  onChangeCardForm: <T extends CardKey>(
    state: typeof initialCardState[T],
    key: T
  ) => void;
};
const CardForm = (props: Props) => {
  const handleChange = useCallback(
    <T extends CardKey>(state: typeof initialCardState[T], key: T) => {
      props.onChangeCardForm(state, key);
    },
    []
  );

  return (
    <FormWrapper>
      <CardNumberInput
        onChangeCardNumbers={(args) =>
          handleChange(args, CardKey.CARD_NUMBERS as CardKey)
        }
      />
      <ExpiredDateInput
        onChangeExpiredDate={(args) =>
          handleChange(args, CardKey.EXPIRE_DATE as CardKey)
        }
      />
      <CardOwnerInput
        onChangeOwner={(args) =>
          handleChange(args, CardKey.OWNER_NAME as CardKey)
        }
      />
      <CardCVCInput
        onChangeCVC={(args) => handleChange(args, CardKey.CVC as CardKey)}
      />
      <CardPwdInput
        onChangePwd={(args) => handleChange(args, CardKey.PASSWORD as CardKey)}
      />
    </FormWrapper>
  );
};

export default memo(CardForm);

const FormWrapper = styled('form', {
  paddingTop: '2rem',
});
