import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

export default function CardHolderName() {
  return (
    <InputContainer>
      <InputTitle>카드 소유자 이름(선택)</InputTitle>
      <Input
        type='text'
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
      />
    </InputContainer>
  );
}
