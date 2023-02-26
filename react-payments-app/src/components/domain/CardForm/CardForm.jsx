import { useEffect, useState } from 'react';

// import Button from '../../common/Button/Button';
import CardNumbersInput from '../CardInput/CardNumbers/CardNumbersInput';
import CardExpirationDateInput from '../CardInput/CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from '../CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../CardInput/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../CardInput/CardPassword/CardPasswordInput';
import Button from '../../common/Button/Button';
import { useCard } from '../../../store/CardContext';

const CardForm = ({ onSubmit, onChange }) => {
  const { cardInfo, changeCardInfo } = useCard();

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [cardPassword, setCardPassword] = useState(['', '']);
  const [error, setError] = useState('');

  const handleCardNumbersChange = (cardNumbers, error) => {
    setCardNumbers(cardNumbers);
    setError(error);
  };

  const handleCardExpirationDateChange = (cardExpirationDate, error) => {
    setCardExpirationDate(cardExpirationDate);
    setError(error);
  };

  const handleCardOwnerChange = (cardOwner, error) => {
    setCardOwner(cardOwner);
    setError(error);
  };

  const handleCardPasswordChange = (password, error) => {
    setCardPassword(password);
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      cardNumbers,
      cardExpirationDate,
      cardOwner,
      cardCVC,
      cardPassword,
    });
  };

  useEffect(() => {
    onChange({
      cardNumbers,
      cardExpirationDate,
      cardOwner,
      cardCVC,
      cardPassword,
    });
  }, [cardNumbers, cardExpirationDate, cardOwner, cardCVC, cardPassword]);

  return (
    <div id='card-form' className='w-90'>
      <form>
        <CardNumbersInput onChange={handleCardNumbersChange} />
        <CardExpirationDateInput onChange={handleCardExpirationDateChange} />
        <CardOwnerInput onChange={handleCardOwnerChange} />
        <CardCVCInput />
        <CardPasswordInput onChange={handleCardPasswordChange} />

        <Button title='다음' type='submit' onClick={handleSubmit} />
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {cardInfo.error}
      </div>
    </div>
  );
};

export default CardForm;
