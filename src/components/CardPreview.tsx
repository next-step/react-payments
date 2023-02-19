import React, { useContext } from 'react';
import { CardDispatch } from '../context/cardDispatch';

const CardPreview = () => {
  const { state } = useContext(CardDispatch);

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <span className="card-text">
            {state.digit1 && state.digit1}
            {state.digit2 && '-' + state.digit2}
            {state.digit3 && '-' + '*'.repeat(state.digit3.length)}
            {state.digit4 && '-' + '*'.repeat(state.digit4.length)}
          </span>
          <div className="card-bottom__info">
            <span className="card-text">{state.name || 'NAME'}</span>
            <span className="card-text">{state.expire || 'MM / YY'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
