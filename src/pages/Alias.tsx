import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { FlexCenter, PageTitle } from '../common/styles';
import CardAlias from '../components/Input/CardAlias';
import Button from '../components/Button';

const Alias = () => {
  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        <PageTitle mb10>카드등록이 완료되었습니다.</PageTitle>
      </FlexCenter>
      <Card type="alias" />
      <CardAlias />
      <Button mt50 />
    </Layout>
  );
};

export default Alias;
