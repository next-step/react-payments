import { InputContainer } from '../index';
import { Input } from '../../components';
import { FormProps } from '../../pages/RegisterCard';
import { useForm } from '../../hooks';
import { useRef } from 'react';

export default function CardPassword({ filter }: FormProps) {
  const passwordRef1 = useRef();
  const passwordRef2 = useRef();
  const [cardPassword, setCardPassword] = useForm({
    first: '',
    second: '',
  });

  return (
    <InputContainer title="카드 비밀번호" className="flex-start" notInputBox>
      <Input
        type="password"
        filter={filter}
        maxLength={1}
        className="w-15"
        ref={passwordRef1}
        nextFocus={passwordRef2.current}
        {...cardPassword.first}
        onChange={setCardPassword}
      />
      <Input
        ref={passwordRef2}
        type="password"
        filter={filter}
        maxLength={1}
        className="w-15"
        {...cardPassword.second}
        onChange={setCardPassword}
      />
      <p className="flex-center w-15">•</p>
      <p className="flex-center w-15">•</p>
    </InputContainer>
  );
}