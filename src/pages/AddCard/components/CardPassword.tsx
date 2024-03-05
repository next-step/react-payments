import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardPassword from '../hooks/useCardPassword';

const CardPassword = () => {
  const { password, handlePassword } = useCardPassword();

  return (
    <InputContainer label='카드 비밀번호'>
      <div style={{ display: 'flex', gap: 6 }}>
        {Object.keys(password).map((key) => (
          <Input
            key={key}
            className='w-15'
            name={key}
            type='password'
            value={password[key as keyof typeof password]}
            onChange={handlePassword}
          />
        ))}
        <div className='flex-center w-15'>•</div>
        <div className='flex-center w-15'>•</div>
      </div>
    </InputContainer>
  );
};

export default CardPassword;
