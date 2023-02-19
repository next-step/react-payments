import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import CardNumbersInput from './CardNumbers/CardNumbersInput';
import CardExpirationDateInput from './CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from './CardOwner/CardOwnerInput';
import CardCVCInput from './CardCVC/CardCVCInput';
import CardPasswordInput from './CardPassword/CardPasswordInput';

const CardForm = ({ onSubmit, onChange }) => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState('');
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState(['', '']);
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

  const handleCVCChange = (CVC, error) => {
    setCVC(CVC);
    setError(error);
  };

  const handlePasswordChange = (password, error) => {
    setPassword(password);
    setError(error);
  };

  // submit이 일어나면 -> validation 후 카드 정보로 저장
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ cardNumbers, cardExpirationDate, cardOwner, CVC, password });
  };

  // change가 일어나면 -> 카드UI에 실시간 반영. 아직 검증x 이므로 카드 정보 저장되는 건 x
  useEffect(() => {
    onChange({ cardNumbers, cardExpirationDate, cardOwner, CVC, password });
  }, [cardNumbers, cardExpirationDate, cardOwner, CVC, password]);

  return (
    <>
      <div id='card-form' className='w-100'>
        <form>
          <CardNumbersInput onChange={handleCardNumbersChange} />
          <CardExpirationDateInput onChange={handleCardExpirationDateChange} />
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
