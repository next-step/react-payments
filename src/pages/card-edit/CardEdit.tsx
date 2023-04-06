import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { Card, CardNumberInput, CvcInput, ExpiredInput, Frame, OwnerInput, PinInput } from '../../components';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import {
  isValidCardNumber,
  isValidExpiredMonth,
  isValidExpiredYear,
  isValidOwner,
  isValidCvc,
  isValidPin,
} from '../../domain/payments/validator';
import '../../styles/input.css';
import '../../styles/utils.css';

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [pin, setPin] = useState('');

  const inputs = [cardNumbers, expiredMonth, expiredYear, owner, cvc, pin];

  const { setStep } = useStepContext();

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

  const handleEnrollStep = useCallback(
    (event: FormEvent) => {
      //유효성 검사 구간
      const validations: [boolean, React.RefObject<HTMLInputElement>, string][] = [
        [isValidCardNumber(cardNumbers), refs.cardNumber, '카드번호가 올바르게 입력되었는지 확인해 주세요'],
        [isValidExpiredMonth(expiredMonth), refs.expired, '만료 월이 올바르게 입력되었는지 확인해 주세요'],
        [isValidExpiredYear(expiredYear), refs.expired, '만료 연도가 올바르게 입력되었는지 확인해 주세요'],
        [isValidOwner(owner), refs.owner, '소유자 이름이 올바르게 입력되었는지 확인해 주세요'],
        [isValidCvc(cvc), refs.cvc, 'CVC가 올바르게 입력되었는지 확인해 주세요'],
        [isValidPin(pin), refs.pin, '비밀번호 앞 2자리가 올바르게 입력되었는지 확인해 주세요'],
      ];

      // TODO: step2에서 입력 유효성 체크 메시지 출력할 때는 코드가 바뀔 예정이에요 (e.g. Array.prototype.forEach)
      for (const [isValid, ref, message] of validations) {
        if (!isValid) {
          ref?.current?.focus();
          event.preventDefault();
          alert(message);
          return false;
        }
      }

      setStep && setStep(PAYMENTS_STEP.DONE);
    },
    [setStep, ...inputs, refs]
  );

  return (
    <Frame title="카드 추가" onBackClick={handleBackStep}>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={cardNumbers} cvc={cvc} />

      <form onSubmit={handleEnrollStep}>
        <CardNumberInput ref={refs.cardNumber} nextRef={refs.expired} onChange={setCardNumbers} />
        <ExpiredInput ref={refs.expired} nextRef={refs.owner} onChange={handleExpired} />
        <OwnerInput ref={refs.owner} nextRef={refs.cvc} onChange={setOwner} />
        <CvcInput ref={refs.cvc} nextRef={refs.pin} onChange={handleCvc} />
        <PinInput ref={refs.pin} onChange={handlePin} />

        <div className="button-box">
          <div className="button-text">
            <button>다음</button>
          </div>
        </div>
      </form>
    </Frame>
  );
}

export default React.memo(CardEdit);
