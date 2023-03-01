import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useInputChange } from '@/hooks/useInputChange';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import type { CardNumber } from '@/types';

const initialState: CardNumber = {
  1: '',
  2: '',
  3: '',
  4: '',
} as const;

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardNumberInput = ({ onChange, dirtyState }: Props) => {
  const [cardNumbers, setCardNumbers] = useState(initialState);
  const keyPressInterceptor = useNumberKeyInterceptor();
  const handleInputChange = useInputChange();

  const isValidCardNumberLength =
    Object.values(cardNumbers).join('').length === 16;

  const errorMessage = useMemo(() => {
    if (!isValidCardNumberLength) return ERROR_MESSAGE.FULL_NUMBER;
  }, [cardNumbers]);

  useEffect(() => {
    onChange(cardNumbers);
  }, [cardNumbers, onChange]);

  return (
    <InputContainer
      label="카드번호"
      isError={dirtyState && !isValidCardNumberLength}
      errorMessage={errorMessage}
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
