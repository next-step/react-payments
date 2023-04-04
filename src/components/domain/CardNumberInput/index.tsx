import { useEffect, useRef, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useModal } from '@/components/UI/Modal';
import VirtualKeyboard from '@/components/UI/VirtualKeyboard';
import { useBlur } from '@/hooks/useBlur';
import useFocus from '@/hooks/useFocus';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import type { CardData } from '@/types';

type Props = {
  onChange: <T>(value: T) => void;
};
const initialCardNumbers = {
  1: '',
  2: '',
  3: '',
  4: '',
};

const CardNumberInput = ({ onChange }: Props) => {
  const { dirtyState, makeDirty } = useBlur();
  const { dispatch, handleInputChange, getFormData } = useFormContext();
  const [cardNumbers, setCardNumbers] = useState(initialCardNumbers);
  const keyPressInterceptor = useNumberKeyInterceptor();

  const cardNumberRef = {
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
    4: useRef<HTMLInputElement>(null),
  };

  const FormData = getFormData().current as CardData;
  const { focusOnTarget, target, focus } = useFocus({
    values: [
      {
        value: FormData?.CARD_NUMBERS?.[1],
        ref: cardNumberRef[1],
      },
      {
        value: FormData?.CARD_NUMBERS?.[2],
        ref: cardNumberRef[2],
      },
      {
        value: FormData?.CARD_NUMBERS?.[3],
        ref: cardNumberRef[3],
      },
      {
        value: FormData?.CARD_NUMBERS?.[4],
        ref: cardNumberRef[4],
      },
    ],
    maxLength: SINGLE_CARD_NUMBER_LENGTH,
  });

  const {
    isOpen: open,
    open: handleOpen,
    close: closeVirtualKeyboard,
  } = useModal(false);

  const handleChange = (n: number) => {
    const focusedElementName = focus.ref.current
      .name as keyof typeof initialCardNumbers;

    setCardNumbers((prev) => ({
      ...prev,
      [focusedElementName]: cardNumbers[focusedElementName]
        ? cardNumbers[focusedElementName].concat(String(n))
        : String(n),
    }));

    const isFullPrivateCardNumber =
      cardNumbers[3].length && cardNumbers[4].length === 4;
    isFullPrivateCardNumber && closeVirtualKeyboard();
  };

  useEffect(() => {
    onChange({
      ...cardNumbers,
      isValid: !getErrorMessage(cardNumbers),
    });
    dispatch();
  }, [cardNumbers]);

  focusOnTarget(target);

  return (
    <>
      <InputContainer
        label="카드번호"
        isError={dirtyState && !!getErrorMessage(cardNumbers)}
        errorMessage={getErrorMessage(cardNumbers)}
        onBlur={makeDirty}
      >
        <input
          ref={cardNumberRef[1]}
          type="tel"
          name="1"
          placeholder="1234"
          maxLength={SINGLE_CARD_NUMBER_LENGTH}
          onKeyPress={keyPressInterceptor}
          onChange={handleInputChange(setCardNumbers)}
          required
          autoFocus
        />
        <input
          ref={cardNumberRef[2]}
          type="tel"
          name="2"
          placeholder="1234"
          maxLength={SINGLE_CARD_NUMBER_LENGTH}
          onKeyPress={keyPressInterceptor}
          onChange={handleInputChange(setCardNumbers)}
        />
        <input
          type="password"
          name="3"
          placeholder="****"
          maxLength={SINGLE_CARD_NUMBER_LENGTH}
          ref={cardNumberRef[3]}
          value={cardNumbers[3]}
          onFocus={handleOpen}
          onChange={handleInputChange(setCardNumbers)}
        />
        <input
          type="password"
          name="4"
          placeholder="****"
          maxLength={SINGLE_CARD_NUMBER_LENGTH}
          ref={cardNumberRef[4]}
          value={cardNumbers[4]}
          onFocus={handleOpen}
          onChange={handleInputChange(setCardNumbers)}
        />
      </InputContainer>
      {open && (
        <VirtualKeyboard
          onClose={closeVirtualKeyboard}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default CardNumberInput;

const SINGLE_CARD_NUMBER_LENGTH = 4;

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
