import React from 'react';
import { Frame } from '../../components/Frame';
import { PAYMENTS_STEP, useStepContext } from '../../context/StepContext';
import './CardList.css';

function CardList() {
  const { setStep } = useStepContext();

  const handleClick = () => {
    setStep && setStep(PAYMENTS_STEP.ADD);
  };

  return (
    <Frame title="카드 목록">
      <ul>
        <li>
          <div className="empty-card" onClick={handleClick}>
            +
          </div>
        </li>
      </ul>
    </Frame>
  );
}

export default CardList;
