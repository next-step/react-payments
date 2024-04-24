import { ReactNode } from 'react';

import { CARD_BOX_TYPE } from '@/features/card/constants/cardShape';
import { CardBoxType } from '@/features/card/types/cardUITypes';

import { CardBottom } from './CardBottom';
import { CardMiddle } from './CardMiddle';
import { CardTop } from './CardTop';

interface Props {
  type: CardBoxType;
  children: ReactNode;
}

export const CardBox = ({ type, children }: Props) => {
  const renderCard = (type: CardBoxType) => {
    if (type === CARD_BOX_TYPE.big) {
      return <div className="card-inner big-card">{children}</div>;
    }

    if (type === CARD_BOX_TYPE.small) {
      return <div className="card-inner small-card">{children}</div>;
    }

    // type === CARD_BOX_TYPE.empty;
    return <div className="card-inner empty-card">{children}</div>;
  };

  return <div className="card-box">{renderCard(type)}</div>;
};

CardBox.Top = CardTop;
CardBox.Middle = CardMiddle;
CardBox.Bottom = CardBottom;
