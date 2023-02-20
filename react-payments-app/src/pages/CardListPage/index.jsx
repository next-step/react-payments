import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardShapedButton from '../../components/Card/CardShapedButton/Card';

const CardListPage = () => {
  return (
    <div className='app flex-column-center'>
      <Header pageTitle={'보유카드'} headerIcon={''} />
      <Card
        cardStatus={'small-card'}
        userName={'JEONG'}
        expirationDate={'12/34'}
        cardName={'현정카드'}
        cardNumbers={'1234-5678-****-****'}
      />
      <CardShapedButton />
    </div>
  );
};

export default CardListPage;
