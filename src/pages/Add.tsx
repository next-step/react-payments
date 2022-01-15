import React from 'react';
import Card from '../components/Card';
import CardName from '../components/Input/CardName';
import CardOwner from '../components/Input/CardOwner';
import CardPassword from '../components/Input/CardPassword';
import ExpirationDate from '../components/Input/ExpirationDate';
import SecurityCode from '../components/Input/SecurityCode';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { PageTitle } from '../common/styles';

const Add = () => {
  return (
    <Layout>
      <PageTitle> {`<`} 카드 추가</PageTitle>
      <Card type="add" />
      <CardName />
      <ExpirationDate />
      <CardOwner />
      <SecurityCode />
      <CardPassword />
      <Button />
      <Modal />
    </Layout>
  );
};

export default Add;
