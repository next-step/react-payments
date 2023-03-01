import React from 'react';
import { css, cx } from '@emotion/css';
import { Link } from 'react-router-dom';

import { Card } from 'components/domain';

import { useCardState } from 'contexts/CardContextProvider/hooks';

function HoldingCards() {
  const { cards } = useCardState();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Link
        to="new"
        className={cx(
          css`
            text-decoration: none;
          `,
          'card-box'
        )}
      >
        <div className="empty-card">+</div>
      </Link>
      {cards.map((card) => (
        <div
          key={Object.values(card.cardNumber).toString()}
          className={css`
            text-align: center;
          `}
        >
          <Card {...card} />
          <span className="card-nickname">{card.alias}</span>
        </div>
      ))}
    </div>
  );
}

export default HoldingCards;
