import { Label, TextInput } from '@/components';
import React from 'react';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { SEPARATOR, addSeparator, isNotNumber } from '@/utils/formatter';
import { isMonth } from '@/utils/validate';

type CardExpirationDateFieldProps = {
  expirationMonth: string;
  expirationYear: string;
};

const CardExpirationDateField = ({
  expirationMonth,
  expirationYear,
}: CardExpirationDateFieldProps) => {
  const dispatch = useCardFieldDispatchContext();

  const EXPIRATION_DATE_INPUT_LENGTH = 4 + SEPARATOR.length;
  const EXPIRATION_DATE_INPUT_WIDTH = '137px';

  const placeholder = 'MM / YY';
  const handleChange = (value: string) => {
    if (!dispatch) return;

    const limitLength = 2;

    const [month, year] = addSeparator(value.replace(SEPARATOR, '')).split(
      SEPARATOR
    );

    if (isNotNumber(month)) return;
    if (!isMonth(+month)) throw new Error('month is not valid');

    dispatch(ACTION.UPDATE_EXPIRATION_MONTH(month));
    if (month.length === limitLength)
      dispatch(ACTION.UPDATE_EXPIRATION_YEAR(year));
  };

  // TODO : input 2개로 관리하는 것이 더 좋은가? (month, year)
  return (
    <Label labelText="만료일">
      <TextInput
        value={expirationMonth + expirationYear}
        fontColor="blue"
        label="expirationDate"
        placeholder={placeholder}
        select={addSeparator}
        maxLength={EXPIRATION_DATE_INPUT_LENGTH}
        width={EXPIRATION_DATE_INPUT_WIDTH}
        onChange={handleChange}
        textAlign="center"
      />
    </Label>
  );
};

export default React.memo(CardExpirationDateField);
