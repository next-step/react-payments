import { useForm } from '../../hooks';
import { InputContainer } from '../index';
import { Input } from '../../components';
import { useEffect, useRef, useState } from 'react';
import { FormProps } from '../../pages/RegisterCard';
import { Validator } from '../../domain';

export default function ExpiredDateContainer({ filter }: FormProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const monthRef = useRef();
  const yearRef = useRef();
  const [expired, setExpired] = useForm({
    month: '',
    year: '',
  });

  useEffect(() => {
    const month = expired.month.value;
    const year = expired.year.value;

    if (Number(month) < 1 || Number(month) > 12) {
      setErrorMessage('월은 1~12 까지만 입력 가능합니다.');
      return;
    }

    if (Validator.isPreviousDate(year, month)) {
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
        filter={filter}
      />
      /
      <Input
        ref={yearRef}
        placeholder="YY"
        maxLength={2}
        {...expired.year}
        onChange={setExpired}
        filter={filter}
      />
    </InputContainer>
  );
}