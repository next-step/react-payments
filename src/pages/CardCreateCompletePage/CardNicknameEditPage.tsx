import React from 'react';

import { TextButton } from '@/components';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import PreviewCompleteCard from './components/PreviewCompleteCard/PreviewCompleteCard';
import CardNicknameEdit from './components/CardNicknameEdit/CardNicknameEdit';
import { CARD_LIST_ACTION, useCardListDispatch } from '@/store';
import { ROUTE } from '@/constants';

const CardNicknameEditPage = () => {
  const navigate = useNavigate();

  const params = useParams<{ cardId: string }>();
  const cardId = Number(params.cardId);

  const cardNicknameFormId = 'cardNicknameForm';
  const dispatch = useCardListDispatch();

  const handleDelete = () => {
    dispatch(CARD_LIST_ACTION.DELETE_CARD(cardId));
    navigate(ROUTE.CARD);
  };

  return (
    <CardNicknameEditPageContainer>
      <section>
        <PreviewCompleteCard title="카드 닉네임 변경" cardId={cardId} />
        <CardNicknameEdit formId={cardNicknameFormId} cardId={cardId} />
      </section>
      <TextButtonContainer>
        <TextButton
          type="button"
          text="삭제"
          color="red"
          onClick={handleDelete}
        />
        <TextButton form={cardNicknameFormId} type="submit" text="확인" />
      </TextButtonContainer>
    </CardNicknameEditPageContainer>
  );
};

export default CardNicknameEditPage;

const TextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardNicknameEditPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;
