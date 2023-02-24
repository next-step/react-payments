import { useEffect, useState } from 'react';

// import Button from '../../common/Button/Button';
import CardNumbersInput from '../CardInput/CardNumbers/CardNumbersInput';
import CardExpirationDateInput from '../CardInput/CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from '../CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../CardInput/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../CardInput/CardPassword/CardPasswordInput';

const CardForm = ({ onSubmit, onChange }) => {
  //TODO: 로직 구현

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

  const handleCardCVCChange = (cardCVC, error) => {
    setCardCVC(cardCVC);
    setError(error);
  };

  const handleCardPasswordChange = (password, error) => {
    setCardPassword(password);
    setError(error);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   onSubmit({
  //     cardNumbers,
  //     cardExpirationDate,
  //     cardOwner,
  //     cardCVC,
  //     cardPassword,
  //   });
  // };

  // useEffect(() => {
  //   onChange({
  //     cardNumbers,
  //     cardExpirationDate,
  //     cardOwner,
  //     cardCVC,
  //     cardPassword,
  //   });
  // }, [cardNumbers, cardExpirationDate, cardOwner, cardCVC, cardPassword]);

  return (
    <div id='card-form' className='w-100'>
      <form>
        <CardNumbersInput onChange={handleCardNumbersChange} />
        <CardExpirationDateInput onChange={handleCardExpirationDateChange} />
        <CardOwnerInput onChange={handleCardOwnerChange} />
        <CardCVCInput onChange={handleCardCVCChange} />
        <CardPasswordInput onChange={handleCardPasswordChange} />
        {/* 
        
        
       
        <Button title='다음' type='submit' onClick={handleSubmit} /> */}
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {/* {error} */}
      </div>
    </div>
  );
};

export default CardForm;
