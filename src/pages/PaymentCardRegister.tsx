import React from 'react';
import Header from '../components/Header';
import CardPreview from '../components/CardPreview';
import CardRegisterForm from '../components/CardForm';
import Footer from '../components/Footer';

const PaymentCardRegister = () => {
  return (
    <>
      <Header title={'< 카드 추가'} path={'/'} />
      <CardPreview />
      <CardRegisterForm />
      <Footer text={'다음'} />
    </>
  );
};

export default PaymentCardRegister;
