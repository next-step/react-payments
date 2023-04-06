import React, { useCallback, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Frame } from '../../components/Frame';
import { useCardContext } from '../../context/CardContext';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import { saveCard } from '../../domain/payments/cardStorage';
import useBasicInput from '../../hooks/useBasicInput';

const CARD_ALIAS_MAX_LENGTH = 10;

function CardDetail() {
  const { setStep } = useStepContext();
  const { card } = useCardContext();

  if (!card) return null;
  const { owner, expiredMonth, expiredYear, numbers, cvc } = card;

  const { text: alias, handleChange: handleAliasChange } = useBasicInput();

  const handleConfirm = useCallback(() => {
    try {
      const savingAlias = alias.length ? alias : card.name;
      saveCard({ ...card, alias: savingAlias });

      setStep?.(PAYMENTS_STEP.LIST);
    } catch (error) {
      console.error(error);
      alert('알 수 없는 오류가 발생하여 별명을 지정할 수 없었습니다. 다시 시도해 주세요.');
    }
  }, [card, setStep]);

  useEffect(() => {
    saveCard(card);
  }, []);

  return (
    <Frame>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card card={{ owner, expiredMonth, expiredYear, numbers, cvc }} />
      <div className="flex-center">
        <div className="input-box w-75">
          <input
            value={alias}
            onChange={handleAliasChange}
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
