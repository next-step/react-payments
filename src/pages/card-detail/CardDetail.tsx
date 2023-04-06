import React from 'react';
import { Card } from '../../components/Card';
import { Frame } from '../../components/Frame';
import { useCardContext } from '../../context/CardContext';

const CARD_ALIAS_MAX_LENGTH = 10;

function CardDetail() {
  const { card } = useCardContext();

  if (!card) return null;
  const { owner, expiredMonth, expiredYear, numbers, cvc } = card;

  return (
    <Frame>
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <Card owner={owner} expiredMonth={expiredMonth} expiredYear={expiredYear} numbers={numbers} cvc={cvc} />
        <input
          type="text"
          className="input-box"
          placeholder="카드 별칭을 입력해주세요."
          maxLength={CARD_ALIAS_MAX_LENGTH}
        />
      </div>
    </Frame>
  );
}

export default CardDetail;
