import React from 'react';
import { Card } from '../../components/Card';
import { Frame } from '../../components/Frame';

function CardDetail() {
  return (
    <Frame>
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <Card
          owner={'홍길동'}
          expiredMonth={3}
          expiredYear={24}
          numbers={['1111', '2222', '3333', '4444']}
          cvc={'000'}
        />
        <input type="text" placeholder="카드 별칭을 입력해주세요." />
      </div>
    </Frame>
  );
}

export default CardDetail;
