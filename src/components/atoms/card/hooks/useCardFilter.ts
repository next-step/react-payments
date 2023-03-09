import { ICard } from '../../../../domain/types';
import { useMemo } from 'react';
import { filterCardBackDigit, formatterExpiredDate } from '../../../../utils/filter';

export default function useCardFilter({ cardNumber, expiredDate }: ICard) {
  const previewCardNumber = useMemo(() => (
    filterCardBackDigit(cardNumber)
  ), [cardNumber]);

  const formatExpiredDate = useMemo(() => (
    formatterExpiredDate(expiredDate)
  ), [expiredDate]);

  return {
    previewCardNumber,
    formatExpiredDate
  };
}
