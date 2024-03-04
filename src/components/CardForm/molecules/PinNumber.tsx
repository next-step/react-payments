import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

export default function PinNumber() {
  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <Input type='password' className='w-15' />
      <Input type='password' className='w-15' />
      <Input type='password' className='w-15' />
      <Input type='password' className='w-15' />
    </InputContainer>
  );
}
