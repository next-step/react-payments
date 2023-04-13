import React from 'react';
import { ICard } from '../../domain/payments/types';
import '../../styles/card.css';
import CardNumber from './CardNumber';

type TCardProps = {
  card: ICard;
  onClick?: (card: ICard) => void;
  children?: React.ReactNode;
};

function Card({ card, onClick, children }: TCardProps) {
  return (
    <div className="card-wrap">
      <CardNumber card={card} onClick={onClick} />
      {children && <div className="card-portal">{children}</div>}
    </div>
  );
}

export default Card;
