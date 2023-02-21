import { Label } from '@/components';
import React from 'react';
import { CardPasswordInput } from '../../CardPasswordInput';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { LABEL_TEXT } from '@/constants/createCard';
import { Colors } from '@/styles/colors';

type CardPasswordFieldProps = {
  cardPassword: string;
  fontColor: Colors;
};

const CardPasswordField = ({
  cardPassword,
  fontColor,
}: CardPasswordFieldProps) => {
  const dispatch = useCardFieldDispatchContext();

  const handleChange = (value: string) => {
    dispatch && dispatch(ACTION.UPDATE_CARD_PASSWORD(value));
  };

  return (
    <Label labelText={LABEL_TEXT.CARD_PASSWORD}>
      <CardPasswordInput
        fontColor={fontColor}
        value={cardPassword}
        onChange={handleChange}
      />
    </Label>
  );
};

export default React.memo(CardPasswordField);
