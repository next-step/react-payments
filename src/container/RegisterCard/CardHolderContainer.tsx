import { Input, InputContainer } from '../../components/form';
import { useInput } from '../../hooks';
import { onlyString } from '../../utils/filter';
import { IRegisterCard } from '../../pages/RegisterCard';
import { useEffect } from 'react';

const MAX_LENGTH = 30;

export default function CardHolderContainer({ onChange }: IRegisterCard) {
  const cardHolder = useInput('');
  const countValue = cardHolder.value.length;

  useEffect(() => {
    onChange({ cardHolder: cardHolder.value });
  }, [cardHolder.value]);

  return (
    <InputContainer title="카드 소유자 이름(선택)" anchor={`(${countValue}/30)`}>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        {...cardHolder}
        filter={onlyString}
      />
    </InputContainer>
  );
}