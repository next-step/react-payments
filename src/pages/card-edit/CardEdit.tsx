import React, { useCallback, useRef, useState } from 'react';
import { Card, CardNumberInput, CvcInput, ExpiredInput, Frame, Link, OwnerInput, PinInput } from '../../components';
import '../../styles/input.css';
import '../../styles/utils.css';

const handleOnFulfill = (data: unknown) => console.log(data);

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');

  const refs = {
    cardNumber: useRef<HTMLInputElement>(null),
    expired: useRef<HTMLInputElement>(null),
    owner: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
    pin: useRef<HTMLInputElement>(null),
  };

  const handleExpiredChange = useCallback(
    ([expiredMonth, expiredYear]: string[]) => {
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
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc} />

      <CardNumberInput ref={refs.cardNumber} nextRef={refs.expired} onChange={setCardNumbers} />
      <ExpiredInput
        ref={refs.expired}
        prevRef={refs.cardNumber}
        nextRef={refs.owner}
        onChange={handleExpiredChange}
        onFulfill={handleOnFulfill}
      />
      <OwnerInput
        ref={refs.owner}
        prevRef={refs.expired}
        nextRef={refs.cvc}
        onChange={setOwner}
        onFulfill={handleOnFulfill}
      />
      <CvcInput
        ref={refs.cvc}
        prevRef={refs.owner}
        nextRef={refs.pin}
        onChange={handleCvcChange}
        onFulfill={handleOnFulfill}
      />
      <PinInput ref={refs.pin} prevRef={refs.cvc} onFulfill={handleOnFulfill} />

      <div className="button-box">
        <div className="button-text">
          <Link to="/card-detail">다음</Link>
        </div>
      </div>
    </Frame>
  );
}

export default React.memo(CardEdit);
