import { InputContainer } from '../index';
import { useInput } from '../../hooks';
import { Input } from '../../components';
import { FormProps } from '../../pages/RegisterCard';

export default function CardHolderContainer({ filter }: FormProps) {
  const cardHolder = useInput('');
  const countValue = cardHolder.value.length;

  return (
    <InputContainer title="카드 소유자 이름(선택)" anchor={`(${countValue}/30)`}>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        {...cardHolder}
        filter={filter}
      />
    </InputContainer>
  );
}