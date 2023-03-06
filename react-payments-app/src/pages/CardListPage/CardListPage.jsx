import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardShapedButton from '../../components/domain/Card/CardShapedButton/CardShapedButton';

const CardListPage = () => {
  const navigate = useNavigate();

  // localStorage 전체 값 불러오기
  const keys = Object.keys(localStorage);
  const values = [];
  for (const key of keys) {
    values.push(JSON.parse(localStorage.getItem(key)));
  }

  return (
    <div className='app flex-column-center'>
      <Header pageTitle={'보유카드'} />

      <CardShapedButton onClick={() => navigate('/registration')} />

      {values.map((card) => {
        const {
          id,
          cardNumbers,
          cardExpirationDate,
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
            onClick={() => navigate(`/completed/${id}`)}
          />
        );
      })}
    </div>
  );
};

export default CardListPage;
