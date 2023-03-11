import React from 'react';
import Title from '../components/common/Title';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useCardState } from '../context/CardContext';
import CardPreview from '../components/CardPreview';
import { useCardListDispatch } from '../context/CardListContext';
import styled from '@emotion/styled';
import { ROUTE } from '../constant/route';
import { useModalState } from '../context/ModalContext';

const S = {
  TitleWrapper: styled.div`
    margin-bottom: 25px;
  `,
  ButtonWrapper: styled.div`
    text-align: right;
  `,
};

const PaymentCardRegister = () => {
  const navigate = useNavigate();
  const cardState = useCardState();
  const { addCard } = useCardListDispatch();
  const { setModalState } = useModalState();

  const onClickAddCard = () => {
    addCard({
      ...cardState,
      createdDate: Date.now(),
    });

    navigate(ROUTE.COMPLETE, { state: { isComplete: true } });
  };

  return (
    <>
      <S.TitleWrapper>
        <Title
          text="카드 추가"
          onClick={() => navigate(ROUTE.HOME)}
          isArrow={true}
        />
      </S.TitleWrapper>

      <CardPreview {...cardState} />
      <CardRegisterForm />

      <S.ButtonWrapper>
        <Button text="다음" onClick={onClickAddCard} />
      </S.ButtonWrapper>
    </>
  );
};

export default PaymentCardRegister;
