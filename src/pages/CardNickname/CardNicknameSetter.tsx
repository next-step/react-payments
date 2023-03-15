import React from 'react';

import { Card } from '@/components/Card';
import { useCardInfoSelector } from '@/stores/CardCreatorContext';

import { useValidateCreatePage } from './hooks/useValidateCreatePage';
import { useValidateUpdatePage } from './hooks/useValidateUpdatePage';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';

export function CardNicknameSetter() {
  const cardInfo = useCardInfoSelector();

  useValidateCreatePage();
  useValidateUpdatePage();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card
        disableNickname
        cardCompany={cardInfo?.cardCompany?.value}
        cardExpireDate={cardInfo?.expireDates?.map((ss) => ss.value)}
        cardNumbers={cardInfo?.cardNumbers}
        cardOwnerName={cardInfo?.cardOwners?.[0]?.value}
        cardNickname={cardInfo?.cardNickname?.value}
      />

      <NicknameInput />

      <CardNicknameSubmitButton />
    </div>
  );
}
