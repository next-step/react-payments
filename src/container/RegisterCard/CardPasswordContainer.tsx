import { InputContainer } from '../index';
import { Input } from '../../components';
import { RegisterCardType } from '../../pages/RegisterCard';
import { useEffect, useRef, useState } from 'react';
import { useForm } from '../../hooks';

const MAX_LENGTH = 1;

export default function CardPasswordContainer({ filter, onChange }: RegisterCardType) {
  const [errorMessage, setErrorMessage] = useState('');
  const passwordRef1 = useRef();
  const passwordRef2 = useRef();
  const [cardPassword, setCardPassword] = useForm({
    first: '',
    second: '',
  });

  useEffect(() => {
    const { first, second } = cardPassword;
    const password = first.value + second.value;

    onChange(password);

    if (password.length !== MAX_LENGTH * 2) {
      setErrorMessage('카드 비밀번호 앞 2자리를 입력 해 주세요.');
      return;
    }

    setErrorMessage('');
  });

  return (
    <InputContainer
      title="카드 비밀번호"
      className="flex-start"
      notInputBox
      errorMessage={errorMessage}
    >
      <Input
        type="password"
        filter={filter}
        maxLength={MAX_LENGTH}
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
        maxLength={MAX_LENGTH}
        className="w-15"
        {...cardPassword.second}
        onChange={setCardPassword}
      />
      <p className="flex-center w-15">•</p>
      <p className="flex-center w-15">•</p>
    </InputContainer>
  );
}