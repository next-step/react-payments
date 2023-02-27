import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import type { Password, Validation } from '@/types';

type Props = {
  onChangePwd: (state: Validation<Password>) => void;
};

const initialState: Password = {
  1: '',
  2: '',
  3: '',
  4: '',
} as const;

const CardPwdInput = (props: Props) => {
  const [pwd, setPwd] = useState(initialState);
  const { dirtyState, makeDirty } = useBlur();
  const keyPressInterceptor = useNumberKeyInterceptor();

  const isPwdValid = useMemo(
    () => Boolean(Object.values(pwd).join('').length == MIN_PWD_LENGTH),
    [pwd]
  );

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
        onBlur={makeDirty}
        maxLength={1}
      />
      <input
        type="password"
        name="2"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={makeDirty}
        maxLength={1}
      />
      <input
        type="password"
        name="3"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={makeDirty}
        maxLength={1}
      />
      <input
        type="password"
        name="4"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangePwd}
        onBlur={makeDirty}
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
