import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { FlexCenter, PageTitle } from '../common/styles';
import Button from '../components/Button';
import { ButtonBox } from '../components/Button/styles';
import Input from '../components/Input';

const data = {
  cardNumber: ['1234', '1234', '2345', '4567'],
  expirationNumber: ['12', '24'],
};

const Alias = () => {
  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        <PageTitle mb10>카드등록이 완료되었습니다.</PageTitle>
      </FlexCenter>
      <Card
        type="alias"
        cardNumber={data.cardNumber}
        expirationNumber={data.expirationNumber}
      />
      <Input type="text" value="별명" onChange={() => {}} />
      <ButtonBox mt50>
        <Button label="다음" onClick={() => {}} />
      </ButtonBox>
    </Layout>
  );
};

export default Alias;
