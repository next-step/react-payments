import React from 'react';
import { FlexCenter, PageTitle } from '../common/styles';
import Layout from '../components/Layout';
import Card from '../components/Card';
import EmptyCard from '../components/Card/Empty';

const List = () => {
  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        <PageTitle mb10>보유 카드</PageTitle>
      </FlexCenter>
      <Card type="list" />
      <EmptyCard />
    </Layout>
  );
};

export default List;
