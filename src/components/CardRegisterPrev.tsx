import React, { Dispatch, useContext } from 'react';
import Title from '../components/common/Title';
import CardPreview from '../components/CardPreview';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { CardDispatch } from '../context/cardDispatch';

interface IProps {
  setIsComplete: Dispatch<boolean>;
}

const PaymentCardRegisterPrev = ({ setIsComplete }: IProps) => {
  const navigate = useNavigate();
  const { state } = useContext(CardDispatch);

  return (
    <div className="app">
      <Title title={'< 카드 추가'} onClick={() => navigate('/')} />
      <CardPreview data={state} />
      <CardRegisterForm />
      <Button text={'다음'} onClick={() => setIsComplete(true)} />
    </div>
  );
};

export default PaymentCardRegisterPrev;
