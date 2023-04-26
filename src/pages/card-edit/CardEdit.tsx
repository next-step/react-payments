import React, { RefObject } from 'react';
import { Card, CardNumbersInput, CvcInput, ExpiredInput, Frame, OwnerInput, PinInput } from '../../components';
import '../../styles/input.css';
import '../../styles/utils.css';
import { CardTypeModal } from '../../components/CardTypeModal';
import useCardEdit from './hooks';

function CardEdit() {
  const { cardEditStates, handlers, validators } = useCardEdit();

  const {
    cardNumbers: { value: cardNumbers },
    expiredMonth: { value: expiredMonth },
    expiredYear: { value: expiredYear },
    owner: { value: owner, set: setOwner },
    cvc: { value: cvc, set: setCvc },
    pin: { value: pin, set: setPin },
    cardTypeSelected: { value: cardTypeSelected, set: setCardTypeSelected },
    refs,
  } = cardEditStates;

  const { handleBackStep, handleEnrollStep, handleCardNumbers, handleExpired, handleSelectedCardType } = handlers;
  const { isValid, getValidationCaption } = validators;

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
            <button ref={refs.nextButton as RefObject<HTMLButtonElement>} disabled={!isValid}>
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
