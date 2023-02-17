import { Label } from '@/components';
import React from 'react';
import { CardPasswordInput } from '../../CardPasswordInput';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';

type CardPasswordFieldProps = {
  cardPassword: string;
};

const CardPasswordField = ({ cardPassword }: CardPasswordFieldProps) => {
  const dispatch = useCardFieldDispatchContext();
  const handleChange = (value: string) => {
    dispatch && dispatch(ACTION.UPDATE_CARD_PASSWORD(value));
  };
  return (
    <Label labelText="카드 비밀번호">
      <CardPasswordInput password={cardPassword} onChange={handleChange} />
    </Label>
  );
};

export default React.memo(CardPasswordField);
