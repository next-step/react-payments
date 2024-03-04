import Input from '../atoms/Input';
import InputBox from '../atoms/InputBox';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

export default function ExpirationDate() {
  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox className='w-50'>
        <Input type='text' placeholder='MM' />
        <Input type='text' placeholder='YY' />
      </InputBox>
    </InputContainer>
  );
}
