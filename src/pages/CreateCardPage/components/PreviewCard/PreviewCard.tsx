import { Card } from '@/components/Card';
import styled from '@emotion/styled';
import React, { useMemo, useRef, useState } from 'react';
import { useCardFieldContext } from '../CardFieldContext';
import { BottomModal } from '@/components/Modal';
import CardCompanySelectFormModal from '../CardCompanySelectModal/CardCompanySelectModal';
import { CARD_COMPANIES } from '@/constants';

const PreviewCard = () => {
  const data = useCardFieldContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <PreviewCardContainer
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <Card size="big" card={card} cardColor={cardColor} />
      <BottomModal
        isOpen={isModalOpen}
        onClose={() => {
          submitButtonRef.current?.click();
          setIsModalOpen(false);
        }}
      >
        <CardCompanySelectFormModal
          ref={submitButtonRef}
          selectedCardCompany={cardCompany}
        />
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
