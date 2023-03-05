import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import Title from '../components/common/Title';
import { useCardListState } from '../context/CardListContext';

const PaymentCardList = () => {
  const cardList = useCardListState();
  const navigate = useNavigate();

  const updateNickname = (index: number) => {
    // step 3 에서 수정기능 추가할 예정
    navigate('/complete', { state: { isComplete: true, index: index } });
  };

  return (
    <>
      <Title text="보유 카드" />

      <div className="flex-column-center">
        {cardList
          .sort((a, b) => b.createdDate - a.createdDate)
          .map((card, index) => (
            <React.Fragment key={index}>
              <CardPreview {...card} onClick={() => updateNickname(index)} />
              <span className="card-nickname">{card.nickname}</span>
              <span className="card-nickname">삭제</span>
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
