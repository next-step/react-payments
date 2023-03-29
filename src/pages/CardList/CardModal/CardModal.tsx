import React, { MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '@/components';
import { TCard, useApplicationContext } from '@/contexts/ApplicationContext';
import { useModal } from '@/hooks';
import { routes } from '@/router';

import {
  StyledCardModalWrapper,
  StyledControllersContainer,
  StyledConfirmButton,
  StyledCardModalButton,
} from './CardModal.styled';

export type TCardModalDTO = { id: string; card: TCard };

interface CardModalProps {
  cardInfo?: TCardModalDTO | null;
  onModalHide?: () => void;
}

export function CardModal({ cardInfo, onModalHide }: CardModalProps) {
  const navigator = useNavigate();
  const appContext = useApplicationContext();

  const { Modal, showModal } = useModal();

  useEffect(() => {
    if (cardInfo) {
      showModal();
    }
  }, [showModal, cardInfo]);

  const handleConfirmButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!cardInfo) return;

    appContext?.onCardConfirmClick(cardInfo.card);
  };

  const handleNicknameChangeButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigator(routes.createCardNickname(cardInfo?.id));
  };

  if (!cardInfo) return null;
  const { card } = cardInfo;

  return (
    <Modal onBackgroundClick={onModalHide}>
      <StyledCardModalWrapper>
        <Card
          cardCompany={card?.cardCompanies[0].value}
          cardExpireDate={card?.expireDates?.map((expireDate: { value: string }) => expireDate.value)}
          cardNumbers={card?.cardNumbers}
          cardOwnerName={card?.cardOwners?.[0]?.value}
          cardNickname={card?.cardNicknames[0]?.value}
        />
        <StyledControllersContainer>
          <StyledConfirmButton onClick={handleConfirmButtonClick}>선택</StyledConfirmButton>
          <StyledCardModalButton onClick={handleNicknameChangeButtonClick}>닉네임 변경</StyledCardModalButton>
        </StyledControllersContainer>
      </StyledCardModalWrapper>
    </Modal>
  );
}
