import React, { useCallback, useState } from 'react';
import { Card, CardNumberInput, CvcInput, ExpiredInput, Frame, Link, OwnerInput, PinInput } from '../../components';

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');

  const handleExpiredChange = useCallback(
    (expiredMonth: string, expiredYear: string) => {
      setExpiredMonth(expiredMonth);
      setExpiredYear(expiredYear);
      return;
    },
    [expiredMonth, expiredYear]
  );

  const handleCvcChange = useCallback(
    ([newCvc]: string[]) => {
      setCvc(newCvc);
    },
    [cvc]
  );

  return (
    <Frame title="카드 추가" backLink={'/'}>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc[0]} />
      <CardNumberInput onChange={setCardNumbers} />
      <ExpiredInput onChange={handleExpiredChange} />
      <OwnerInput onChange={setOwner} />
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

export default React.memo(CardEdit);
