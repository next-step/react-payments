import React from 'react';

import { Card, Input, TextButton } from '@/components';
import useCard from '@/store/hooks/useCard';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { CARD_LIST_ACTION, useCardListDispatch } from '@/store';

const CardCreateCompletePage = () => {
  const cardNickNameFormId = 'cardNickNameForm';
  const location = useLocation();
  const dispatch = useCardListDispatch();
  const cardId = Number(location.pathname.split('/')[3]);

  const {
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
  } = useCard(cardId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardNickName = e.currentTarget.cardNickName.value;
    console.log(cardNickName);
    dispatch(CARD_LIST_ACTION.UPDATE_CARD_NICKNAME(cardId, cardNickName));
  };

  return (
    <CardCreateCompleteContainer>
      <form id={cardNickNameFormId} onSubmit={handleSubmit}>
        <h1>카드등록이 완료되었습니다.</h1>
        <Card
          card={{
            cardNumber,
            expirationMonth,
            expirationYear,
            ownerName,
            cardCompany,
          }}
          size="big"
        />
        <Input.LineInput
          textAlign="center"
          placeholder="카드 별칭 (선택)"
          label="cardNickName"
          name="cardNickName"
          width="70%"
        />
      </form>
      <TextButtonContainer>
        <TextButton form={cardNickNameFormId} type="submit" text="확인" />
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
  h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 130px;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  height: 100%;
`;
