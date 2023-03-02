import { memo, useEffect, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardNumberInput = ({ onChange, dirtyState }: Props) => {
  const { dispatch, handleInputChange } = useFormContext();
  const [cardNumbers, setCardNumbers] = useState({});
  const keyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange({ ...cardNumbers, isValid: !getErrorMessage(cardNumbers) });
    dispatch();
  }, [cardNumbers]);

  return (
    <InputContainer
      label="카드번호"
      isError={dirtyState && !!getErrorMessage(cardNumbers)}
      errorMessage={getErrorMessage(cardNumbers)}
    >
      <input
        type="tel"
        name="1"
        placeholder="1234"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCardNumbers)}
        required
      />
      <input
        type="tel"
        name="2"
        placeholder="1234"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCardNumbers)}
      />
      <input
        type="password"
        name="3"
        placeholder="****"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCardNumbers)}
      />
      <input
        type="password"
        name="4"
        placeholder="****"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCardNumbers)}
      />
    </InputContainer>
  );
};

export default memo(CardNumberInput);

const ERROR_MESSAGE = {
  ONLY_NUMBER: '카드번호는 숫자만 입력할 수 있습니다.',
  FULL_NUMBER: '카드 번호 16자리를 모두 입력해주세요.',
};

const getErrorMessage = (val: object) => {
  const isValidCardNumberLength = Object.values(val).join('').length === 16;
  if (!isValidCardNumberLength) {
    return ERROR_MESSAGE.FULL_NUMBER;
  }
};
