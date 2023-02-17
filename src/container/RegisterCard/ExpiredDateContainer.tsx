import { useForm } from '../../hooks';
import { InputContainer } from '../index';
import { Input } from '../../components';
import { useRef } from 'react';
import { FormProps } from '../../pages';

export default function ExpireDateForm({ filter }: FormProps) {
  const month = useRef();
  const year = useRef();
  const [expired, setExpired] = useForm({
    month: '',
    year: '',
  });
  return (
    <InputContainer title="만료일" className="w-50">
      <Input
        ref={month}
        placeholder="MM"
        nextFocus={year.current}
        maxLength={2}
        {...expired.month}
        onChange={setExpired}
        filter={filter}
      />
      /
      <Input
        ref={year}
        placeholder="YY"
        maxLength={2}
        {...expired.year}
        onChange={setExpired}
        filter={filter}
      />
    </InputContainer>
  );
}