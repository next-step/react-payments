import { Card } from '@/components';
import { ROUTE } from '@/constants';
import { CARD_LIST_ACTION, useCardListDispatch } from '@/store';
import { CardInfo } from '@/types';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const CardItem = ({
  cardNumber,
  expirationMonth,
  expirationYear,
  ownerName,
  cardCompany,
  cardNickName,
  id,
}: CardInfo) => {
  const navigate = useNavigate();

  const cardInfo = useMemo(() => {
    return {
      cardNumber,
      expirationMonth,
      expirationYear,
      ownerName,
      cardCompany,
    };
  }, [cardNumber, expirationMonth, expirationYear, ownerName, cardCompany]);

  const dispatch = useCardListDispatch();

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE + `/${id}`);
  };

  const handleDelete = () => {
    dispatch(CARD_LIST_ACTION.DELETE_CARD(id));
  };

  return (
    <StyledCardItem>
      <button onClick={handleClick}>
        <Card card={cardInfo} size="small" />
      </button>
      <CardItemBottom>
        <NickName>{cardNickName}</NickName>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </CardItemBottom>
    </StyledCardItem>
  );
};

export default React.memo(CardItem);
const CardItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: 4px;
  top: 16px;
`;

const NickName = styled.p`
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 0 40px;
  margin-top: 16px;
`;

const StyledCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
