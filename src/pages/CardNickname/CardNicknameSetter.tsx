import React, { useMemo } from 'react';

import { Card } from '@/components';
import { useCardContext } from '@/stores/CardContext';

import { useValidateCreatePage, useValidateUpdatePage } from './hooks';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';

export function CardNicknameSetter() {
  const cardInfo = useCardContext();

  useValidateCreatePage();
  useValidateUpdatePage();

  const cardExpireDate = useMemo(() => cardInfo?.expireDates?.map((expireDate) => expireDate.value), [cardInfo]);

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card
        disableNickname
        cardCompany={cardInfo?.cardCompanies[0]?.value}
        cardExpireDate={cardExpireDate}
        cardNumbers={cardInfo?.cardNumbers}
        cardOwnerName={cardInfo?.cardOwners?.[0]?.value}
      />

      <NicknameInput cardNickname={cardInfo?.cardNicknames[0]} />

      <CardNicknameSubmitButton />
    </div>
  );
}
