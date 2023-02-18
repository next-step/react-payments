import React from 'react';
import styled from '@emotion/styled';

const S = {
  Title: styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #383838;
    cursor: pointer;
  `,
};

interface IProps {
  onClick?: () => void;
  title?: string;
}

const CardPreview = ({ onClick, title }: IProps) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <span className="card-text">1111 2222 **** ****</span>
          <div className="card-bottom__info">
            <span className="card-text">NAME</span>
            <span className="card-text">MM / YY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
