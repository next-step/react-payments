import { Card } from '@/components/Card';
import styled from '@emotion/styled';
import React, { useCallback, useMemo, useState } from 'react';
import { useCardFieldContext } from '../CardFieldContext';
import { BottomModal } from '@/components/Modal';
import CardCompanySelectFormModal from '../CardCompanySelectModal/CardCompanySelectModal';
import { CARD_COMPANIES } from '@/constants';

const PreviewCard = () => {
  const data = useCardFieldContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
  } = data || {};

  const cardName = cardCompany ? CARD_COMPANIES[cardCompany].name : '';
  const cardColor = cardCompany ? CARD_COMPANIES[cardCompany].color : 'gray1';

  const card = useMemo(
    () => ({
      cardNumber,
      expirationMonth,
      expirationYear,
      ownerName,
      cardName,
    }),
    [cardNumber, expirationMonth, expirationYear, ownerName, cardName]
  );

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <PreviewCardContainer onClick={onOpen}>
      <Card size="big" card={card} cardColor={cardColor} />
      <BottomModal isOpen={isModalOpen} onClose={onClose}>
        <CardCompanySelectFormModal selectedCardCompany={cardCompany} />
      </BottomModal>
    </PreviewCardContainer>
  );
};

export default React.memo(PreviewCard);

const PreviewCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  margin-bottom: 40px;
`;
