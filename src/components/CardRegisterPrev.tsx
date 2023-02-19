import React, { Dispatch } from 'react';
import Title from '../components/common/Title';
import CardPreview from '../components/CardPreview';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';

interface IProps {
  setIsComplete: Dispatch<boolean>;
}

const PaymentCardRegisterPrev = ({ setIsComplete }: IProps) => {
  return (
    <div className="app">
      <Title title={'< 카드 추가'} path={'/'} />
      <CardPreview />
      <CardRegisterForm />
      <Button text={'다음'} onClick={() => setIsComplete(true)} />
    </div>
  );
};

export default PaymentCardRegisterPrev;
