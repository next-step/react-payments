import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button';
import { Card } from './Card';

const DeleteButton = styled(Button)`
  position: absolute;
  padding: 0px;
  right: -12px;
  top: -12px;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  z-index: 10;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CardContainer = ({ cardInfo, onClick, isEditMode, onDelete }) => {
  return (
    <Container data-number={cardInfo.number}>
      {isEditMode && <DeleteButton children="-" onClick={onDelete} />}
      <Card cardInfo={cardInfo} onClick={onClick} />
      <span className="card-nickname">{cardInfo.nickname}</span>
    </Container>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cardInfo: PropTypes.object,
  handleCardClick: PropTypes.func,
  isEditMode: PropTypes.bool,
  handleDelBtnClick: PropTypes.func
};

CardContainer.defaultProps = {
  cardInfo: {
    company: '농협카드',
    number: '1234-4565-7865-8888',
    owner: 'HYEWON',
    expiry: '11/24',
    nickname: '생활비',
    cvc: '564',
    password1: '2',
    password2: '7',
    backgroundColor: 'skyblue'
  },
  isEditMode: false
};
