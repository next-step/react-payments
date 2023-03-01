import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardShapedButton from '../../components/domain/Card/CardShapedButton/CardShapedButton';
import { useCard } from '../../store/CardContext';

const CardListPage = () => {
  const { cardInfo } = useCard();

  const navigate = useNavigate();
  console.log(cardInfo);

  return (
    <div className='app flex-column-center'>
      <Header pageTitle={'보유카드'} />
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
