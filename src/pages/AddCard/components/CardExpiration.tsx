import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardExpiration from '../hooks/useCardExpiration';

const CardExpiration = () => {
  const { expiration, handleExpirationDate } = useCardExpiration();

  return (
    <InputContainer label='만료일' className='w-50'>
      <div className='input-box'>
        <Input
          name='month'
          placeholder='MM'
          value={expiration.month}
          onChange={handleExpirationDate}
        />
        <span>/</span>
        <Input
          name='year'
          placeholder='YY'
          value={expiration.year}
          onChange={handleExpirationDate}
        />
      </div>
    </InputContainer>
  );
};

export default CardExpiration;
