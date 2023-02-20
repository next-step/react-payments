import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import { initialCardState } from '@/pages/CardRegisterPage';
import { CardKey } from '@/types';

const initialState = {
  month: '',
  year: '',
};

type Props = {
  onChangeExpiredDate: <T extends CardKey>(
    state: typeof initialCardState[T]
  ) => void;
};

const ExpiredDateInput = (props: Props) => {
  const [expiredDate, setExpiredDate] = useState(initialState);
  const { dirtyState, toggleDirtyState } = useBlur();
  const numberKeyPressInterceptor = useNumberKeyInterceptor();

  const isExpiredDateValid = Boolean(
    Number(expiredDate.month) <= MAX_MONTH &&
      expiredDate.month &&
    expiredDate.year
  );

  const errorMessage = useMemo(() => {
    if (Number(expiredDate.month) > MAX_MONTH)
      return ERROR_MESSAGE.NON_VALID_MONTH;
    if (!(expiredDate.month && expiredDate.year))
      return ERROR_MESSAGE.EMPTY_INPUT;
  }, [expiredDate]);

  const handleChangeExpiredDate = (e: ChangeEvent<HTMLInputElement>) => {
    setExpiredDate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    props.onChangeExpiredDate({
      val: expiredDate,
      isValid: isExpiredDateValid,
    });
  };

  useEffect(() => {
    props.onChangeExpiredDate({
      val: expiredDate,
      isValid: isExpiredDateValid,
    });
  }, [expiredDate]);

  return (
    <InputContainer
      label="만료일"
      isError={dirtyState && !isExpiredDateValid}
      errorMessage={errorMessage}
    >
      <input
        type="tel"
        placeholder="MM"
        name="month"
        min={1}
        maxLength={2}
        onKeyPress={numberKeyPressInterceptor}
        onChange={handleChangeExpiredDate}
        onBlur={toggleDirtyState}
      />
      /
      <input
        type="tel"
        placeholder="YY"
        name="year"
        min={1}
        maxLength={2}
        onKeyPress={numberKeyPressInterceptor}
        onChange={handleChangeExpiredDate}
        onBlur={toggleDirtyState}
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
