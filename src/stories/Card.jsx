import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';
//👇 컴포넌트의 Docs에서의 설명 부분
/**
 * Render Card
 */

export const Card = ({ cardInfo, size, onClick }) => (
  <div
    className={`${size}-card`}
    style={{ backgroundColor: cardInfo.backgroundColor }}
    onClick={onClick}
    data-number={cardInfo.number}
  >
    <div className="card-top">
      <span className={`card-text__${size}`}>{cardInfo.company}</span>
    </div>
    <div className="card-middle">
      <div className={`${size}-card__chip`}></div>
    </div>
    <div className="card-bottom">
      <div className="card-bottom__number">
        <span className={`card-text__${size}`}>{cardInfo.number}</span>
      </div>
      <div className="card-bottom__info">
        <span className={`card-text__${size}`}>{cardInfo.owner}</span>
        <span className={`card-text__${size}`}>{cardInfo.expiry}</span>
      </div>
    </div>
  </div>
);

// 👇 컴포넌트의 Docs에서의 프로퍼티 설명 부분

Card.propTypes = {
  cardInfo: PropTypes.object,
  size: PropTypes.oneOf(['small', 'big']),
  onClick: PropTypes.func
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
  size: 'small',
  onClick: () => alert('clicked!')
};
