import { Input, Label } from '@/components';
import React from 'react';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { SEPARATOR, addSeparator } from '@/utils/formatter';
import { isMonth, isNotNumber } from '@/utils/validate';
import { LABEL_TEXT, PLACEHOLDER_TEXT } from '@/constants';
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
  const ERROR_MESSAGE = '유효하지 않은 월입니다.';
  const limitLength = 2;

  const [isError, setIsError] = React.useState(false);

  const handleChange = (value: string) => {
    if (!dispatch) return;
    if (isError) setIsError(false);
    const currentInput = value.replace(SEPARATOR, '');
    const lastValue = currentInput[currentInput.length - 1];

    const 숫자외에입력 = currentInput.length !== 0 && isNotNumber(lastValue);

    if (숫자외에입력) return;

    const [month, year] = addSeparator(currentInput).split(SEPARATOR);

    dispatch(ACTION.UPDATE_EXPIRATION_MONTH(month));

    if (month.length === limitLength) {
      dispatch(ACTION.UPDATE_EXPIRATION_YEAR(year));
    }
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (value.length <= limitLength) return;
    const [month] = value.split(SEPARATOR);

    if (!isMonth(+month)) {
      setIsError(true);
    }
  };

  return (
    <Label labelText={LABEL_TEXT.EXPIRATION_DATE}>
      <Input.TextInput
        value={expirationMonth + expirationYear}
        fontColor={fontColor}
        onBlur={handleBlur}
        label="expirationDate"
        placeholder={PLACEHOLDER_TEXT.EXPIRATION_DATE}
        format={addSeparator}
        maxLength={EXPIRATION_DATE_INPUT_LENGTH}
        width={EXPIRATION_DATE_INPUT_WIDTH}
        onChange={handleChange}
        textAlign="center"
        isError={isError}
        errorMessage={ERROR_MESSAGE}
      />
    </Label>
  );
};

export default React.memo(CardExpirationDateField);
