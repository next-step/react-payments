import { useState } from 'react';

import Header from './Header';
import CardBox from '../CardBox';
import Card from '../Card';
import CardNumber from './CardNumber';
import ExpirationDate from './ExpirationDate';
import OwnerName from './OwnerName';
import SecurityCode from './SecurityCode';
import CardPassword from './CardPassword';
import ClickableLink from './ClickableLink';

import type {
  CardNumberType,
  ExpirationDateType,
  CardPasswordNumberType,
} from '../../types/CardFormType';

import { useCardContext } from '../hooks/useCardContext';
import useCardFormData from '../hooks/useCardForm';

import CardProvider from '../../context/CardProvider';

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<CardNumberType>({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
  });

  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const [cardPassword, setCardPassword] = useState<CardPasswordNumberType>({
    firstNumber: '',
    secondNumber: '',
  });

  const [isClick, setIsClick] = useState(false);

  const { addCard } = useCardContext();

  const isFulledForm = useCardFormData({
    cardNumber,
    cardPassword,
    securityCode,
    expirationDate,
  });

  const isFormFilled = isFulledForm();

  const handleClickButton = () => {
    setIsClick(true);

    addCard({
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      cardPassword,
    });
  };

  return (
    <div className="root">
      <div className="app">
        <Header />
        <CardBox>
          <Card
            variant="small"
            cardNumber={cardNumber}
            ownerName={ownerName}
            expirationDate={expirationDate}
          />
        </CardBox>
        <CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <ExpirationDate
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
        />
        <OwnerName ownerName={ownerName} setOwnerName={setOwnerName} />
        <SecurityCode
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
        />
        <CardPassword
          cardPassword={cardPassword}
          setCardPassword={setCardPassword}
        />
        <ClickableLink
          location="/add/complete"
          text="다음"
          onClick={handleClickButton}
          disable={!isFormFilled}
          isClick={isClick}
        />
      </div>
    </div>
  );
}
