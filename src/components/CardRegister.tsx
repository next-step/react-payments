import React from 'react';
import Title from '../components/common/Title';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useCardState } from '../context/CardContext';
import CardPreview from './CardPreview';

const PaymentCardRegisterPrev = () => {
  const navigate = useNavigate();
  const { digits, cvc, expire, name, passwords } = useCardState();

  return (
    <div className="app">
      <Title title={'< 카드 추가'} onClick={() => navigate('/')} />
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
    </div>
  );
};

export default PaymentCardRegisterPrev;
