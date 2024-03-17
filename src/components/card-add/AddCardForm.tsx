import { useRef, useState } from 'react';

import Header from './Header';
import CardBox from '../CardBox';
import Card from '../Card';
import CardNumber from './CardNumber';
import ExpirationDate from './ExpirationDate';
import OwnerName from './OwnerName';
import SecurityCode from './SecurityCode';
import CardPassword from './CardPassword';
import ClickableLink from './ClickableLink';
import CardCompanyList from './CardCompanyList';

import type {
  CardNumberType,
  ExpirationDateType,
  CardPasswordNumberType,
} from '../../types/CardFormType';

import { useCardContext } from '../hooks/useCardContext';

import isFulledForm from '../../utils/isFulledForm';
import { useCardsContext } from '../hooks/useCardsContext';

const cardAlias = '';

export default function AddCardForm() {
  const id = useRef(Math.floor(Math.random() * 1000000)).current;

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

  const [cardCompany, setCardCompany] = useState('');

  const [isClick, setIsClick] = useState(false);

  const { addCard } = useCardContext();
  const { addCardInList } = useCardsContext();

  const isFormFilled = isFulledForm({
    cardNumber,
    cardPassword,
    securityCode,
    expirationDate,
  });

  console.log(isFormFilled);

  const handleClickButton = () => {
    setIsClick(true);

    addCard({
      id,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      cardPassword,
      cardCompany,
      cardAlias,
    });

    addCardInList({
      id,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      cardPassword,
      cardCompany,
      cardAlias,
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
          location={`/add/complete/${String(id)}`}
          text="다음"
          onClick={handleClickButton}
          disable={!isFormFilled}
          isClick={isClick}
        />
      </div>
      {cardCompany ? '' : <CardCompanyList setCardCompany={setCardCompany} />}
    </div>
  );
}
