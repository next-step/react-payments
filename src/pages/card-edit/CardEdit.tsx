import React, { useRef, useState } from 'react';
import { Card, CardNumbersInput, CvcInput, ExpiredInput, Frame, OwnerInput, PinInput } from '../../components';
import '../../styles/input.css';
import '../../styles/utils.css';
import { CardTypeModal } from '../../components/CardTypeModal';
import useValidators from './hooks/useValidators';
import useHandlers from './hooks/useHandlers';
import { TCardEditProperties, TCardEditRefs, TCardEditSetters } from './types';

function CardEdit() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [pin, setPin] = useState('');
  const [cardTypeSelected, setCardTypeSelected] = useState(false);

  const refs = {
    cardNumber: useRef<HTMLInputElement>(null),
    expired: useRef<HTMLInputElement>(null),
    owner: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
    pin: useRef<HTMLInputElement>(null),
    nextButton: useRef<HTMLButtonElement>(null),
  };

  const CardEditStates = {
    cardNumbers,
    setCardNumbers,
    expiredMonth,
    setExpiredMonth,
    expiredYear,
    setExpiredYear,
    owner,
    setOwner,
    cvc,
    setCvc,
    pin,
    setPin,
    refs,
  } as TCardEditProperties & TCardEditSetters & TCardEditRefs; // 명시

  // hooks
  const { isValid, getValidationCaption } = useValidators(CardEditStates);
  const { handleExpired, handleBackStep, handleSelectedCardType, handleEnrollStep, handleCardNumbers } = useHandlers({
    ...CardEditStates,
    isValid,
    setCardTypeSelected,
  });

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
