import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import Title from '../components/common/Title';
import { ROUTE } from '../constant/route';
import {
  useCardListDispatch,
  useCardListState,
} from '../context/CardListContext';
import { useModalState } from '../context/ModalContext';

const S = {
  Button: styled.div`
    font-size: 10px;
    cursor: pointer;
    text-align: center;
  `,
  Nickname: styled.div`
    margin-top: 7px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  `,
  TitleWrapper: styled.div`
    margin-bottom: 65px;
  `,
  CardWrapper: styled.div`
    margin-bottom: 25px;
  `,
};

const PaymentCardList = () => {
  const cardList = useCardListState();
  const { updateSelectedCard } = useCardListDispatch();
  const { setModalState } = useModalState();

  const showManageCardModal = (index: number) => {
    setModalState({ isShow: true, type: 'MANAGE_CARD' });
    updateSelectedCard(index);
  };

  return (
    <>
      <S.TitleWrapper>
        <Title text="보유 카드" />
      </S.TitleWrapper>

      <div className="flex-column-center">
        {cardList
          .sort((a, b) => b.createdDate - a.createdDate)
          .map((card, index) => (
            <S.CardWrapper key={index}>
              <CardPreview
                {...card}
                onClick={() => showManageCardModal(index)}
                isCursor={true}
              />
              <S.Nickname>{card.nickname}</S.Nickname>
              {/*<S.Button onClick={() => deleteCard(index)}>삭제</S.Button>*/}
            </S.CardWrapper>
          ))}

        <Link to={ROUTE.REGISTER}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PaymentCardList;
