import React from 'react';

import { TextButton } from '@/components';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import PreviewCompleteCard from './components/PreviewCompleteCard/PreviewCompleteCard';
import CardNicknameEdit from './components/CardNicknameEdit/CardNicknameEdit';
import { CARD_LIST_ACTION, useCardListDispatch } from '@/store';
import { ROUTE } from '@/constants';

const CardNicknameEditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardId = Number(location.pathname.split('/')[3]);

  const cardNicknameFormId = 'cardNicknameForm';
  const dispatch = useCardListDispatch();

  const handleDelete = () => {
    // navigate 가 먼저 실행되어야 한다. 순서가 보장이 될까? 보장하려면 어떻게 해야할까?
    navigate(ROUTE.CARD);
    dispatch(CARD_LIST_ACTION.DELETE_CARD(cardId));
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
