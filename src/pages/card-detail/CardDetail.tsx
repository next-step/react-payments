import React, { useMemo } from 'react';
import { Card, Frame } from '../../components';
import { useBasicInput } from '../../hooks';
import { useCardContext } from '../../context/CardContext';
import { CARD_DETAIL_MESSAGE } from '../../domain/payments/constants';
import useCardDetailHandlers from './hooks/useCardDetailHandlers';

const CARD_ALIAS_MAX_LENGTH = 10;

type TCardDetailProps = {
  step: number;
};

function CardDetail({ step }: TCardDetailProps) {
  const { card } = useCardContext();
  if (!card) return null;
  const { owner, expiredMonth, expiredYear, numbers, cvc } = card;

  const { text: alias, setText: setAlias, textRef: aliasRef, handleChange: handleAliasChange } = useBasicInput();
  const { handleConfirm } = useCardDetailHandlers({ card, newAlias: alias, setAlias, aliasRef });

  const message = useMemo(() => CARD_DETAIL_MESSAGE.find((detail) => detail.step === step)?.message || '', [step]);

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
