import React from 'react';
import Palette from './Palette';
import { CARD_TYPES } from '../../constants';
import { ICardType } from '../../domain/payments/types';

import '../../styles/card-types.css';
import { Modal } from '../Modal';

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
    <Modal onDimmedClick={handleNonSelected}>
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
    </Modal>
  );
}

export default CardTypeModal;
