import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import Title from '../components/common/Title';
import { useCardListState } from '../context/CardListContext';

const PaymentCardList = () => {
  const cardList = useCardListState();

  return (
    <>
      <Title text="보유 카드" />

      <div className="flex-column-center">
        {cardList.map((card, index) => (
          <React.Fragment key={index}>
            <CardPreview {...card} />
            <span className="card-nickname">{card.nickname}</span>
          </React.Fragment>
        ))}

        <Link to={'/register'}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PaymentCardList;
