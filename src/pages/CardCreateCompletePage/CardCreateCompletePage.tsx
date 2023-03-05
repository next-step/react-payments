import React from 'react';

import { TextButton } from '@/components';
import styled from '@emotion/styled';
import PreviewCompleteCard from './components/PreviewCompleteCard/PreviewCompleteCard';
import CardNicknameEdit from './components/CardNicknameEdit/CardNicknameEdit';
import { useParams } from 'react-router-dom';

const CardCreateCompletePage = () => {
  const params = useParams<{ cardId: string }>();
  const cardId = Number(params.cardId);

  const cardNicknameFormId = 'cardNicknameForm';

  return (
    <CardCreateCompleteContainer>
      <section>
        <PreviewCompleteCard
          title="카드등록이 완료되었습니다."
          cardId={cardId}
        />
        <CardNicknameEdit formId={cardNicknameFormId} cardId={cardId} />
      </section>
      <TextButtonContainer>
        <TextButton form={cardNicknameFormId} type="submit" text="확인" />
      </TextButtonContainer>
    </CardCreateCompleteContainer>
  );
};

export default CardCreateCompletePage;

const TextButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const CardCreateCompleteContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;
