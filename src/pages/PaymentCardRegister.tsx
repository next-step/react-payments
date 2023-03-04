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
  const { digits, cvc, expire, name, passwords } = useCardState();
  const dispatchCard = useCardListDispatch();
  const stateCardList = useCardListState();

  const onClickRegisterCard = () => {
    dispatchCard([...stateCardList, { digits, cvc, expire, name, passwords }]);
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
      />
      <CardRegisterForm />
      <Button text={'다음'} onClick={onClickRegisterCard} />
    </>
  );
};

export default PaymentCardRegister;
