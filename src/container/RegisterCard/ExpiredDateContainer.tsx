import { useRefs } from '../../hooks';
import { Input, InputContainer } from '../../components/form';
import { useCallback, useState } from 'react';
import { IRegisterCard } from '../../pages/RegisterCard';
import { Validator } from '../../domain';
import { onlyNumber } from '../../utils/filter';

const MAX_LENGTH = 2;
const VALIDATE_ERROR = {
  MONTH: '월은 1~12 까지만 입력 가능합니다.',
  PREV_DATE: '현재 날짜보다 이전 날짜는 입력할 수 없습니다.'
};

export default function ExpiredDateContainer({ onChange }: IRegisterCard) {
  const { isPreviousDate } = Validator();
  const [errorMessage, setErrorMessage] = useState('');
  const [expiredDateRef, getExpiredDateRefs] = useRefs<HTMLInputElement>(['month', 'year']);

  const handleChange = useCallback(() => {
    const expiredDate = getExpiredDateRefs().map((item) => {
      item.value = onlyNumber(item.value);
      return item.value;
    });
    const [month, year] = expiredDate;

    onChange({ expiredDate: expiredDate.join('') });

    if (Number(month) < 1 || Number(month) > 12) {
      setErrorMessage(VALIDATE_ERROR.MONTH);
      return;
    }

    setErrorMessage(isPreviousDate(year, month) ? VALIDATE_ERROR.PREV_DATE : '');
  }, []);

  return (
    <InputContainer title="만료일" className="w-50" errorMessage={errorMessage}>
      <Input
        ref={expiredDateRef.month}
        placeholder="MM"
        nextFocus={() => expiredDateRef.year.current?.focus()}
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
      /
      <Input
        ref={expiredDateRef.year}
        placeholder="YY"
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
    </InputContainer>
  );
}