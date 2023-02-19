import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useKeyInterceptor } from '@/hooks/useKeyInterceptor';
import { CardObj } from '@/types';

type Props = {
  onChangePwd: (state: CardObj) => void;
};

const initialState = {
  1: '',
  2: '',
  3: '',
  4: '',
} as const;

const CardPwdInput = (props: Props) => {
  const [pwd, setPwd] = useState(initialState);
  const { dirtyState, toggleDirtyState } = useBlur();
  const keyPressInterceptor = useKeyInterceptor();

  const isPwdValid = useMemo(
    () => Boolean(Object.values(pwd).join('').length == MIN_PWD_LENGTH),
    [pwd]
  );
  console.log(Object.values(pwd).join(''), isPwdValid);

  const errorMessage = useMemo(() => {
    if (!isPwdValid) return ERROR_MESSAGE.NO_EMPTY;
  }, [pwd]);

  const handleChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    props.onChangePwd({ val: pwd, isValid: isPwdValid });
  }, [pwd]);

  return (
    <InputContainer
      label="카드 비밀번호"
      isError={dirtyState && !isPwdValid}
      errorMessage={errorMessage}
    >
      <input
        type="password"
        name="1"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={toggleDirtyState}
        maxLength={1}
      />
      <input
        type="password"
        name="2"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={toggleDirtyState}
        maxLength={1}
      />
      <input
        type="password"
        name="3"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={toggleDirtyState}
        maxLength={1}
      />
      <input
        type="password"
        name="4"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={toggleDirtyState}
        maxLength={1}
      />
    </InputContainer>
  );
};

export default memo(CardPwdInput);

const MIN_PWD_LENGTH = 4;

const ERROR_MESSAGE = {
  NO_EMPTY: '비밀번호를 모두 입력해주세요.',
};
