import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import CardSecurityCode from '../components/CardSecurityCode';
import CardExpiration from '../components/CardExpiration';
import CardNumberInput from '../components/CardNumberInput';
import CardPassword from '../components/CardPassword';
import CardholderName from '../components/CardholderName';
import CardBox from './CardBox';

import '../styles/index.css';

type CardNumber = [string, string, string, string];

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(['', '', '', '']);

  const handleChangeCardNumber = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const nextCardNumber: CardNumber = [...cardNumber];
    const { value } = e.target;
    nextCardNumber[index] = value;
    if (Number.isNaN(Number(value))) return;
    if (nextCardNumber[index].length > 4) return;
    setCardNumber(nextCardNumber);
  };

  const [expiration, setExpiration] = useState({
    month: '',
    year: '',
  });
  const getExpirationMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const parseValue = parseInt(value, 10);

    if (Number.isNaN(Number(value)) || (name === 'month' && (parseValue < 1 || parseValue > 12))) return;

    // let formattedValue = value;
    // if (name === 'month' && value.length === 1) {
    //   formattedValue = `0${value}`;
    // }

    setExpiration((prevExpiration) => ({
      ...prevExpiration,
      [name]: value,
    }));
  };

  const [cardHolderName, setcCardHolderName] = useState('');
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (cardHolderName.length < 30) setcCardHolderName(value.slice(0, 30));
  };

  const [security, setSecurity] = useState('');
  const getSecurity = (e: ChangeEvent<HTMLInputElement>) => {
    setSecurity(e.currentTarget.value.replace(/[^0-9]/g, ''));
  };

  const [cardPassword, setCardPassword] = useState({
    num1: '',
    num2: '',
  });
  const getCardPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCardPassword({
      ...cardPassword,
      [e.currentTarget.name]: e.currentTarget.value.replace(/[^0-9]/g, ''),
    });
  };

  return (
    <div>
      <h2>1️⃣ 카드 추가</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            {' '}
            <Link to="/" className="link-button mr-20">
              &lt;
            </Link>{' '}
            카드 추가{' '}
          </h2>
          <CardBox numbers={cardNumber} expiration={expiration} cardHolderName={cardHolderName} />
          <CardNumberInput cardNumber={cardNumber} onChange={handleChangeCardNumber} />
          <CardExpiration expiration={expiration} onChange={getExpirationMonth} />
          <CardholderName cardHolderName={cardHolderName} onChange={onChangeName} />
          <CardSecurityCode security={security} onChange={getSecurity} />
          <CardPassword cardPassword={cardPassword} onChange={getCardPassword} />
          <div className="button-box">
            <Link to="/complete-card" className="link-button">
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
