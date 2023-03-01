import React from 'react';
import { Header } from '@/components/Header';
import { CardList } from './components';

const CardListPage = () => {
  return (
    <>
      <Header title="보유 카드" />
      <CardList />
    </>
  );
};

export default CardListPage;
