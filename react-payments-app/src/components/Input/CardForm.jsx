import { useState } from 'react';

import Button from '../Button/Button';
import CardNumbersInput from './CardNumbers/CardNumbersInput';
import CardExpirationDateInput from './CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from './CardOwner/CardOwnerInput';
import CardCVCInput from './CardCVC/CardCVCInput';
import CardPasswordInput from './CardPassword/CardPasswordInput';

const CardForm = ({ onSubmit }) => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState('');
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState(['', '']);
  const [error, setError] = useState('');

  const handleCardNumbersChange = (cardNumbers, error) => {
    setCardNumbers(cardNumbers);
    setError(error);
  };

  const handleExpirationDateChange = (expirationDate, error) => {
    setExpirationDate(expirationDate);
    setError(error);
  };

  const handleCardOwnerChange = (cardOwner, error) => {
    setCardOwner(cardOwner);
    setError(error);
  };

  const handleCVCChange = (CVC, error) => {
    setCVC(CVC);
    setError(error);
  };

  const handlePasswordChange = (password, error) => {
    setPassword(password);
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(password);
    onSubmit({ cardNumbers, expirationDate, cardOwner, CVC, password });
  };

  return (
    <>
      <div id='card-form' className='w-100'>
        <form>
          <CardNumbersInput onChange={handleCardNumbersChange} />
          <CardExpirationDateInput onChange={handleExpirationDateChange} />
          <CardOwnerInput onChange={handleCardOwnerChange} />
          <CardCVCInput onChange={handleCVCChange} />
          <CardPasswordInput onChange={handlePasswordChange} />
          <Button title='다음' type='submit' onClick={handleSubmit} />
        </form>
        <div id='card-form-label' style={{ color: 'red' }}>
          {error}
        </div>
      </div>
    </>
  );
};

export default CardForm;
