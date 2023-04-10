import React, { FormEvent, useCallback, useEffect, useMemo } from 'react';
import { Card } from '../../components/Card';
import { Frame } from '../../components/Frame';
import { useCardContext } from '../../context/CardContext';
import { useStepContext } from '../../context/StepContext';
import { saveCard } from '../../domain/payments/cardStorage';
import useBasicInput from '../../hooks/useBasicInput';
import { CARD_DETAIL_MESSAGE, PAYMENTS_STEP } from '../../constants';

const CARD_ALIAS_MAX_LENGTH = 10;

type TCardDetailProps = {
  step: number;
};

function CardDetail({ step }: TCardDetailProps) {
  const { setStep } = useStepContext();
  const { card } = useCardContext();

  if (!card) return null;
  const { owner, expiredMonth, expiredYear, numbers, cvc } = card;

  const { text: alias, setText: setAlias, textRef: aliasRef, handleChange: handleAliasChange } = useBasicInput();
  const handleConfirm = useCallback(
    (event: FormEvent) => {
      try {
        saveCard({
          ...card,
          alias: alias || card.name,
        });

        setStep?.(PAYMENTS_STEP.LIST);
      } catch (error) {
        console.error(error);
        alert('알 수 없는 오류가 발생하여 별명을 지정할 수 없었습니다. 다시 시도해 주세요.');
      } finally {
        event.preventDefault();
      }
    },
    [alias, card, setStep]
  );

  useEffect(() => {
    saveCard(card);

    if (card?.alias) {
      setAlias(card.alias);
      setTimeout(() => {
        aliasRef?.current?.focus();
        aliasRef?.current?.setSelectionRange?.(0, card?.alias?.length || 0);
      });
    }
  }, []);

  const message = useMemo(
    //
    () => CARD_DETAIL_MESSAGE.find((detail) => detail.step === step)?.message || '',
    [step]
  );

  return (
    <Frame>
      <div className="flex-center">
        <h2 className="page-title mb-10">{message}</h2>
      </div>
      <Card card={{ owner, expiredMonth, expiredYear, numbers, cvc }} />
      <form onSubmit={handleConfirm}>
        <div className="flex-center">
          <div className="input-box w-75">
            <input
              ref={aliasRef}
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
            <button>확인</button>
          </div>
        </div>
      </form>
    </Frame>
  );
}

export default CardDetail;
