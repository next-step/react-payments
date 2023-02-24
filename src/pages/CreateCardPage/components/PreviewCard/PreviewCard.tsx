import { Card } from '@/components/Card';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useCardFieldContext } from '../CardFieldContext';
import { BottomModal } from '@/components/Modal';

const PreviewCard = () => {
  const data = useCardFieldContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!data) return null;

  const { cardNumber, expirationMonth, expirationYear, ownerName } = data;
  const cardName = '신한카드';
  const cardColor = 'primary';
  return (
    <PreviewCardContainer
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <Card
        size="big"
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        ownerName={ownerName}
        cardName={cardName}
        cardColor={cardColor}
      />
      <BottomModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div>안녕하세요</div>
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
