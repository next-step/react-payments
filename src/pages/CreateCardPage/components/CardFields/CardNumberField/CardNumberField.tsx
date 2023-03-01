import { Label, Input } from '@/components';
import React, { useCallback } from 'react';
import { useCardFieldDispatchContext } from '../../CardFieldContext/CardFieldContext';
import { ACTION } from '../../CardFieldContext/CardFieldAction';
import {
  DASH,
  addCardNumberDashes,
  replaceCardNumberToDot,
} from '@/utils/formatter';
import { LABEL_TEXT } from '@/constants';
import { Colors } from '@/styles/colors';

type CardNumberFieldProps = {
  cardNumber: string;
  fontColor: Colors;
};

function CardNumberField({ cardNumber, fontColor }: CardNumberFieldProps) {
  const dispatch = useCardFieldDispatchContext();

  const CARD_NUMBER_LENGTH = 16 + DASH.length * 3;

  const handleChange = (value: string) => {
    if (dispatch === null) return;

    const newValue = value.slice(-1);

    const onBackspace = value.length < addCardNumberDashes(cardNumber).length;
    if (onBackspace) {
      dispatch(ACTION.DELETE_CARD_NUM());
      return;
    }

    const isNotNumber = Number.isNaN(+newValue) || newValue === ' ';

    if (isNotNumber) return;

    dispatch(ACTION.APPEND_CARD_NUM(newValue));
  };

  const cardNumberSelector = useCallback(
    (str: string) => replaceCardNumberToDot(addCardNumberDashes(str)),
    []
  );

  return (
    <Label labelText={LABEL_TEXT.CARD_NUMBER}>
      <Input.TextInput
        value={cardNumber}
        format={cardNumberSelector}
        fontColor={fontColor}
        label="cardNumber"
        inputMode="numeric"
        maxLength={CARD_NUMBER_LENGTH}
        onChange={handleChange}
        textAlign="center"
      />
    </Label>
  );
}

export default React.memo(CardNumberField);
