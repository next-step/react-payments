import React from 'react';
import { FlexCenter, PageTitle } from '../common/styles';
import Layout from '../components/Layout';
import Card from '../components/Card';

const data = {
  cardNumber: ['1234', '1234', '2345', '4567'],
  expirationNumber: ['12', '24'],
};

const List = () => {
  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        <PageTitle mb10>보유 카드</PageTitle>
      </FlexCenter>
      <Card
        type="list"
        size="small"
        cardNumber={data.cardNumber}
        expirationNumber={data.expirationNumber}
      />
      <Card type="empty" size="small" />
    </Layout>
  );
};

export default List;
