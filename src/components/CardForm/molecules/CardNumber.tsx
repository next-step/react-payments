import Input from '../atoms/Input';
import InputBox from '../atoms/InputBox';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

export default function CardNumber() {
  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <Input type='text' />
        <Input type='text' />
        <Input type='password' />
        <Input type='password' />
      </InputBox>
    </InputContainer>
  );
}
