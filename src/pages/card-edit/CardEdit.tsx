import React, { useState } from 'react';
import { Card, CardNumberInput, CvcInput, ExpiredInput, Frame, Link, OwnerInput, PinInput } from '../../components';

function CardList() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState(0);
  const [expiredYear, setExpiredYear] = useState(0);
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
    return;
  };

  const handleExpiredChange = (expiredMonth: number, expiredYear: number) => {
    setExpiredMonth(expiredMonth);
    setExpiredYear(expiredYear);
    return;
  };

  const handleOwnerChange = (owner: string) => {
    setOwner(owner);
  };

  const handleCvcChange = (cvc: string) => {
    setCvc(cvc);
  };
  return (
    <Frame title="카드 추가" backLink={'/'}>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc} />
      <CardNumberInput onCardNumberChange={handleCardNumberChange} />
      <ExpiredInput onExpiredChange={handleExpiredChange} />
      <OwnerInput onOwnerChanged={handleOwnerChange} />
      <CvcInput onChange={handleCvcChange} />
      <PinInput />
      <div className="button-box">
        <div className="button-text">
          <Link to="/card-detail">다음</Link>
        </div>
      </div>
    </Frame>
  );
}

export default CardList;
