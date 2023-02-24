import { Input, InputContainer } from '../../components/form';
import { onlyString } from '../../utils/filter';
import { IRegisterCard } from '../../pages/RegisterCard';
import { useRef } from 'react';

const MAX_LENGTH = 30;

export default function CardHolderContainer({ onChange }: IRegisterCard) {
  const cardHolderRef = useRef<HTMLInputElement>(null);
  const countValue = cardHolderRef.current?.value.length || 0;

  const handleChange = () => {
    const cardHolder = onlyString(cardHolderRef?.current.value);

    cardHolderRef.current.value = cardHolder;
    onChange({ cardHolder });
  };

  return (
    <InputContainer title="카드 소유자 이름(선택)" charLength={`(${countValue}/30)`}>
      <Input
        ref={cardHolderRef}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
    </InputContainer>
  );
}