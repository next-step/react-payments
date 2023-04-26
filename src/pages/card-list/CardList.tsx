import React, { useCallback, useState } from 'react';
import { Card } from '../../components';
import { Frame } from '../../components/Frame';
import { getSavedCards, deleteCard } from '../../services/cardStorage';
import { ICard } from '../../domain/payments/types';
import './CardList.css';
import useCardList from './hooks/useCardList';

function CardList() {
  const [cards, setCards] = useState(getSavedCards());
  const { addCard, updateCard } = useCardList();

  const handleDeletingCard = useCallback((card: ICard) => {
    deleteCard(card);
    setCards(getSavedCards());
  }, []);

  return (
    <Frame title="카드 목록">
      <ul className="card-list">
        <li>
          <div className="empty-card" onClick={addCard}>
            +
          </div>
        </li>
        {cards.map((card) => {
          const { id, name, owner, numbers, expiredMonth, expiredYear, alias, cvc } = card;
          return (
            <li key={id}>
              <Card card={{ name, owner, numbers, expiredMonth, expiredYear, alias, cvc }} onClick={updateCard}>
                <div className="card-controller">
                  <a href="#">
                    <strong>{alias || name}</strong>
                  </a>
                  <div className="delete-wrap">
                    <button type="button" onClick={() => handleDeletingCard(card)}>
                      삭제
                    </button>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </Frame>
  );
}

export default CardList;
