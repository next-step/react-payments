import React from 'react';
import Palette from './Palette';
import { CARD_TYPES } from '../../constants';
import { ICardType } from '../../domain/payments/types';

import '../../styles/card-types.css';

type TCardTypeModalProps = {
  onClick?: (cardType?: ICardType) => void;
};

function CardTypeModal({ onClick }: TCardTypeModalProps) {
  const handleSelectedPalette = (cardType: ICardType) => {
    onClick?.(cardType);
  };
  const handleNonSelected = () => {
    onClick?.();
  };

  return (
    <>
      <div className="modal-dimmed" onClick={handleNonSelected}></div>
      <div className="modal">
        <ul className="palette">
          {CARD_TYPES.map((cardType) => {
            const { id, color, cardName } = cardType;
            return (
              <li key={id} onClick={() => handleSelectedPalette(cardType)}>
                <Palette color={color} label={cardName} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CardTypeModal;
