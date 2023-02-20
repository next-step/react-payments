import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardShapedButton from '../../components/Card/CardShapedButton/CardShapedButton';
import { useCard } from '../../store/CardContext';

const CardListPage = () => {
  const navigate = useNavigate();

  return (
    <div className='app flex-column-center'>
      <Header pageTitle={'보유카드'} headerIcon={''} />
      {/** TODO: deal with registered card shown up on the ListPage */}
      {/* <Card
        cardStatus={'small-card'}
        userName={card.cardNumbers? }
        expirationDate={card.expirationDate}
        cardName={'현정카드'}
        cardNumbers={card.cardNumbers}
      /> */}
      <CardShapedButton
        // TODO: add style (cursor pointer)
        onClick={() => navigate('/registration')}
      />
    </div>
  );
};

export default CardListPage;
