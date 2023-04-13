import React, { FormEvent, useCallback, useMemo, useRef, useState } from 'react';
import { Card, CardNumbersInput, CvcInput, ExpiredInput, Frame, OwnerInput, PinInput } from '../../components';
import { useCardContext } from '../../context/CardContext';
import { useStepContext } from '../../context/StepContext';
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
import { CardTypeModal } from '../../components/CardTypeModal';
import { ICardType } from '../../domain/payments/types';
import { PAYMENTS_STEP } from '../../constants';

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [pin, setPin] = useState('');
  const [cardTypeSelected, setCardTypeSelected] = useState(false);

  const inputs = [cardNumbers, expiredMonth, expiredYear, owner, cvc, pin];

  const { setStep } = useStepContext();
  const { card, setCard } = useCardContext();

  const refs = {
    cardNumber: useRef<HTMLInputElement>(null),
    expired: useRef<HTMLInputElement>(null),
    owner: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
    pin: useRef<HTMLInputElement>(null),
    nextButton: useRef<HTMLButtonElement>(null),
  };

  const validations: { [key: string]: [boolean, React.RefObject<HTMLInputElement>, string] } = useMemo(
    () => ({
      cardNumbers: [isValidCardNumber(cardNumbers), refs.cardNumber, '카드번호가 올바르게 입력되었는지 확인해 주세요'],
      expired: [
        isValidExpiredMonth(expiredMonth) && isValidExpiredYear(expiredYear),
        refs.expired,
        '만료 연/월이 올바르게 입력되었는지 확인해 주세요',
      ],
      owner: [isValidOwner(owner), refs.owner, '소유자 이름이 올바르게 입력되었는지 확인해 주세요'],
      cvc: [isValidCvc(cvc), refs.cvc, 'CVC가 올바르게 입력되었는지 확인해 주세요'],
      pin: [isValidPin(pin), refs.pin, '비밀번호 앞 2자리가 올바르게 입력되었는지 확인해 주세요'],
    }),
    [...inputs, refs]
  );
  const isValid = useMemo(() => Object.values(validations).every(([isValid]) => isValid), [...inputs]);

  const getValidationCaption = useCallback(
    (key: string) => {
      const validation = validations[key];
      if (!validation) throw new Error('올바르지 않은 속성 값을 입력하셨습니다');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [isValid, _, message] = validation;
      return isValid ? '' : message;
    },
    [...inputs, refs]
  );

  const handleExpired = useCallback(([expiredMonth, expiredYear]: string[]) => {
    setExpiredMonth(expiredMonth);
    setExpiredYear(expiredYear);
    return;
  }, []);

  const handleBackStep = useCallback(() => {
    setStep?.(PAYMENTS_STEP.LIST);
  }, [setStep]);

  const handleSelectedCardType = useCallback(
    (cardType?: ICardType) => {
      setCardTypeSelected(true);
      if (!cardType) {
        return;
      }

      const { cardName, cardNumberPrefix } = cardType;
      setCard?.({
        name: cardName,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });

      setCardNumbers((cardNumbers) => [...cardNumberPrefix, ...cardNumbers.slice(2)]);
    },
    [...inputs]
  );

  const handleEnrollStep = useCallback(
    (event: FormEvent) => {
      if (!isValid) {
        event.preventDefault();
        return;
      }

      setCard?.({
        name: card?.name,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });
      setStep?.(PAYMENTS_STEP.DONE);
    },
    [setStep, ...inputs, refs]
  );

  const handleCardNumbers = (numbers: string[]) => {
    setCardNumbers(numbers);
  };

  return (
    <Frame title="카드 추가" onBackClick={handleBackStep}>
      <Card card={{ owner, expiredMonth, expiredYear, numbers: cardNumbers, cvc }}>
        <div className="card-controller">
          <button onClick={() => setCardTypeSelected(false)}>카드사 선택</button>
        </div>
      </Card>

      <form onSubmit={handleEnrollStep}>
        <CardNumbersInput
          values={cardNumbers}
          nextRef={refs.expired}
          onChange={handleCardNumbers}
          caption={getValidationCaption('cardNumbers')}
        />
        <ExpiredInput
          ref={refs.expired}
          nextRef={refs.owner}
          onChange={handleExpired}
          caption={getValidationCaption('expired')}
        />
        <OwnerInput ref={refs.owner} nextRef={refs.cvc} onChange={setOwner} caption={getValidationCaption('owner')} />
        <CvcInput
          value={cvc}
          ref={refs.cvc}
          nextRef={refs.pin}
          onChange={setCvc}
          caption={getValidationCaption('cvc')}
        />
        <PinInput
          value={pin}
          ref={refs.pin}
          nextRef={refs.nextButton}
          onChange={setPin}
          caption={getValidationCaption('pin')}
        />

        <div className="button-box">
          <div className="button-text">
            <button ref={refs.nextButton} disabled={!isValid}>
              다음
            </button>
          </div>
        </div>
      </form>
      {!cardTypeSelected && <CardTypeModal onClick={handleSelectedCardType} />}
    </Frame>
  );
}

export default React.memo(CardEdit);
