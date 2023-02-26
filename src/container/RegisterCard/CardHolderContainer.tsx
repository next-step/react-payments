import { Input, InputContainer } from '../../components/form';
import { IRegisterCard } from '../../pages/RegisterCard';
import { memo, useCallback, useRef, useState } from 'react';

const MAX_LENGTH = 30;

function CardHolderContainer({ onChange }: IRegisterCard) {
  const cardHolderRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {
    const cardHolder = cardHolderRef?.current.value;

    setCount(cardHolder.length);
    onChange({ cardHolder });
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

export default memo(CardHolderContainer);