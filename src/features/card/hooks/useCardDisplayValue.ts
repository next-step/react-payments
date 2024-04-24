import { useMemo } from 'react';

import { CardInputInterface } from '@/features/card/types/cardTypes';
import {
  formattedDisplayCardNumber,
  formattedExpirationDate,
  formattedOwnerName,
} from '@/features/card/utils/formattedString';

interface Props {
  card: CardInputInterface;
}

export const useCardDisplayValue = ({ card }: Props) => {
  const displayCardNumber = useMemo(
    () => formattedDisplayCardNumber(card.cardNumber),
    [card.cardNumber],
  );
  const displayOwnerName = useMemo(() => formattedOwnerName(card.ownerName), [card.ownerName]);
  const displayExpirationDate = useMemo(
    () => formattedExpirationDate(card.expirationDate),
    [card.expirationDate],
  );

  return {
    displayCardNumber,
    displayOwnerName,
    displayExpirationDate,
  };
};
