import React, { useEffect } from 'react';
import { Card } from '../../components/Card';
import { Frame } from '../../components/Frame';
import { useCardContext } from '../../context/CardContext';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import { saveCard } from '../../domain/payments/cardStorage';

const CARD_ALIAS_MAX_LENGTH = 10;

function CardDetail() {
  const { setStep } = useStepContext();
  const { card } = useCardContext();

  if (!card) return null;
  const { owner, expiredMonth, expiredYear, numbers, cvc } = card;

  const handleConfirm = () => {
    setStep && setStep(PAYMENTS_STEP.LIST);
  };

  useEffect(() => {
    console.log('ㅇㅅㅇ');
    saveCard(card);
  }, []);

  return (
    <Frame>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={numbers} cvc={cvc} />
      <div className="flex-center">
        <div className="input-box w-75">
          <input
            type="text"
            className="input-basic"
            placeholder="카드 별칭을 입력해주세요."
            maxLength={CARD_ALIAS_MAX_LENGTH}
          />
        </div>
      </div>

      <div className="flex-bottom button-box">
        <div className="button-text">
          <button onClick={handleConfirm}>확인</button>
        </div>
      </div>
    </Frame>
  );
}

export default CardDetail;
