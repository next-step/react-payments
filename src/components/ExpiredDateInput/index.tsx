import { memo, useEffect, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import { type ExpireDate } from '@/types';
type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const ExpiredDateInput = ({ onChange, dirtyState }: Props) => {
  const { dispatch, handleInputChange } = useFormContext();
  const [expiredDate, setExpiredDate] = useState({});
  const numberKeyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange({ val: expiredDate, isValid: !getErrorMessage(expiredDate) });
    dispatch();
  }, [expiredDate]);

  return (
    <InputContainer
      label="만료일"
      isError={dirtyState && Boolean(getErrorMessage(expiredDate))}
      errorMessage={getErrorMessage(expiredDate)}
    >
      <input
        type="tel"
        placeholder="MM"
        name="month"
        min={1}
        maxLength={2}
        onKeyPress={numberKeyPressInterceptor}
        onChange={handleInputChange(setExpiredDate)}
      />
      /
      <input
        type="tel"
        placeholder="YY"
        name="year"
        min={1}
        maxLength={2}
        onKeyPress={numberKeyPressInterceptor}
        onChange={handleInputChange(setExpiredDate)}
      />
    </InputContainer>
  );
};

export default memo(ExpiredDateInput);

const MAX_MONTH = 12;

const ERROR_MESSAGE = {
  EMPTY_INPUT: '만료일에 대한 월, 연을 모두 입력해주세요.',
  NON_VALID_MONTH: '월은 1~12 숫자로 입력할 수 있습니다.',
};

const getErrorMessage = (expiredDate: ExpireDate | Record<string, never>) => {
  if (Number(expiredDate.month) > MAX_MONTH)
    return ERROR_MESSAGE.NON_VALID_MONTH;
  if (!(expiredDate.month && expiredDate.year))
    return ERROR_MESSAGE.EMPTY_INPUT;
};
