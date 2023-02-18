import React from 'react';
import { Header } from '@/components/Header';
import { CardList } from './components';

const CardListPage = () => {
  return (
    <>
      <Header title="카드 목록" />
      <CardList />
    </>
  );
};

export default CardListPage;
