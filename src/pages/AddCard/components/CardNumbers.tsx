import { Fragment } from 'react/jsx-runtime';
import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardNumber from '../hooks/useCardNumber';

const CardNumbers = () => {
  const { cardNumber, handleNumbers } = useCardNumber();

  return (
    <InputContainer label='카드 번호'>
      <div className='input-box'>
        {Object.entries(cardNumber).map(([key, value], index) => (
          <Fragment key={key}>
            <Input
              type={index > 1 ? 'password' : 'text'}
              name={key}
              onChange={handleNumbers}
              value={cardNumber[key as keyof typeof cardNumber]}
            />
            {value.length === 4 && index < 3 && <span>-</span>}
          </Fragment>
        ))}
      </div>
    </InputContainer>
  );
};

export default CardNumbers;
