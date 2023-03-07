import { Input } from '../../atoms';
import { InputContainer } from '../../molecules';
import { memo, useCallback, useRef, useState } from 'react';
import { useCardDispatch } from '../../../provider/card/hooks';

const MAX_LENGTH = 30;

function CardHolder() {
  const cardDispatch = useCardDispatch();
  const cardHolderRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {
    const cardHolder = cardHolderRef?.current.value;

    setCount(cardHolder.length);
    cardDispatch({
      type: 'SET_CARD',
      payload: { cardHolder }
    });
  }, []);

  return (
    <InputContainer title="카드 소유자 이름(선택)" charLength={`(${count}/30)`}>
      <Input
        ref={cardHolderRef}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
    </InputContainer>
  );
}

export default memo(CardHolder);
