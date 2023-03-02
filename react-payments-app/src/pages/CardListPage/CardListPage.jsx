import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardShapedButton from '../../components/domain/Card/CardShapedButton/CardShapedButton';
import { useCard } from '../../store/CardContext';

const CardListPage = () => {
  const { cardList } = useCard();

  const navigate = useNavigate();

  return (
    <div className='app flex-column-center'>
      <Header pageTitle={'보유카드'} />

      <CardShapedButton onClick={() => navigate('/registration')} />

      {cardList.map((card) => {
        const {
          id,
          cardNumbers,
          cardExpirationDate,
          cardOwner,
          cardCVC,
          cardPassword,
          cardNickname,
        } = card;

        return (
          <Card
            key={id}
            cardNumbers={cardNumbers}
            cardExpirationDate={cardExpirationDate}
            cardCVC={cardCVC}
            cardPassword={cardPassword}
            cardNickname={cardNickname}
          />
        );
      })}
    </div>
  );
};

export default CardListPage;
