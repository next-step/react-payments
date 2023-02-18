import React from 'react';
import { Header } from '@/components/Header';
import { EmptyCardButton } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const CardListPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card/create');
  };

  return (
    <>
      <Header title="카드 목록" />
      <EmptyCardButton onClick={handleClick} />
    </>
  );
};

export default CardListPage;
