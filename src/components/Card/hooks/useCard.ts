import { useMemo } from 'react';
import { getDisplayCardNumbers } from '../../../domain/payments/card';
import { CARD_TYPES, DEFAULT_CARD_TYPE } from '../../../domain/payments/constants';

type THookCard = {
  cardNumbers: string[];
  cardName?: string;
};
const useCard = ({ cardNumbers, cardName }: THookCard) => {
  const cardNumber = useMemo(() => getDisplayCardNumbers(cardNumbers), [cardNumbers]);
  const cardType = useMemo(() => {
    const [vendor, type] = cardNumbers.slice(0, 2);
    return (
      CARD_TYPES.find(({ numberPrefix }) => numberPrefix[0] === vendor && numberPrefix[1] === type) || DEFAULT_CARD_TYPE
    );
  }, [cardNumbers]);
  const displayCardName = useMemo(() => cardName || cardType.name, [cardName, cardType]);

  return { cardNumber, cardType, displayCardName };
};

export default useCard;
