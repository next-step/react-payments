import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import { CardObj } from '@/types';

const initialState = {
  1: '',
  2: '',
  3: '',
  4: '',
} as const;

type Props = {
  onChangeCardNumbers: (state: CardObj) => void;
};

const CardNumberInput = (props: Props) => {
  const [cardNumbers, setCardNumbers] = useState(initialState);
  const { dirtyState, toggleDirtyState } = useBlur();
  const keyPressInterceptor = useNumberKeyInterceptor();

  const isValidCardNumberLength =
    Object.values(cardNumbers).join('').length === 16;

  const errorMessage = useMemo(() => {
    if (!isValidCardNumberLength) return ERROR_MESSAGE.FULL_NUMBER;
  }, [cardNumbers]);

  const handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumbers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    props.onChangeCardNumbers({
      val: cardNumbers,
      isValid: isValidCardNumberLength,
    });
  }, [cardNumbers]);

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
        onChange={(e) => handleChangeCardNumber(e)}
        onBlur={toggleDirtyState}
        required
      />
      <input
        type="tel"
        name="2"
        placeholder="1234"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleChangeCardNumber}
        onBlur={toggleDirtyState}
      />
      <input
        type="password"
        name="3"
        placeholder="****"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleChangeCardNumber}
        onBlur={toggleDirtyState}
      />
      <input
        type="password"
        name="4"
        placeholder="****"
        maxLength={4}
        onKeyPress={keyPressInterceptor}
        onChange={handleChangeCardNumber}
        onBlur={toggleDirtyState}
      />
    </InputContainer>
  );
};

export default memo(CardNumberInput);

const ERROR_MESSAGE = {
  ONLY_NUMBER: '카드번호는 숫자만 입력할 수 있습니다.',
  FULL_NUMBER: '카드 번호 16자리를 모두 입력해주세요.',
};
