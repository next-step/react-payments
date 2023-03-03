import { memo, useEffect, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardPwdInput = ({ onChange, dirtyState }: Props) => {
  const { handleInputChange, dispatch } = useFormContext();
  const [pwd, setPwd] = useState({});
  const keyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange({ ...pwd, isValid: !getErrorMessage(pwd) });
    dispatch();
  }, [pwd]);

  return (
    <InputContainer
      label="카드 비밀번호"
      isError={dirtyState && !!getErrorMessage(pwd)}
      errorMessage={getErrorMessage(pwd)}
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
      <input value="*" readOnly type="password" className="input-box" />
      <input value="*" readOnly type="password" className="input-box" />
    </InputContainer>
  );
};

export default memo(CardPwdInput);

const MIN_PWD_LENGTH = 2;

const ERROR_MESSAGE = {
  NO_EMPTY: '비밀번호를 모두 입력해주세요.',
};

const getErrorMessage = (val: object) => {
  const isPwdValid = Boolean(
    Object.values(val).join('').length == MIN_PWD_LENGTH
  );
  if (!isPwdValid) {
    return ERROR_MESSAGE.NO_EMPTY;
  }
};
