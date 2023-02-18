import React from 'react';
import { Header } from '@/components/Header';
import { EmptyCardButton } from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import CardList from './components/CardList/CardList';

const CardListPage = () => {
  return (
    <>
      <Header title="카드 목록" />
      <CardList />
    </>
  );
};

export default CardListPage;
