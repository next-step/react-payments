import { Card, Input, TextButton } from '@/components';
import styled from '@emotion/styled';
import React from 'react';

const CardCreateCompletePage = () => {
  const cardNickNameFormId = 'cardNickName';
  return (
    <CardCreateCompleteContainer>
      <form id={cardNickNameFormId}>
        <h1>카드등록이 완료되었습니다.</h1>
        <Card
          card={{
            cardNumber: '1234-5678-9012-3456',
            expirationMonth: '12',
            expirationYear: '20',
            ownerName: '홍길동',
          }}
          cardColor="blue"
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
