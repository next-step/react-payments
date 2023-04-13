import React, { useMemo } from 'react';
import { getDisplayCardNumbers } from '../../../util/card';
import { CARD_TYPES, DEFAULT_CARD_TYPE } from '../../../constants';

type THookCard = {
  cardNumbers: string[];
  cardName?: string;
};
export default ({ cardNumbers, cardName }: THookCard) => {
  const cardNumber = useMemo(() => getDisplayCardNumbers(cardNumbers), [cardNumbers]);
  const cardType = useMemo(() => {
    const [vendor, type] = cardNumbers.slice(0, 2);
    return (
      CARD_TYPES.find(({ cardNumberPrefix }) => cardNumberPrefix[0] === vendor && cardNumberPrefix[1] === type) ||
      DEFAULT_CARD_TYPE
    );
  }, [cardNumbers]);
  const displayCardName = useMemo(() => cardName || cardType.cardName, [cardName, cardType]);

  return { cardNumber, cardType, displayCardName };
};
