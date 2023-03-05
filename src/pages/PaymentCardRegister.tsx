import React from 'react';
import Title from '../components/common/Title';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useCardState } from '../context/CardContext';
import CardPreview from '../components/CardPreview';
import {
  useCardListDispatch,
  useCardListState,
} from '../context/CardListContext';
import styled from '@emotion/styled';

const S = {
  TitleWrapper: styled.div`
    margin-bottom: 50px;
  `,
  ButtonWrapper: styled.div`
    text-align: right;
  `,
};

const PaymentCardRegister = () => {
  const navigate = useNavigate();
  const {
    digits,
    cvc,
    expire,
    name,
    passwords,
    company,
    nickname,
    createdDate,
  } = useCardState();
  const dispatchCardList = useCardListDispatch();
  const stateCardList = useCardListState();

  const onClickRegisterCard = () => {
    dispatchCardList([
      ...stateCardList,
      {
        digits,
        cvc,
        expire,
        name,
        passwords,
        company,
        nickname,
        createdDate: Date.now(),
      },
    ]);
    navigate('/complete', { state: { isComplete: true } });
  };

  return (
    <>
      <S.TitleWrapper>
        <Title
          text={'카드 추가'}
          onClick={() => navigate('/')}
          isArrow={true}
        />
      </S.TitleWrapper>

      <CardPreview
        digits={digits}
        cvc={cvc}
        expire={expire}
        name={name}
        passwords={passwords}
        company={company}
        nickname={nickname}
        createdDate={createdDate}
      />
      <CardRegisterForm />

      <S.ButtonWrapper>
        <Button text="다음" onClick={onClickRegisterCard} />
      </S.ButtonWrapper>
    </>
  );
};

export default PaymentCardRegister;
