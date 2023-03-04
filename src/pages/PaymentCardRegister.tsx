import React from 'react';
import Title from '../components/common/Title';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useCardState } from '../context/CardContext';
import CardPreview from '../components/CardPreview';

const PaymentCardRegister = () => {
  const navigate = useNavigate();
  const { digits, cvc, expire, name, passwords } = useCardState();

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
      <Button
        text={'다음'}
        onClick={() => navigate('/complete', { state: { isComplete: true } })}
      />
    </>
  );
};

export default PaymentCardRegister;
