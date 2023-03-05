import styled from '@emotion/styled';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import Title from '../components/common/Title';
import {
  useCardListDispatch,
  useCardListState,
} from '../context/CardListContext';

const S = {
  Button: styled.div`
    font-size: 10px;
    cursor: pointer;
  `,
};

const PaymentCardList = () => {
  const cardList = useCardListState();
  const stateCardList = useCardListState();
  const dispatchCardList = useCardListDispatch();
  const navigate = useNavigate();

  const updateNickname = (index: number) => {
    // step 3 에서 수정기능 추가할 예정
    navigate('/complete', { state: { isComplete: true, index: index } });
  };

  const deleteCard = (index: number) => {
    const updatedCardList = stateCardList.filter(
      (_, cardIndex) => index !== cardIndex
    );
    dispatchCardList(updatedCardList);
  };

  return (
    <>
      <Title text="보유 카드" />

      <div className="flex-column-center">
        {cardList
          .sort((a, b) => b.createdDate - a.createdDate)
          .map((card, index) => (
            <React.Fragment key={index}>
              <CardPreview
                {...card}
                onClick={() => updateNickname(index)}
                isCursor={true}
              />
              <span className="card-nickname">{card.nickname}</span>
              <S.Button onClick={() => deleteCard(index)}>삭제</S.Button>
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
