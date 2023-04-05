import React, { useCallback, useState } from 'react';
import { Card } from '../../components';
import { Frame } from '../../components/Frame';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import { getSavedCards, removeCard } from '../../domain/payments/cardStorage';
import { ICard } from '../../domain/payments/types';
import './CardList.css';

function CardList() {
  const [cards, setCards] = useState(getSavedCards());
  const { setStep } = useStepContext();

  const handleAddCard = useCallback(() => {
    setStep && setStep(PAYMENTS_STEP.ADD);
  }, [setStep]);

  const handleDeleteCard = useCallback(
    (card: ICard) => {
      removeCard(card);
      setCards(getSavedCards());
    },
    [setCards]
  );

  return (
    <Frame title="카드 목록">
      <ul className="card-list">
        <li>
          <div className="empty-card" onClick={handleAddCard}>
            +
          </div>
        </li>
        {cards.map(({ cardName, owner, numbers, expiredMonth, expiredYear, alias, cvc }) => (
          <li key={numbers.join('')}>
            <Card
              card={{ cardName, owner, numbers, expiredMonth, expiredYear, alias, cvc }}
              deletable
              onDeleteClick={handleDeleteCard}
            />
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export default CardList;
