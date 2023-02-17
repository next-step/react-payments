import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { CardNumberInput } from '../../components/CardNumberInput';
import { CvcInput } from '../../components/CvcInput';
import { ExpiredInput } from '../../components/ExpiredInput';
import { Frame } from '../../components/Frame';
import { OwnerInput } from '../../components/OwnerInput';
import { PasswordInput } from '../../components/PasswordInput';

function CardList() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState<number>(0);
  const [expiredYear, setExpiredYear] = useState<number>(0);
  const [owner, setOwner] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');

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
    <Frame title="카드 추가" backClickable={true}>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc} />
      <CardNumberInput onCardNumberChange={handleCardNumberChange} />
      <ExpiredInput onExpiredChange={handleExpiredChange} />
      <OwnerInput onOwnerChanged={handleOwnerChange} />
      <CvcInput onCvcChange={handleCvcChange} />
      <PasswordInput />
      <div className="button-box">
        <div className="button-text">다음</div>
      </div>
    </Frame>
  );
}

export default CardList;
