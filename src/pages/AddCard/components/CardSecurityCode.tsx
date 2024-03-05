import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardSecurityCode from '../hooks/useCardSecurityCode';

const CardSecurityCode = () => {
  const { securityCode, handleSecurityCode } = useCardSecurityCode();

  return (
    <InputContainer label='보안코드'>
      <Input
        className='w-25'
        type='password'
        value={securityCode}
        onChange={handleSecurityCode}
      />
    </InputContainer>
  );
};

export default CardSecurityCode;
