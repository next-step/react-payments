import { useForm } from '../../hooks';
import { Input, InputContainer } from '../../components/form';
import { useEffect, useMemo, useRef, useState } from 'react';
import { RegisterCardType } from '../../pages/RegisterCard';
import { Validator } from '../../domain';
import { formToArray, onlyNumber } from '../../utils/filter';

export default function ExpiredDateContainer({ onChange }: RegisterCardType) {
  const { isPreviousDate } = Validator();
  const [errorMessage, setErrorMessage] = useState('');
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [expired, setExpired] = useForm({
    month: '',
    year: ''
  });

  const expiredDate = useMemo(() => formToArray(expired).join(''), [expired]);

  useEffect(() => {
    onChange({ expiredDate });

    const month = expired.month.value;
    const year = expired.year.value;

    if (Number(month) < 1 || Number(month) > 12) {
      setErrorMessage('월은 1~12 까지만 입력 가능합니다.');
      return;
    }

    if (isPreviousDate(year, month)) {
      setErrorMessage('현재 날짜보다 이전 날짜는 입력할 수 없습니다.');
      return;
    }

    setErrorMessage('');
  }, [expired]);

  return (
    <InputContainer title="만료일" className="w-50" errorMessage={errorMessage}>
      <Input
        ref={monthRef}
        placeholder="MM"
        nextFocus={yearRef.current}
        maxLength={2}
        {...expired.month}
        onChange={setExpired}
        filter={onlyNumber}
      />
      /
      <Input
        ref={yearRef}
        placeholder="YY"
        maxLength={2}
        {...expired.year}
        onChange={setExpired}
        filter={onlyNumber}
      />
    </InputContainer>
  );
}