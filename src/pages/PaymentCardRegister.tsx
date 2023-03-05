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
      <Title text={'< 카드 추가'} onClick={() => navigate('/')} />
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
      <Button text={'다음'} onClick={onClickRegisterCard} />
    </>
  );
};

export default PaymentCardRegister;
