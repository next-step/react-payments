import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';
//👇 컴포넌트의 Docs에서의 설명 부분
/**
 * Render Card
 */

export const Card = ({ cardInfo, size }) => (
  <>
    <div className="card-box">
      <div className={`${size}-card`} style={{ backgroundColor: cardInfo.backgroundColor }}>
        <div className="card-top">
          <span className="card-text">{cardInfo.company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardInfo.number}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardInfo.owner}</span>
            <span className="card-text">{cardInfo.expiry}</span>
          </div>
        </div>
      </div>
    </div>
    <span className="card-nickname">{cardInfo.nickname}</span>
  </>
);

// 👇 컴포넌트의 Docs에서의 프로퍼티 설명 부분

Card.propTypes = {
  isRegistered: PropTypes.bool,
  cardInfo: PropTypes,
  size: PropTypes.oneOf(['small', 'big'])
};

Card.defaultProps = {
  cardInfo: {
    company: '',
    number: '',
    owner: '',
    expiry: '',
    nickname: '',
    cvc: '',
    password1: '',
    password2: '',
    backgroundColor: '#e5e5e5'
  },
  size: 'small'
};
