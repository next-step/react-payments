import React from 'react';

import { Card } from '@/components/Card';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';

export function CardNickname() {
  // dynamic route가 있다면 그 id를 가지고 localhost에서 가져온다.
  // dynamic route로 정보를 가져왔는데 존재하지 않는다면 error
  // 없다면 Context에 저장돼있는 정보를 사용한다.
  // dynamic route가 없는데 context 정보가 없다면 error

  // card의 id는 dynamic route가 없다면 랜덤으로 새로 붙여준다.
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card />

      <NicknameInput />

      <CardNicknameSubmitButton />
    </div>
  );
}
