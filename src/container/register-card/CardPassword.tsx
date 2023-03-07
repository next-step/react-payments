import { Input, InputContainer } from '../../components/form';
import { memo, useCallback, useState } from 'react';
import { useFocusRef, useRefs } from '../../hooks';
import { onlyNumber } from '../../utils/keyInterceptor';
import useCardDispatch from '../../provider/card-box/hooks/useCardDispatch';

const MAX_LENGTH = 1;
const VALIDATE_ERROR = '카드 비밀번호 앞 2자리를 입력 해 주세요.';

function CardPassword() {
  const cardDispatch = useCardDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordRef, getPasswordRef] = useRefs<HTMLInputElement>([0, 1]);

  const handleChange = useCallback(() => {
    const cardPassword = getPasswordRef().map((item) => item.value).join('');

    cardDispatch({
      type: 'SET_CARD',
      payload: { cardPassword: Number(cardPassword) }
    });
    setErrorMessage(cardPassword.length !== MAX_LENGTH * 2 ? VALIDATE_ERROR : '');
  }, []);

  return (
    <InputContainer
      title="카드 비밀번호"
      className="flex-start"
      notInputBox
      errorMessage={errorMessage}
    >
      <Input
        type="password"
        maxLength={MAX_LENGTH}
        className="w-15 mr-5"
        ref={passwordRef[0]}
        nextFocus={useFocusRef(passwordRef[1])}
        onChange={handleChange}
        onKeyDown={onlyNumber}
      />
      <Input
        ref={passwordRef[1]}
        type="password"
        maxLength={MAX_LENGTH}
        className="w-15"
        onChange={handleChange}
        onKeyDown={onlyNumber}
      />
      <p className="flex-center w-15">•</p>
      <p className="flex-center w-15">•</p>
    </InputContainer>
  );
}

export default memo(CardPassword);
