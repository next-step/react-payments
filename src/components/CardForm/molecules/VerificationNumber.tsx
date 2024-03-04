import Input from '../atoms/Input';
import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

export default function VerificationNumber() {
  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <Input type='password' className='w-25' />
    </InputContainer>
  );
}
