import { ICard } from '../../../../domain/types';
import { useMemo } from 'react';
import { filterCardBackDigit } from '../../../../utils/filter';

export default function useCardFilter({ cardNumber }: ICard) {
  const previewCardNumber = useMemo(() => (
    filterCardBackDigit(cardNumber)
  ), [cardNumber]);

  return {
    previewCardNumber
  };
}
