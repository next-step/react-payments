import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Common/Button';
import { Card } from './Card';
import '../styles/index.css';

export const CardContainer = ({ cardInfo, handleCardClick, isEditMode, handleDelBtnClick }) => {
  return (
    <div className="card-box" data-number={cardInfo.number} style={{ position: 'absolute' }}>
      {isEditMode && <Button children="-" onClick={handleDelBtnClick} className="delete-button" />}
      <Card cardInfo={cardInfo} onClick={handleCardClick} />
      <span className="card-nickname">{cardInfo.nickname}</span>
    </div>
  );
};

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
