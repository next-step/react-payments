import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Card, CardNumberInput, CvcInput, ExpiredInput, Frame, OwnerInput, PinInput } from '../../components';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import '../../styles/input.css';
import '../../styles/utils.css';

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [pin, setPin] = useState('');

  const [passed, setPassed] = useState(false);
  const inputs = [cardNumbers, expiredMonth, expiredYear, owner, cvc, pin];

  const { setStep } = useStepContext();

  useEffect(() => {
    const others = inputs.slice(1);
    if (cardNumbers.every((s) => s.length) && others.every((input) => input.length)) {
      setPassed(true);
    }
  }, inputs);

  const refs = {
    cardNumber: useRef<HTMLInputElement>(null),
    expired: useRef<HTMLInputElement>(null),
    owner: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
    pin: useRef<HTMLInputElement>(null),
  };

  const handleExpired = useCallback(
    ([expiredMonth, expiredYear]: string[]) => {
      setExpiredMonth(expiredMonth);
      setExpiredYear(expiredYear);
      return;
    },
    [expiredMonth, expiredYear]
  );

  const handleCvc = useCallback(
    ([newCvc]: string[]) => {
      setCvc(newCvc);
    },
    [cvc]
  );

  const handlePin = useCallback(
    (strings: string[]) => {
      setPin(strings.join(''));
    },
    [pin]
  );

  const handleBackStep = useCallback(() => {
    setStep && setStep(PAYMENTS_STEP.LIST);
  }, [setStep]);

  const handleNextStep = useCallback(() => {
    if (!passed) {
      return;
    }

    // nextStep
    setStep && setStep(PAYMENTS_STEP.DONE);
  }, [setStep, ...inputs]);

  return (
    <Frame title="카드 추가" onBackClick={handleBackStep}>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc} />

      <form>
        <CardNumberInput ref={refs.cardNumber} nextRef={refs.expired} onChange={setCardNumbers} />
        <ExpiredInput ref={refs.expired} nextRef={refs.owner} onChange={handleExpired} />
        <OwnerInput ref={refs.owner} nextRef={refs.cvc} onChange={setOwner} />
        <CvcInput ref={refs.cvc} nextRef={refs.pin} onChange={handleCvc} />
        <PinInput ref={refs.pin} onChange={handlePin} />

        <div className="button-box">
          <div className="button-text">
            <button onClick={handleNextStep}>다음</button>
          </div>
        </div>
      </form>
    </Frame>
  );
}

export default React.memo(CardEdit);
