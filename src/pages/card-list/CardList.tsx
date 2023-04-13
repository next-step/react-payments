import React, { useCallback, useState } from 'react';
import { Card } from '../../components';
import { Frame } from '../../components/Frame';
import { useStepContext } from '../../context/StepContext';
import { getSavedCards, removeCard } from '../../domain/payments/cardStorage';
import { ICard } from '../../domain/payments/types';
import './CardList.css';
import { useCardContext } from '../../context/CardContext';
import { PAYMENTS_STEP } from '../../constants';

function CardList() {
  const [cards, setCards] = useState(getSavedCards());

  const { setStep } = useStepContext();
  const { setCard } = useCardContext();

  const handleAddingCard = useCallback(() => {
    setStep?.(PAYMENTS_STEP.ADD);
  }, [setStep]);

  const handleUpdatingCard = useCallback(
    (card: ICard) => {
      setCard?.(card);
      setStep?.(PAYMENTS_STEP.UPDATING_CARD_ALIAS);
    },
    [setStep]
  );

  const handleDeletingCard = useCallback((card: ICard) => {
    removeCard(card);
    setCards(getSavedCards());
  }, []);

  return (
    <Frame title="카드 목록">
      <ul className="card-list">
        <li>
          <div className="empty-card" onClick={handleAddingCard}>
            +
          </div>
        </li>
        {cards.map((card) => {
          const { name, owner, numbers, expiredMonth, expiredYear, alias, cvc } = card;
          return (
            <li key={numbers.join('')}>
              <Card card={{ name, owner, numbers, expiredMonth, expiredYear, alias, cvc }} onClick={handleUpdatingCard}>
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
