import React, { PropsWithChildren } from 'react';
import { ICard } from '../../domain/payments/types';
import '../../styles/card.css';
import CardNumber from './CardNumber';

type TCardProps = {
  card: ICard;
  onClick?: (card: ICard) => void;
};

function Card({ card, onClick, children }: PropsWithChildren<TCardProps>) {
  return (
    <div className="card-wrap">
      <CardNumber card={card} onClick={onClick} />
      {children && <div className="card-portal">{children}</div>}
    </div>
  );
}

export default Card;
