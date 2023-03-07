import { memo, useCallback, useState } from 'react';
import { Input } from '../../atoms';
import { InputContainer } from '../../molecules';
import { onlyNumber } from '../../../utils/keyInterceptor';
import { useFocusRef, useRefs } from '../../../hooks';
import useCardDispatch from '../../../provider/card-box/hooks/useCardDispatch';
import { filterCardNumber } from '../../../utils/filter';

const MAX_LENGTH = 4;
const CARD_LENGTH = 16;
const VALIDATE_ERROR = '카드 번호를 입력 해 주세요.';

function CardNumber() {
  const cardDispatch = useCardDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [cardNumberRef, getCardRefs] = useRefs<HTMLInputElement>([0, 1, 2, 3]);

  const handleChange = useCallback(() => {
    const cardNumber = getCardRefs().map((item) => item.value).join('');

    cardDispatch({
      type: 'SET_CARD',
      payload: { cardNumber: filterCardNumber(cardNumber) }
    });
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
        nextFocus={useFocusRef(cardNumberRef[1])}
        onKeyDown={onlyNumber}
      />
      -
      <Input
        ref={cardNumberRef[1]}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        nextFocus={useFocusRef(cardNumberRef[2])}
        onKeyDown={onlyNumber}
      />
      -
      <Input
        ref={cardNumberRef[2]}
        onChange={handleChange}
        type="password"
        maxLength={MAX_LENGTH}
        nextFocus={useFocusRef(cardNumberRef[3])}
        onKeyDown={onlyNumber}
      />
      -
      <Input
        ref={cardNumberRef[3]}
        onChange={handleChange}
        type="password"
        maxLength={MAX_LENGTH}
        onKeyDown={onlyNumber}
      />
    </InputContainer>
  );
}

export default memo(CardNumber);
