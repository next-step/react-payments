import React, { useMemo } from 'react';

import { Card } from '@/components';
import { useCardContext } from '@/contexts/CardContext';

import { useValidateCreatePage, useValidateUpdatePage } from './hooks';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import { StyledCarNicknameSetterWrapper } from './CardNicknameSetter.styled';

export function CardNicknameSetter() {
  const cardContext = useCardContext();

  useValidateCreatePage();
  useValidateUpdatePage();

  const cardExpireDate = useMemo(() => cardContext?.expireDates?.map((expireDate) => expireDate.value), [cardContext]);

  return (
    <StyledCarNicknameSetterWrapper>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card
        disableNickname
        cardCompany={cardContext?.cardCompanies[0]?.value}
        cardExpireDate={cardExpireDate}
        cardNumbers={cardContext?.cardNumbers}
        cardOwnerName={cardContext?.cardOwners?.[0]?.value}
      />

      <NicknameInput cardNickname={cardContext?.cardNicknames[0]} />

      <CardNicknameSubmitButton />
    </StyledCarNicknameSetterWrapper>
  );
}
