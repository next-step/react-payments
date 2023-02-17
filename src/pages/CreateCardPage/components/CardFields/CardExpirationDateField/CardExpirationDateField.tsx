import { Label, TextInput } from '@/components';
import React from 'react';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { SEPARATOR, addSeparator, isNotNumber } from '@/utils/formatter';
import { isMonth } from '@/utils/validate';
import { LABEL_TEXT, PLACEHOLDER_TEXT } from '@/constants/createCard';
import { Colors } from '@/styles/colors';

type CardExpirationDateFieldProps = {
  expirationMonth: string;
  expirationYear: string;
  fontColor: Colors;
};

const CardExpirationDateField = ({
  expirationMonth,
  expirationYear,
  fontColor,
}: CardExpirationDateFieldProps) => {
  const dispatch = useCardFieldDispatchContext();

  const EXPIRATION_DATE_INPUT_LENGTH = 4 + SEPARATOR.length;
  const EXPIRATION_DATE_INPUT_WIDTH = '137px';

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
    <Label labelText={LABEL_TEXT.EXPIRATION_DATE}>
      <TextInput
        value={expirationMonth + expirationYear}
        fontColor={fontColor}
        label="expirationDate"
        placeholder={PLACEHOLDER_TEXT.EXPIRATION_DATE}
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
