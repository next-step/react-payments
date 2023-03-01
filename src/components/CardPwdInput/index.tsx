import { memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import type { Password } from '@/types';

import { useFormContext } from '../common/Form/FormContext';

const initialState: Password = {
  1: '',
  2: '',
  3: '',
  4: '',
} as const;

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardPwdInput = ({ onChange, dirtyState }: Props) => {
  const { handleInputChange, dispatch } = useFormContext();
  const [pwd, setPwd] = useState(initialState);
  const keyPressInterceptor = useNumberKeyInterceptor();

  const isPwdValid = useMemo(
    () => Boolean(Object.values(pwd).join('').length == MIN_PWD_LENGTH),
    [pwd]
  );

  const errorMessage = useMemo(() => {
    if (!isPwdValid) return ERROR_MESSAGE.NO_EMPTY;
  }, [pwd]);

  useEffect(() => {
    onChange({ val: pwd, isValid: isPwdValid });
    dispatch();
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
        onChange={handleInputChange(setPwd)}
        maxLength={1}
      />
      <input
        type="password"
        name="2"
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setPwd)}
        maxLength={1}
      />
      <input
        type="password"
        name="3"
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setPwd)}
        maxLength={1}
      />
      <input
        type="password"
        name="4"
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setPwd)}
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
