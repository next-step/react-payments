import { Label, TextInput } from '@/components';
import React, { useCallback } from 'react';
import { useCardFieldDispatchContext } from '../../CardFieldContext/CardFieldContext';
import { ACTION } from '../../CardFieldContext/CardFieldAction';
import {
  DASH,
  addCardNumberDashes,
  replaceCardNumberToDot,
} from '@/utils/formatter';

type CardNumberFieldProps = {
  cardNumber: string;
};

function CardNumberField({ cardNumber }: CardNumberFieldProps) {
  const dispatch = useCardFieldDispatchContext();

  const CARD_NUMBER_LENGTH = 16 + DASH.length * 3;
  const cardNumberLabelText = '카드번호';

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
    <Label labelText={cardNumberLabelText}>
      <TextInput
        value={cardNumber}
        select={cardNumberSelector}
        fontColor="blue"
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
