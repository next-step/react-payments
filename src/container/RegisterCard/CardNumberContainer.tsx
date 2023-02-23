import { useCallback, useState } from 'react';
import { Input, InputContainer } from '../../components/form';
import { IRegisterCard } from '../../pages/RegisterCard';
import { onlyNumber } from '../../utils/filter';
import { useRefs } from '../../hooks';

const MAX_LENGTH = 4;
const CARD_LENGTH = 16;
const VALIDATE_ERROR = '카드 번호를 입력 해 주세요.';

export default function CardNumberContainer({ onChange }: IRegisterCard) {
  const [errorMessage, setErrorMessage] = useState('');
  const [cardNumberRef, getCardRefs] = useRefs<HTMLInputElement>([0, 1, 2, 3]);

  const handleChange = useCallback(() => {
    const cardNumber = getCardRefs().map((item) => {
      item.value = onlyNumber(item.value);
      return item.value;
    }).join('');

    onChange({ cardNumber });
    setErrorMessage(cardNumber.length === CARD_LENGTH ? '' : VALIDATE_ERROR);
  }, []);

  return (
    <InputContainer
      title="카드 번호"
      errorMessage={errorMessage}
    >
      <Input
        ref={cardNumberRef[0]}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        nextFocus={() => cardNumberRef[1].current?.focus()}
      />
      -
      <Input
        ref={cardNumberRef[1]}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        nextFocus={() => cardNumberRef[2].current?.focus()}
      />
      -
      <Input
        ref={cardNumberRef[2]}
        onChange={handleChange}
        type="password"
        maxLength={MAX_LENGTH}
        nextFocus={() => cardNumberRef[3].current?.focus()}
      />
      -
      <Input
        ref={cardNumberRef[3]}
        onChange={handleChange}
        type="password"
        maxLength={MAX_LENGTH}
      />
    </InputContainer>
  );
}